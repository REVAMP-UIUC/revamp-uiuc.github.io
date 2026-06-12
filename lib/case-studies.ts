export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: string;
  industry: string;
  year: string;
  description: string;
  outcome: string;
  tags: string[];
  logs: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "atlas-voice",
    client: "Atlas Realty Group",
    title: "Voice Feedback Engine",
    category: "Conversational AI",
    industry: "Real Estate",
    year: "2025",
    description:
      "An autonomous voice agent that calls buyers after every showing, holds a natural conversation, and logs structured feedback straight into the CRM — no agent follow-up required.",
    outcome: "100% of showings followed up within 2 hours",
    tags: ["Twilio", "Deepgram", "ElevenLabs", "GPT-4"],
    logs: [
      "> Initializing Twilio Voice Client...",
      "> Incoming Call: +1 (555) 019-2834",
      "> Deepgram Stream Connected [WSS://...]",
      "> User: 'The backyard was smaller than I expected.'",
      "> Analysis: Negative Sentiment (0.87)",
      "> Logging feedback to CRM...",
      "> Task Complete.",
    ],
  },
  {
    slug: "atlas-compliance",
    client: "Atlas Realty Group",
    title: "Compliance Router",
    category: "Enterprise RAG",
    industry: "Real Estate",
    year: "2025",
    description:
      "An intelligent routing layer that classifies every property inquiry, detects Fair Housing risk in real time, and steers responses through compliant pathways automatically.",
    outcome: "Zero compliance incidents since launch",
    tags: ["LangChain", "FastAPI", "Pinecone", "Vector DB"],
    logs: [
      "> Query: 'Homes in a family-oriented neighborhood?'",
      "> Compliance Check: Fair Housing Act (FHA)",
      "> Flagged: Steering Risk Detected [Code: 404]",
      "> Routing to: Restricted Response Agent",
      "> Generating Neutral Response...",
      "> Response Sent: 'I can show you homes in any area...'",
    ],
  },
  {
    slug: "brand-brain",
    client: "Llama Naturals",
    title: "Brand Brain",
    category: "Knowledge Platform",
    industry: "Consumer Health",
    year: "2025",
    description:
      "A grounded RAG platform where internal teams and partners query brand knowledge through chat that cites its sources — with 15 FDA/FTC compliance rules enforced on every output.",
    outcome: "15 FDA/FTC rules enforced on every answer",
    tags: ["Next.js", "FastAPI", "pgvector", "Claude"],
    logs: [
      "> Query: 'What claims can we make about Vitamin C?'",
      "> Hybrid Search: vector + full-text [docs: 3]",
      "> Compliance Check: FDA/FTC rules [15/15 passed]",
      "> Brand Voice: Injecting persona...",
      "> Response grounded in 3 source documents",
      "> Confidence: HIGH [0.92] — Answer generated.",
    ],
  },
  {
    slug: "whai-platform",
    client: "WHAI Technologies",
    title: "Agent Orchestration Platform",
    category: "Multi-Agent Systems",
    industry: "Enterprise SaaS",
    year: "2026",
    description:
      "A production Router → Planner → Executor → Verifier pipeline with a real-time monitoring dashboard, knowledge base, and retrieval testing — the company's agentic backbone.",
    outcome: "4-stage pipeline, 0.94 avg quality score",
    tags: ["FastAPI", "React", "SQLite", "Recharts"],
    logs: [
      "> Ingesting: 'Analyze Q1 sales performance'",
      "> Router: Classified → analytics_workflow [0.91]",
      "> Planner: Generated 4-step execution plan",
      "> Executor: Steps [1/4]→[2/4]→[3/4]→[4/4] ✓",
      "> Verifier: Quality score 0.94 — PASSED",
      "> Task Complete. Duration: 2.3s",
    ],
  },
];
