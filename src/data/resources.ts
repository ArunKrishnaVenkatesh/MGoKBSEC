export interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'business' | 'pitching' | 'legal' | 'funding';
  type: 'PDF' | 'DOCX' | 'VIDEO';
  downloadLink: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "Business Plan Template",
    description: "Comprehensive template with examples for student startups",
    category: "business",
    type: "DOCX",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Market Research Guide",
    description: "Step-by-step guide to conducting market research on a budget",
    category: "business",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Pitch Deck Template",
    description: "10-slide investor pitch deck template with design tips",
    category: "pitching",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Pitch Practice Checklist",
    description: "Before-you-pitch checklist to nail your presentation",
    category: "pitching",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Startup Legal Checklist",
    description: "Registration, compliance, and legal requirements for new ventures",
    category: "legal",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "IP Protection Guide",
    description: "Understanding patents, copyrights, and trade secrets for student innovators",
    category: "legal",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 7,
    title: "Grant Writing Guide",
    description: "How to write winning grant proposals for government funding",
    category: "funding",
    type: "PDF",
    downloadLink: "#"
  },
  {
    id: 8,
    title: "Investor Outreach Email Templates",
    description: "Proven email templates for reaching angel investors and VCs",
    category: "funding",
    type: "DOCX",
    downloadLink: "#"
  }
];

export const resourceCategories = [
  { id: 'business', name: 'Business Planning', icon: '📋' },
  { id: 'pitching', name: 'Pitching', icon: '🎤' },
  { id: 'legal', name: 'Legal & Compliance', icon: '⚖️' },
  { id: 'funding', name: 'Funding', icon: '💰' }
];
