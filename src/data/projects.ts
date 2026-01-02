export type Project = {
  title: string;
  date: string;        // "Jan 2026"
  desc: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Legacy Message Generator (FinTech)",
    date: "2025",
    desc: "Automated structured message generation for financial systems using Python/SQL with validation and edge-case handling.",
    tags: ["Python", "SQL", "ETL", "FinTech"],
    featured: true,
  },
  {
    title: "Azure Synapse Pipelines & Notebooks",
    date: "2025",
    desc: "Built data pipelines and Spark notebooks for migrating and comparing transaction records across systems.",
    tags: ["Azure Synapse", "Spark", "Data Engineering"],
    featured: true,
  },
];
