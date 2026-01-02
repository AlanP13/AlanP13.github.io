export type Experience = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    title: "Application Development Analyst",
    org: "Genworth Financial",
    location: "Richmond, VA",
    dates: "2023 — Present",
    bullets: [
      "Owned delivery and operational support for production data workflows in Investments IT.",
      "Built automation for data movement, validation, and structured legacy message generation.",
      "Developed Azure Synapse notebooks/pipelines supporting financial system migrations.",
    ],
    stack: ["Python", "SQL", "Azure Synapse", "Spark", "ETL", "FinTech"],
  },
];
