export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department?: string;
  linkedin?: string;
  image?: string;
  type: 'core' | 'advisor' | 'mentor';
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Raghavendra Rao",
    role: "Faculty Advisor",
    department: "Biotechnology",
    type: "advisor"
  },
  {
    id: 2,
    name: "Prof. Sunitha Sharma",
    role: "Co-Advisor",
    department: "Management Studies",
    type: "advisor"
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "President",
    type: "core"
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Vice President",
    type: "core"
  },
  {
    id: 5,
    name: "Karthik Shenoy",
    role: "Technical Lead",
    type: "core"
  },
  {
    id: 6,
    name: "Ananya Reddy",
    role: "Events Coordinator",
    type: "core"
  },
  {
    id: 7,
    name: "Vikram Joshi",
    role: "Outreach Lead",
    type: "core"
  },
  {
    id: 8,
    name: "Meera Pai",
    role: "Content Lead",
    type: "core"
  },
  {
    id: 9,
    name: "Dr. Suresh Mehta",
    role: "Startup Mentor",
    linkedin: "#",
    type: "mentor"
  },
  {
    id: 10,
    name: "Lakshmi Krishnan",
    role: "IP & Legal Mentor",
    linkedin: "#",
    type: "mentor"
  }
];

export const coreTeam = team.filter(m => m.type === 'core');
export const advisors = team.filter(m => m.type === 'advisor');
export const mentors = team.filter(m => m.type === 'mentor');
