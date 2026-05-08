// ── Image URLs ──────────────────────────────────────────────────────────────
// Replace these with your own hosted URLs or local imports after cloning.
// To use local files: put images in src/images/ and import them at the top.
// ── Local Image Imports ───────────────────────────────────────────────
import ProfileImage from "../images/HeroImage.jpg";
import RecvueLogo from "../images/recvue.png";
import ResonanceLogo from "../images/resonance.png";
import GitamLogo from "../images/GitamLogo.jpg";
import PrepMasterLogo from "../images/prep.png";
export { ProfileImage, RecvueLogo, ResonanceLogo, PrepMasterLogo, GitamLogo };
export const DreamflowIcon  = "https://www.genspark.ai/api/files/s/zhOEnt3E";
export const FlutterIcon    = "https://www.genspark.ai/api/files/s/YO68iXZt";
export const FlutterFlowIcon= "https://www.genspark.ai/api/files/s/B9EHSltK";


// ── Bio ─────────────────────────────────────────────────────────────────────
export const Bio = {
  name: "Vasudev Datta Jaladhi",
  roles: [
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github:   "https://github.com/vasudev005",
  linkedin: "https://www.linkedin.com/in/vasu-dev-datta-6b4971301",
  email:    "jaladhivanajakshi@gmail.com",
  resume:   "https://drive.google.com/drive/folders/15El6i7U3R4K4NN7d51Mhlr_O_q73SZvn?usp=sharing"
};

// ── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Python",      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "C",           image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "Java",        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "HTML",        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS",         image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "SQL",         image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React Js",    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Next Js",     image: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" },
      { name: "Angular Js",  image: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "HTML",        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS",         image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript",  image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js",     image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Python",      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Django",      image: "https://static.djangoproject.com/img/logos/django-logo-positive.svg" },
      { name: "MySQL",       image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL",  image: "https://www.postgresql.org/media/img/about/press/elephant.png" },
      { name: "MongoDB",     image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "Firebase",    image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git",          image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" },
      { name: "GitHub",       image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "VS Code",      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Adobe XD",     image: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },
      { name: "AWS",          image: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
      { name: "Google Cloud", image: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
      { name: "Flutter",      image: FlutterIcon },
      { name: "FlutterFlow",  image: FlutterFlowIcon },
      { name: "Dreamflow",    image: DreamflowIcon },
    ],
  },
];

// ── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 0,
    img:     RecvueLogo,
    role:    "UI/UX Design Intern",
    company: "Recvue – Remote",
    date:    "June 2025 – July 2025",
    desc:
      "During my internship at Recvue India Pvt. Ltd., I contributed to the development of multiple modules on the Recvue platform, where I assisted in analyzing requirements, resolving technical issues, and improving overall system functionality. I worked collaboratively with the team to complete assigned tasks within deadlines while gaining hands-on experience in a real-world SaaS environment.",
    skills:  ["React", "Firebase", "Firestore", "UI/UX", "Design System"],
  },
];

// ── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 0,
    img:    GitamLogo,
    school: "GITAM Deemed to be University | Sangareddy, Telangana",
    date:   "July 2023 – Present",
    grade:  "7.97 CGPA",
    desc:
      "I am currently pursuing my Bachelor of Technology in Computer Science and Engineering, with coursework in Operating Systems, Data Structures, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Networking, DBMS, Automata Theory, and Software Engineering.",
    degree: "B.Tech – Computer Science and Engineering",
  },
  {
    id: 1,
    img:    ResonanceLogo,
    school: "Resonance | Hyderabad, Telangana",
    date:   "June 2020 – May 2023",
    grade:  "A+",
    desc:
      "I completed my intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC), building a strong foundation in analytical and problem-solving skills.",
    degree: "Intermediate – MPC",
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title:       "Portfolio Website",
    date:        "2025",
    description: "A personal portfolio website built with React featuring dark space theme, particle animations, typing effects, and glassmorphism UI. Fully responsive and deployed via GitHub Pages.",
    image:       "#",          // ← add a screenshot URL or local path
    tags:        ["React", "CSS", "Particles", "AOS"],
    github:      "https://github.com/vasudev005",
    webapp:      "https://vasudev005.github.io/portfolio-website/",
    category:    "Web",
  },
  // ── Add more projects below ──────────────────────────────────────────────
    {
    id: 2,
    title: "Prep Master",
    date: "2025",
    description: "Developed a full-stack Interview Preparation Platform designed to help users improve technical interview readiness through structured preparation and progress tracking. The platform features an interactive dashboard with coding analytics, skill-based performance monitoring, interview scheduling, and productivity tracking.Implemented a scalable modern web technologies to provide real-time insights and personalized preparation support.",
    image: PrepMasterLogo,
    tags: ["React", "Node", "MongoDB", "HTML", "CSS"],
    github: "https://github.com/...",
    webapp: "https://v0-interview-prep-platform-eight.vercel.app/",
    category: "Web",
  },
];
