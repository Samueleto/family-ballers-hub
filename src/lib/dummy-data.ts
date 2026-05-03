export type PaymentStatus = "approved" | "pending" | "rejected" | "partial" | "unpaid" | "overdue";

export const CLUB = {
  name: "Family Ballers",
  tagline: "Brotherhood. Charity. Excellence.",
  founded: 2014,
  motto: "Together we rise",
};

export const ME = {
  id: "m-001",
  name: "Adewale Johnson",
  initials: "AJ",
  email: "adewale@familyballers.ng",
  phone: "+234 803 555 0142",
  role: "Member",
  joined: "2018-03-12",
  outstanding: 47500,
  totalPaidYTD: 215000,
};

export const MEMBERS = [
  { id: "m-001", name: "Adewale Johnson", role: "Member", phone: "+234 803 555 0142", email: "adewale@familyballers.ng", joined: "2018-03-12", outstanding: 47500, status: "Active" },
  { id: "m-002", name: "Chukwuemeka Obi", role: "Treasurer", phone: "+234 802 444 1100", email: "chuka@familyballers.ng", joined: "2015-06-04", outstanding: 0, status: "Active" },
  { id: "m-003", name: "Bisi Adeyemi", role: "Super Admin", phone: "+234 805 333 9921", email: "bisi@familyballers.ng", joined: "2014-01-20", outstanding: 0, status: "Active" },
  { id: "m-004", name: "Tunde Bakare", role: "Member", phone: "+234 808 222 7766", email: "tunde@familyballers.ng", joined: "2019-09-15", outstanding: 12000, status: "Active" },
  { id: "m-005", name: "Ngozi Eze", role: "Member", phone: "+234 809 111 5544", email: "ngozi@familyballers.ng", joined: "2020-02-28", outstanding: 0, status: "Active" },
  { id: "m-006", name: "Femi Olatunji", role: "Member", phone: "+234 803 999 8800", email: "femi@familyballers.ng", joined: "2017-11-08", outstanding: 35000, status: "Active" },
  { id: "m-007", name: "Aisha Suleiman", role: "Member", phone: "+234 802 666 4422", email: "aisha@familyballers.ng", joined: "2021-04-19", outstanding: 5000, status: "Active" },
  { id: "m-008", name: "Kelechi Nwosu", role: "Member", phone: "+234 807 555 3311", email: "kelechi@familyballers.ng", joined: "2016-08-22", outstanding: 0, status: "Inactive" },
  { id: "m-009", name: "Olumide Falade", role: "Member", phone: "+234 806 888 1199", email: "olumide@familyballers.ng", joined: "2022-01-10", outstanding: 22500, status: "Active" },
  { id: "m-010", name: "Yetunde Salami", role: "Member", phone: "+234 803 777 2244", email: "yetunde@familyballers.ng", joined: "2018-12-01", outstanding: 0, status: "Active" },
];

export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Dues grid: per member per month status. 2025
export const DUES_2025: Record<string, (PaymentStatus)[]> = {
  "m-001": ["approved","approved","approved","approved","approved","approved","approved","approved","pending","unpaid","unpaid","unpaid"],
  "m-002": ["approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","pending"],
  "m-003": ["approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","approved"],
  "m-004": ["approved","approved","approved","approved","approved","partial","approved","approved","unpaid","unpaid","unpaid","unpaid"],
  "m-005": ["approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","pending","unpaid"],
  "m-006": ["approved","approved","unpaid","unpaid","approved","approved","approved","unpaid","unpaid","unpaid","unpaid","unpaid"],
  "m-007": ["approved","approved","approved","approved","approved","approved","approved","approved","approved","pending","unpaid","unpaid"],
  "m-008": ["approved","approved","approved","unpaid","unpaid","unpaid","unpaid","unpaid","unpaid","unpaid","unpaid","unpaid"],
  "m-009": ["approved","approved","approved","approved","unpaid","unpaid","approved","approved","unpaid","unpaid","unpaid","unpaid"],
  "m-010": ["approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","approved","approved"],
};

export const MONTHLY_DUE_AMOUNT = 5000;

export const OCCASIONS = [
  { id: "o-1", title: "Chief Obi's 50th Birthday", date: "2025-11-15", type: "Birthday", contribution: 10000, host: "Chukwuemeka Obi" },
  { id: "o-2", title: "Wedding: Tunde & Adaeze", date: "2025-12-06", type: "Wedding", contribution: 25000, host: "Tunde Bakare" },
  { id: "o-3", title: "Naming Ceremony – Baby Olamide", date: "2025-10-22", type: "Naming", contribution: 7500, host: "Femi Olatunji" },
  { id: "o-4", title: "End of Year Gala", date: "2025-12-28", type: "Club", contribution: 15000, host: "Family Ballers" },
  { id: "o-5", title: "Funeral – Late Mama Aisha", date: "2025-09-30", type: "Funeral", contribution: 20000, host: "Aisha Suleiman" },
];

export const MY_CONTRIBUTIONS = [
  { occasionId: "o-1", title: "Chief Obi's 50th", required: 10000, paid: 10000, status: "approved" as PaymentStatus },
  { occasionId: "o-2", title: "Wedding: Tunde & Adaeze", required: 25000, paid: 0, status: "unpaid" as PaymentStatus },
  { occasionId: "o-3", title: "Naming – Baby Olamide", required: 7500, paid: 7500, status: "approved" as PaymentStatus },
  { occasionId: "o-4", title: "End of Year Gala", required: 15000, paid: 5000, status: "partial" as PaymentStatus },
  { occasionId: "o-5", title: "Funeral – Late Mama Aisha", required: 20000, paid: 20000, status: "approved" as PaymentStatus },
];

export const MY_FINES = [
  { id: "f-1", reason: "Missed general meeting (Aug)", date: "2025-08-12", amount: 2500, status: "approved" as PaymentStatus },
  { id: "f-2", reason: "Failure to attend wedding committee", date: "2025-09-04", amount: 5000, status: "unpaid" as PaymentStatus },
  { id: "f-3", reason: "Phone use during meeting", date: "2025-09-21", amount: 1000, status: "pending" as PaymentStatus },
];

export const MY_LATENESS = [
  { id: "l-1", date: "2025-07-06", minutesLate: 22, amount: 1100, status: "approved" as PaymentStatus },
  { id: "l-2", date: "2025-08-03", minutesLate: 45, amount: 2250, status: "approved" as PaymentStatus },
  { id: "l-3", date: "2025-10-05", minutesLate: 15, amount: 750, status: "unpaid" as PaymentStatus },
];

export const MY_PAYMENTS = [
  { id: "p-1001", date: "2025-10-12", type: "Monthly Dues – Sep", amount: 5000, ref: "FBN/87234", status: "pending" as PaymentStatus },
  { id: "p-1000", date: "2025-09-29", type: "Funeral Contribution", amount: 20000, ref: "GTB/55102", status: "approved" as PaymentStatus },
  { id: "p-0999", date: "2025-09-15", type: "Lateness Fee – Aug", amount: 2250, ref: "UBA/77321", status: "approved" as PaymentStatus },
  { id: "p-0998", date: "2025-09-02", type: "Monthly Dues – Aug", amount: 5000, ref: "FBN/85912", status: "approved" as PaymentStatus },
  { id: "p-0997", date: "2025-08-22", type: "Naming Ceremony", amount: 7500, ref: "GTB/54011", status: "approved" as PaymentStatus },
  { id: "p-0996", date: "2025-08-05", type: "Monthly Dues – Jul", amount: 5000, ref: "FBN/85011", status: "rejected" as PaymentStatus },
];

export const PENDING_APPROVALS = [
  { id: "pa-1", member: "Adewale Johnson", type: "Monthly Dues – Sep", amount: 5000, date: "2025-10-12", ref: "FBN/87234", bank: "First Bank" },
  { id: "pa-2", member: "Tunde Bakare", type: "Wedding Contribution", amount: 25000, date: "2025-10-11", ref: "GTB/91002", bank: "GTBank" },
  { id: "pa-3", member: "Femi Olatunji", type: "Outstanding Dues (3 months)", amount: 15000, date: "2025-10-10", ref: "UBA/77890", bank: "UBA" },
  { id: "pa-4", member: "Aisha Suleiman", type: "Fine – Late arrival", amount: 1100, date: "2025-10-09", ref: "ACC/12233", bank: "Access Bank" },
];

export const ANNOUNCEMENTS = [
  { id: "a-1", date: "2025-10-15", title: "October General Meeting", body: "All members are invited to the monthly general meeting on Saturday 25th at 4pm." },
  { id: "a-2", date: "2025-10-10", title: "Wedding Committee Update", body: "Sub-committee for Tunde & Adaeze's wedding meets Friday 6pm at the clubhouse." },
  { id: "a-3", date: "2025-10-02", title: "Charity Drive Successful", body: "We raised ₦1.2M for the orphanage outreach. Thank you all!" },
];

export const NEWS = [
  { id: "n-1", date: "2025-10-12", title: "Family Ballers donates ₦1.2M to Hope Orphanage", excerpt: "Our annual charity drive surpassed targets thanks to member generosity.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800" },
  { id: "n-2", date: "2025-09-28", title: "New executive committee inaugurated", excerpt: "Chief Bisi Adeyemi continues as Super Admin alongside a renewed team.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" },
  { id: "n-3", date: "2025-09-10", title: "Annual sports day brings members together", excerpt: "Football, athletics and family fun in Ibadan.", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800" },
];

export const EVENTS = [
  { id: "e-1", date: "2025-10-25", title: "October General Meeting", location: "Clubhouse, Lagos", type: "Meeting" },
  { id: "e-2", date: "2025-11-15", title: "Chief Obi's 50th Birthday", location: "Civic Centre", type: "Social" },
  { id: "e-3", date: "2025-12-06", title: "Wedding: Tunde & Adaeze", location: "Eko Hotel", type: "Wedding" },
  { id: "e-4", date: "2025-12-28", title: "End of Year Gala", location: "Clubhouse", type: "Club" },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600",
  "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600",
  "https://images.unsplash.com/photo-1485518882345-15568b007407?w=600",
];

export const CHARITY = [
  { id: "c-1", title: "Hope Orphanage Drive", impact: "120 children supported", raised: 1200000, image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800" },
  { id: "c-2", title: "Back-to-School Scholarship", impact: "35 students sponsored", raised: 850000, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800" },
  { id: "c-3", title: "Community Borehole Project", impact: "1 village served", raised: 2500000, image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800" },
];

export const DOCS = [
  { id: "d-1", name: "Club Constitution 2024.pdf", size: "1.2 MB", category: "Governance", date: "2024-01-15" },
  { id: "d-2", name: "Q3 Financial Report.xlsx", size: "340 KB", category: "Financial", date: "2025-10-01" },
  { id: "d-3", name: "Member Code of Conduct.pdf", size: "220 KB", category: "Governance", date: "2024-06-12" },
  { id: "d-4", name: "AGM 2024 Minutes.pdf", size: "480 KB", category: "Meetings", date: "2024-12-20" },
  { id: "d-5", name: "Membership Application Form.pdf", size: "190 KB", category: "Forms", date: "2024-01-01" },
];

export const REVENUE_SERIES = [
  { month: "Apr", income: 320000, expense: 180000 },
  { month: "May", income: 410000, expense: 220000 },
  { month: "Jun", income: 380000, expense: 260000 },
  { month: "Jul", income: 520000, expense: 310000 },
  { month: "Aug", income: 470000, expense: 280000 },
  { month: "Sep", income: 610000, expense: 340000 },
  { month: "Oct", income: 555000, expense: 300000 },
];

export const EXPENSE_BREAKDOWN = [
  { name: "Charity", value: 850000 },
  { name: "Events", value: 620000 },
  { name: "Welfare", value: 410000 },
  { name: "Admin", value: 180000 },
];

export const CLUB_FINANCE = {
  balance: 4250000,
  incomeYTD: 6840000,
  expenseYTD: 2060000,
  outstanding: 487500,
};

export const PLEDGES = [
  { id: "pl-1", member: "Bisi Adeyemi", amount: 500000, paid: 500000, purpose: "Constitution endowment", date: "2024-01-20" },
  { id: "pl-2", member: "Chukwuemeka Obi", amount: 250000, paid: 150000, purpose: "Constitution endowment", date: "2024-02-10" },
  { id: "pl-3", member: "Adewale Johnson", amount: 100000, paid: 25000, purpose: "Constitution endowment", date: "2024-03-05" },
  { id: "pl-4", member: "Tunde Bakare", amount: 100000, paid: 0, purpose: "Constitution endowment", date: "2024-04-01" },
];

export const REGISTRATION_FEES = [
  { id: "rf-1", member: "Olumide Falade", amount: 50000, paid: 50000, date: "2022-01-10", status: "approved" as PaymentStatus },
  { id: "rf-2", member: "Aisha Suleiman", amount: 50000, paid: 50000, date: "2021-04-19", status: "approved" as PaymentStatus },
  { id: "rf-3", member: "Yetunde Salami", amount: 50000, paid: 30000, date: "2018-12-01", status: "partial" as PaymentStatus },
];

export const NOTIFICATIONS = [
  { id: "n1", title: "Payment approved", body: "Your funeral contribution of ₦20,000 was approved.", time: "2h ago", unread: true },
  { id: "n2", title: "New announcement", body: "October general meeting scheduled.", time: "1d ago", unread: true },
  { id: "n3", title: "Fine added", body: "₦1,000 fine for phone use during meeting.", time: "3d ago", unread: false },
];