"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uSize;
  attribute float aSeed;
  varying float vGlow;
  varying float vSeed;

  void main() {
    vec3 p = position;

    // Layered travelling waves, the "thinking" surface
    float t = uTime * 0.6;
    float wave =
        sin(p.x * 0.32 + t) * 0.42
      + cos(p.z * 0.38 + t * 0.85) * 0.38
      + sin((p.x + p.z) * 0.18 + t * 0.5) * 0.34;

    // Pointer ripple: lift the surface around the cursor
    float d = distance(p.xz, uPointer);
    float ripple = smoothstep(4.5, 0.0, d) * 1.1;

    p.y += wave + ripple;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float twinkle = 0.65 + 0.35 * sin(uTime * (1.2 + aSeed * 2.0) + aSeed * 40.0);
    gl_PointSize = uSize * twinkle * (1.0 + ripple * 1.4) * (28.0 / -mv.z);

    vGlow = clamp((wave + 1.2) / 2.4, 0.0, 1.0) * twinkle + ripple * 0.9;
    vSeed = aSeed;
  }
`;

const FRAGMENT = /* glsl */ `
  varying float vGlow;
  varying float vSeed;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.08, d);
    if (alpha < 0.01) discard;

    vec3 dim  = vec3(0.32, 0.33, 0.36);
    vec3 lime = vec3(0.851, 0.976, 0.353);
    // A sparse subset of particles carries the accent colour
    float limeAmount = step(0.82, vSeed) * vGlow;
    vec3 color = mix(dim, lime, limeAmount);

    gl_FragColor = vec4(color, alpha * (0.25 + vGlow * 0.75));
  }
`;

export function HeroCanvas({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0b, 0.052);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.6, 8.5);
    camera.lookAt(0, 0.4, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Particle grid
    const COLS = 160;
    const ROWS = 80;
    const COUNT = COLS * ROWS;
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const W = 30;
    const D = 16;

    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        positions[i * 3] = (x / (COLS - 1) - 0.5) * W;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z / (ROWS - 1) - 0.5) * D - 2;
        seeds[i] = Math.random();
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(100, 100) },
        uSize: { value: 2.6 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Pointer → world-space target on the particle plane (lerped each frame)
    const pointerTarget = new THREE.Vector2(100, 100);
    const pointerCurrent = new THREE.Vector2(100, 100);
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const ndc = new THREE.Vector2();
    const hit = new THREE.Vector3();

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      ndc.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(ndc, camera);
      if (raycaster.ray.intersectPlane(plane, hit)) {
        pointerTarget.set(hit.x, hit.z);
      }
    };
    const onPointerLeave = () => pointerTarget.set(100, 100);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // Only render while on screen and the tab is visible
    let inView = true;
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    io.observe(container);

    const clock = new THREE.Clock();
    let raf = 0;
    let elapsed = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!inView || document.hidden) return;
      elapsed += clock.getDelta();
      material.uniforms.uTime.value = elapsed;
      pointerCurrent.lerp(pointerTarget, 0.06);
      (material.uniforms.uPointer.value as THREE.Vector2).copy(pointerCurrent);
      // Slow camera drift for depth
      camera.position.x = Math.sin(elapsed * 0.08) * 0.5;
      camera.lookAt(0, 0.4, 0);
      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      material.uniforms.uTime.value = 4;
      renderer.render(scene, camera);
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
