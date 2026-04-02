export interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  day: string;
  description: string;
  location: string;
  type: 'workshop' | 'bootcamp' | 'pitching' | 'networking';
  registrationLink: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Startup Bootcamp 2024",
    date: "2024-06-15",
    month: "JUN",
    day: "15",
    description: "Intensive 3-day bootcamp covering business model canvas, market validation, and pitch preparation.",
    location: "BioIncubator Center, Manipal",
    type: "bootcamp",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Biotech Innovation Workshop",
    date: "2024-06-22",
    month: "JUN",
    day: "22",
    description: "Hands-on workshop on biotech product development, IP protection, and regulatory compliance.",
    location: "Innovation Lab, Manipal",
    type: "workshop",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Investor Pitch Night",
    date: "2024-07-05",
    month: "JUL",
    day: "05",
    description: "Student startups pitch to angel investors and VCs. Networking session with mentors.",
    location: "BioIncubator Auditorium",
    type: "pitching",
    registrationLink: "#"
  },
  {
    id: 4,
    title: "Entrepreneur Meetup",
    date: "2024-04-10",
    month: "APR",
    day: "10",
    description: "Monthly networking event connecting student founders with alumni entrepreneurs.",
    location: "Campus Cafeteria",
    type: "networking",
    registrationLink: "#"
  },
  {
    id: 5,
    title: "IP & Legal Workshop",
    date: "2024-03-15",
    month: "MAR",
    day: "15",
    description: "Understanding patents, trademarks, and legal essentials for student startups.",
    location: "Seminar Hall 2",
    type: "workshop",
    registrationLink: "#"
  }
];

export const upcomingEvents = events.filter(e => new Date(e.date) >= new Date());
export const pastEvents = events.filter(e => new Date(e.date) < new Date());
