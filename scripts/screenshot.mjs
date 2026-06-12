/**
 * Visual QA via Chrome DevTools Protocol.
 * Loads each route, scrolls through the page so ScrollTrigger animations fire,
 * and saves viewport screenshots at desktop + mobile sizes into .shots/.
 *
 * Usage: node scripts/screenshot.mjs [baseUrl]
 */
import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";

const BASE = process.argv[2] ?? "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = ".shots";

const PAGES = ["/", "/projects", "/about", "/team", "/contact", "/join"];
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

const errors = [];

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
    deviceScaleFactor: 1,
  });

  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${vp.name}] console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[${vp.name}] pageerror: ${err.message}`));

  for (const route of PAGES) {
    const slug = route === "/" ? "home" : route.slice(1);
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
    await sleep(2200); // let entrance animations settle

    // Hero / top of page
    await page.screenshot({ path: `${OUT}/${slug}-${vp.name}-0.png` });

    // Scroll through the page in viewport steps, screenshotting along the way
    const total = await page.evaluate(() => document.body.scrollHeight);
    const steps = Math.min(8, Math.ceil(total / vp.height) - 1);
    for (let i = 1; i <= steps; i++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), i * vp.height);
      await sleep(1100);
      await page.screenshot({ path: `${OUT}/${slug}-${vp.name}-${i}.png` });
    }
  }
  await page.close();
}

await browser.close();

if (errors.length) {
  console.log("BROWSER ERRORS:");
  for (const e of [...new Set(errors)]) console.log(" -", e);
} else {
  console.log("No browser errors.");
}
console.log("Screenshots saved to", OUT);
