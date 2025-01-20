import img11 from "./assets/images/imag5.jpg";
import img12 from "./assets/images/img6.jpg";
import img13 from "./assets/images/img7.jpg";
import img14 from "./assets/images/img8.jpg";
import img15 from "./assets/images/img9.jpg";
import img16 from "./assets/images/img10.jpg";
import img17 from "./assets/images/img3.jpg" ;      

const logotext = "Iqra Maqbool";

const meta = {
  title: "Iqra Maqbool",
  description:
    "Eager to leverage my skills, experiences, and passion for Artificial Intelligence. Moreover, career-oriented and ambitious, not just confined to a single designation but exploring multiple work experiences utilizing my core skills of communication, leading, and writing.",
};

const introdata = {
  title: "I’m Iqra Maqbool",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop React Applications",
  },
  description:
    "I'm a developer with expertise in React.js, dedicated to building responsive and engaging web applications. I focus on creating seamless user experiences with clean, efficient code.",
  your_img_url: img17,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I am an AI engineer with expertise in React.js, specializing in building dynamic and responsive web applications. With a strong foundation in frontend development, I create seamless user interfaces that prioritize both functionality and aesthetics. My experience includes working with the latest tools and frameworks to deliver optimized, high-quality code for impactful digital solutions.",
};

const worktimeline = [
  {
    jobtitle: "Frontend Developer",
    where: "Self Learning",
    date: "2024 - Present",
  },
  {
    jobtitle: "Intern Developer",
    where: "TenderAsaan",
    date: "2024 (3 months)",
  },
];

const skills = [
  { name: "HTML", value: 80 },
  { name: "CSS", value: 80 },
  { name: "JavaScript", value: 75 },
  { name: "React.js", value: 70 },
  { name: "Redux Toolkit", value: 70 },
];

const services = [
  {
    title: "Frontend Development",
    description: "Building interactive and responsive interfaces using React.js and Material UI.",
  },
  {
    title: "WordPress Basic",
    description: "Creating and customizing WordPress sites to deliver user-friendly, engaging websites with essential functionalities.",
  },
  {
    title: "Database Management System",
    description: "Managing and structuring databases effectively to support data-driven applications and ensure efficient data handling.",
  },
];

const dataportfolio = [
  {
    img: img11,
    description: "SMILE: An interactive chatbot capable of expressing emotions, enhancing user interaction and experience.",
    link: "#",
  },
  {
    img: img12,
    description: "Home Expense Manager: A mobile app to track household spending, providing budgeting and financial planning tools.",
    link: "#",
  },
  {
    img: img13,
    description: "Restaurant Management System: A comprehensive system to manage restaurant operations using Object-Oriented Programming principles.",
    link: "#",
  },
  {
    img: img14,
    description: "Intelligent Chatbot: A conversational agent designed with AIML and WordNet to interact with users and provide intelligent responses.",
    link: "#",
  },
  {
    img: img15,
    description: "Multilingual News Analyzer: A system that analyzes video news by converting it to audio, transcribing to text, translating, and analyzing topics and emotions.",
    link: "#",
  },
  {
    img: img16,
    description: "Library Management System: A database project designed to facilitate the management of books, members, loans, returns, and fines in a library setting.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "iqramaqbool171@gmail.com",
  YOUR_PHONE: "03494234195",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
