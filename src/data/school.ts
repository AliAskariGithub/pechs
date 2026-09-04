/**
 * Single source of truth for The Academy PECHS website content.
 *
 * Accuracy rule (from the school details document): never invent school
 * information. Anything not confirmed by the school is rendered with the
 * TO_VERIFY marker instead of a fabricated value.
 */

export const TO_VERIFY = "TO VERIFY";

export const verifyNote =
  "This detail has not been confirmed by the school yet. Please share the official information and it will be published here.";

export const school = {
  name: "The Academy PECHS",
  shortName: "The Academy",
  location: "PECHS, Karachi, Sindh, Pakistan",
  tagline: "Learn Today. Lead Tomorrow.",
  intro:
    "A strong academic foundation for confident, capable and responsible young individuals.",
  segment: "O Level / A Level educational segment",
  addressPlaceholder: `Exact street address — ${TO_VERIFY}`,
  phonePlaceholder: `Phone number — ${TO_VERIFY}`,
  whatsappPlaceholder: `WhatsApp number — ${TO_VERIFY}`,
  emailPlaceholder: `Official email — ${TO_VERIFY}`,
  admissionsEmailPlaceholder: `Admissions email — ${TO_VERIFY}`,
  officeHoursPlaceholder: `Office hours — ${TO_VERIFY}`,
  boardPlaceholder: `Examination board — ${TO_VERIFY}`,
  foundedPlaceholder: `Year established — ${TO_VERIFY}`,
  principalPlaceholder: `Principal / Head — ${TO_VERIFY}`,
  mapQuery: "PECHS Karachi Sindh Pakistan",
} as const;

export const aboutIntro = [
  "The Academy PECHS is committed to creating an environment where students can learn, grow and prepare confidently for the future.",
  "Through academic learning and personal development, students are encouraged to think independently, communicate effectively, take responsibility and approach new challenges with confidence.",
  "The school's educational environment aims to support students not only in their academic journey but also in developing the qualities they need for life beyond the classroom.",
];

export const mission =
  "To provide students with a strong academic foundation in a supportive and intellectually engaging environment, encouraging curiosity, discipline, confidence and lifelong learning.";

export const vision =
  "To nurture confident, capable and responsible young individuals who are prepared to pursue higher education, embrace new challenges and make meaningful contributions to their communities and the wider world.";

export const headMessage = [
  "Welcome to The Academy PECHS. Our aim is to create an environment where students are encouraged to learn with curiosity, think independently, develop confidence and prepare themselves for the opportunities and responsibilities that lie ahead.",
  "We believe meaningful education extends beyond academic achievement. It is about developing character, responsibility, communication and the ability to approach challenges with confidence and purpose.",
];

export const coreValues = [
  {
    title: "Excellence",
    detail:
      "Encouraging students to pursue high standards in their academic and personal development.",
  },
  {
    title: "Integrity",
    detail: "Promoting honesty, responsibility, respect and ethical conduct.",
  },
  {
    title: "Curiosity",
    detail:
      "Encouraging students to ask questions, explore ideas and develop a lifelong interest in learning.",
  },
  {
    title: "Discipline",
    detail: "Building habits of responsibility, consistency, punctuality and commitment.",
  },
  {
    title: "Confidence",
    detail:
      "Helping students develop the confidence to express ideas, take initiative and face challenges.",
  },
  {
    title: "Respect",
    detail:
      "Creating an environment where students, teachers, parents and the wider community are treated with dignity.",
  },
  {
    title: "Responsibility",
    detail:
      "Encouraging students to understand their responsibilities toward themselves, others and society.",
  },
  {
    title: "Growth",
    detail: "Supporting continuous academic, intellectual, social and personal development.",
  },
];

export const academicPillars = [
  {
    title: "Learning",
    detail: "Students develop knowledge and understanding through structured education.",
  },
  {
    title: "Thinking",
    detail: "Students are encouraged to analyse information and develop independent thought.",
  },
  {
    title: "Practice",
    detail:
      "Students strengthen their understanding through assignments, projects, activities and academic preparation.",
  },
  {
    title: "Communication",
    detail: "Students learn to express ideas clearly and confidently.",
  },
  {
    title: "Preparation",
    detail: "Students are prepared for examinations and future academic pathways.",
  },
];

export const developmentAreas = [
  {
    title: "Academic development",
    detail: "Building knowledge, understanding, analytical ability and examination readiness.",
  },
  {
    title: "Intellectual development",
    detail: "Encouraging students to question, analyse, research and form independent opinions.",
  },
  {
    title: "Personal development",
    detail: "Building confidence, responsibility, discipline and self-awareness.",
  },
  {
    title: "Communication",
    detail:
      "Encouraging students to express themselves clearly through speaking, writing, presentations and collaborative work.",
  },
  {
    title: "Leadership",
    detail:
      "Providing opportunities for students to take responsibility, organise activities and develop leadership qualities.",
  },
  {
    title: "Social development",
    detail: "Helping students understand teamwork, respect, cooperation and community responsibility.",
  },
];

export type Programme = {
  slug: string;
  name: string;
  stage: string;
  summary: string;
  approach: string[];
  support: string[];
  /** Subject offerings are unconfirmed and render as TO VERIFY placeholders. */
  subjectsStatus: string;
  faculty: { role: string; area: string; note: string }[];
};

const FACULTY_NOTE = `Faculty profile — ${TO_VERIFY}`;

export const programmes: Programme[] = [
  {
    slug: "o-level",
    name: "O Level",
    stage: "Lower secondary to O Level",
    summary:
      "A structured academic programme focused on understanding concepts, building study discipline and preparing students thoroughly for their examinations.",
    approach: [
      "Concept-led teaching supported by regular practice and assessment",
      "Structured note-taking, revision technique and examination preparation",
      "Encouragement of questions, discussion and independent reading",
      "Written and spoken communication developed across subjects",
    ],
    support: [
      "Class-level academic guidance and feedback",
      "Subject teachers available for additional explanation",
      "Progress communicated with parents through the school office",
    ],
    subjectsStatus: `Subject list for O Level — ${TO_VERIFY}`,
    faculty: [
      { role: "Subject Teacher", area: "Sciences", note: FACULTY_NOTE },
      { role: "Subject Teacher", area: "Mathematics", note: FACULTY_NOTE },
      { role: "Subject Teacher", area: "Languages & Humanities", note: FACULTY_NOTE },
    ],
  },
  {
    slug: "a-level",
    name: "A Level",
    stage: "Higher secondary",
    summary:
      "An advanced programme where students deepen subject expertise, work more independently and prepare for university study and future pathways.",
    approach: [
      "Deeper subject specialisation with an emphasis on analysis",
      "Independent learning, research and structured written argument",
      "Presentations, discussion and collaborative academic work",
      "Preparation for higher education applications and interviews",
    ],
    support: [
      "Academic mentoring and study planning",
      "Guidance on subject combinations and academic pathways",
      "Support with examination technique and time management",
    ],
    subjectsStatus: `Subject list for A Level — ${TO_VERIFY}`,
    faculty: [
      { role: "Subject Teacher", area: "Sciences", note: FACULTY_NOTE },
      { role: "Subject Teacher", area: "Mathematics", note: FACULTY_NOTE },
      { role: "Subject Teacher", area: "Business & Humanities", note: FACULTY_NOTE },
    ],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);

export const studentLifeAreas = [
  { title: "Clubs & societies", detail: `Available clubs and societies — ${TO_VERIFY}` },
  { title: "Sports", detail: `Sports offered and facilities — ${TO_VERIFY}` },
  { title: "Competitions", detail: `Inter-school and internal competitions — ${TO_VERIFY}` },
  { title: "Events & celebrations", detail: `Annual events calendar — ${TO_VERIFY}` },
  { title: "Workshops & seminars", detail: `Workshop programme — ${TO_VERIFY}` },
  { title: "Leadership opportunities", detail: `Student council and leadership roles — ${TO_VERIFY}` },
];

export const campusAreas = [
  { title: "Classrooms", detail: `Classroom facilities — ${TO_VERIFY}` },
  { title: "Laboratories", detail: `Science laboratory facilities — ${TO_VERIFY}` },
  { title: "Library", detail: `Library facilities — ${TO_VERIFY}` },
  { title: "Computer facilities", detail: `IT facilities — ${TO_VERIFY}` },
  { title: "Activity areas", detail: `Activity and assembly spaces — ${TO_VERIFY}` },
  { title: "Sports areas", detail: `Sports areas — ${TO_VERIFY}` },
];

export const admissionSteps = [
  { title: "Inquiry", detail: "Submit the online inquiry form or contact the school office." },
  { title: "Campus visit", detail: "Visit the school, meet the team and see the learning environment." },
  { title: "Application", detail: `Complete the application form and submit the required documents — ${TO_VERIFY}` },
  { title: "Assessment", detail: `Assessment format and subjects — ${TO_VERIFY}` },
  { title: "Interview", detail: `Interview process for students and parents — ${TO_VERIFY}` },
  { title: "Decision", detail: "The school confirms the outcome of the application." },
  { title: "Enrolment", detail: `Fee payment and enrolment confirmation — ${TO_VERIFY}` },
];

export const requiredDocuments = [
  `Document checklist — ${TO_VERIFY}`,
  `Age and grade eligibility — ${TO_VERIFY}`,
  `Admission dates and deadlines — ${TO_VERIFY}`,
  `Previous school records required — ${TO_VERIFY}`,
];

export const feeStructure = [
  { level: "O Level", admission: TO_VERIFY, monthly: TO_VERIFY, annual: TO_VERIFY },
  { level: "A Level", admission: TO_VERIFY, monthly: TO_VERIFY, annual: TO_VERIFY },
  { level: "Examination & registration charges", admission: TO_VERIFY, monthly: TO_VERIFY, annual: TO_VERIFY },
];

export const feeNotes = [
  "No fee figures are published on this website until the school confirms its official fee schedule.",
  "Admission fees, tuition, annual charges, examination and registration charges will be listed here exactly as issued by the school.",
  "For current fee information, please contact the school office directly or submit an admission inquiry.",
];

export const newsItems = [
  {
    slug: "admissions-inquiry-open",
    title: "Admission inquiries welcome",
    date: `Date — ${TO_VERIFY}`,
    category: "Admissions",
    excerpt:
      "Families interested in The Academy PECHS can submit an online inquiry. Admission dates, grade availability and requirements will be published once confirmed by the school.",
    featured: true,
  },
  {
    slug: "academic-events",
    title: "Academic events and workshops",
    date: `Date — ${TO_VERIFY}`,
    category: "Academics",
    excerpt:
      "Details of academic events, seminars and workshops will appear here once the school shares its calendar.",
    featured: false,
  },
  {
    slug: "student-achievements",
    title: "Student achievements",
    date: `Date — ${TO_VERIFY}`,
    category: "Achievements",
    excerpt:
      "Verified student achievements, competition results and recognitions will be published in this section.",
    featured: false,
  },
  {
    slug: "parent-notices",
    title: "Notices for parents",
    date: `Date — ${TO_VERIFY}`,
    category: "Notice",
    excerpt:
      "Announcements, academic calendar updates and parent communications will be shared here.",
    featured: false,
  },
];

export const newsNote =
  "These entries show how news and events will be presented. Real announcements, dates and photographs will replace them once provided by the school.";

export const faqs = [
  {
    keywords: ["fee", "fees", "tuition", "monthly", "cost", "charges", "price"],
    question: "What is the fee structure?",
    answer:
      "The official fee structure has not been confirmed for publication yet, so no figures are shown on the Fee Structure page. Please contact the school office or submit an admission inquiry for current fee information.",
  },
  {
    keywords: ["admission", "apply", "enrol", "enroll", "process", "form", "seat", "test", "assessment"],
    question: "How do I apply for admission?",
    answer:
      "The general process is inquiry, campus visit, application, assessment, interview, decision and enrolment. Exact requirements, dates and documents are still to be confirmed by the school — start with the inquiry form on the Admissions page.",
  },
  {
    keywords: ["timing", "timings", "time", "hours", "open", "close", "office", "schedule"],
    question: "What are the school timings?",
    answer:
      "School and office hours have not been confirmed for publication yet. Please contact the school office to confirm timings.",
  },
  {
    keywords: ["grade", "class", "level", "olevel", "o level", "alevel", "a level", "programme", "program", "offer"],
    question: "Which programmes are offered?",
    answer:
      "The Academy PECHS is associated with the O Level and A Level segment. Exact grade levels, subject offerings and programme details must be confirmed by the school before they are published.",
  },
  {
    keywords: ["where", "location", "address", "pechs", "map", "reach", "direction"],
    question: "Where is the school located?",
    answer:
      "The school is located in PECHS, Karachi, Sindh. The exact street address and map location will be published once confirmed by the school.",
  },
  {
    keywords: ["board", "curriculum", "cambridge", "syllabus", "exam", "examination"],
    question: "Which curriculum and examination board is followed?",
    answer:
      "The school is associated with the O Level / A Level segment, but the exact examination board and affiliation are not confirmed for publication. Please contact the school to verify.",
  },
  {
    keywords: ["activity", "activities", "sports", "extracurricular", "club", "society", "event"],
    question: "What activities are available?",
    answer:
      "Clubs, societies, sports and events are an important part of school life, but the specific programmes offered have not been confirmed yet and are marked TO VERIFY on the Student Life page.",
  },
  {
    keywords: ["contact", "phone", "call", "email", "number", "whatsapp"],
    question: "How can I contact the school?",
    answer:
      "Phone, WhatsApp and email details are not published yet. The quickest route today is the online inquiry form on the Admissions page, which you can send directly to the school.",
  },
  {
    keywords: ["result", "results", "achievement", "ranking", "university", "alumni"],
    question: "What are the school's results and achievements?",
    answer:
      "No examination results, rankings or university placements are published on this website because they have not been verified. Verified achievements will be added when the school provides them.",
  },
  {
    keywords: ["faculty", "teacher", "teachers", "staff", "principal", "head"],
    question: "Who teaches at the school?",
    answer:
      "Faculty and leadership profiles will be published once the school supplies verified names, qualifications and photographs. Nothing is invented here.",
  },
];
