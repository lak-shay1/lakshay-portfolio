import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Terminal, Brain, Cpu, Cloud, Globe, GraduationCap, ChevronRight, Link as LinkIcon, Calendar, Building2, Phone, FileText, Star, ExternalLink } from "lucide-react";

const links = {
  github: "https://github.com/lak-shay1",
  linkedin: "https://www.linkedin.com/in/lakshay-1904arora/",
  email: "mailto:lakshayarora1904@gmail.com",
  phone: "+61 0420786635",
  resume: "/Lakshay_Arora_Resume.pdf",
};

const skills: Record<string, string[]> = {
  "Languages": ["Python", "C++", "Java", "Rust", "JavaScript"],
  "ML/AI Tools": ["TensorFlow", "Keras", "BERTopic", "VADER", "NRCLex", "Scikit-learn"],
  "Cloud & DevOps": ["AWS (Lambda, EC2, S3, DynamoDB, API Gateway)", "Kubernetes", "GitHub Actions", "FluxCD", "GitOps"],
  "Web": ["React.js", "Node.js", "HTML", "CSS", "REST APIs"],
  "Concepts & Tools": ["CI/CD", "Multithreading", "POSIX", "Memory Management", "Valgrind", "Git", "Linux"]
};

type Project = { title: string; blurb: string; tags: string[]; links?: { label: string; href: string }[] }
const projects: Project[] = [
  {
    title: "Framing Generative AI — Cross-Platform Social-Media Analytics",
    blurb: "Scraped 8,270 Reddit posts & 72k comments plus 1,067 YouTube videos & 43k comments (~125k data points) via PRAW and YouTube Data API v3. Built an NLP pipeline (BERTopic, VADER, NRCLex) and Louvain community detection to profile themes, sentiment, emotion and influence networks. Revealed a split: Reddit skewed 2:1 toward risk (job loss, bias) while YouTube was benefit‑focused (productivity, creativity). Delivered dashboards and an executive brief.",
    tags: ["Python", "NLP", "BERTopic", "VADER", "NRCLex", "Data Viz"],
    links: [],
  },
  {
    title: "Colon Cancer Image Classification",
    blurb: "Designed and deployed CNN models (TensorFlow/Keras) to classify colon histopathology images into cancerous vs. non‑cancerous and four cellular subtypes. Tackled class imbalance with augmentation & weighted training. Added semi‑supervised learning on external data to boost multiclass accuracy. Evaluated via F1, confusion matrices, learning curves; benchmarked against academic studies.",
    tags: ["Python", "Deep Learning", "TensorFlow", "Keras", "CNN", "Semi‑supervised"],
    links: [],
  },
  {
    title: "Cloud Music Subscription Platform (AWS)",
    blurb: "Serverless, cloud‑native music streaming app with registration/login, browse, and subscription management. Auth + sessions with DynamoDB & API Gateway; content in S3; frontend on EC2 (Apache2). Backend via AWS Lambda for modular, cost‑effective deployment.",
    tags: ["AWS", "Lambda", "API Gateway", "DynamoDB", "S3", "EC2", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/lak-shay1/music-subscription-app" }],
  },
  {
    title: "Memory Allocation Simulator",
    blurb: "C/C++ OS simulation using First‑Fit and Best‑Fit strategies. Tracks allocated and free blocks via linked lists; robust error handling and bash‑driven test cases. Includes Valgrind leak checks and Makefile targets for both strategies.",
    tags: ["C++", "Operating Systems", "Memory Mgmt", "Valgrind", "Linked Lists"],
    links: [],
  },
  {
    title: "Multithreaded File Copier",
    blurb: "C/C++ multithreaded copier using POSIX threads. Producer‑consumer design with shared queue; synchronization via mutexes & condition variables; careful race‑free execution and performance gains.",
    tags: ["C++", "POSIX Threads", "Multithreading", "Synchronization"],
  },
  {
    title: "Minecraft Maze Solver — C++ Expansion Pack",
    blurb: "C++ expansion enabling maze generation (Recursive Backtracking) and solving (Wall Follower) inside Minecraft; handles uneven terrain; optimized for shortest‑path behavior; team‑tested.",
    tags: ["C++", "Algorithms", "API", "GitHub", "Teamwork"],
  },
  {
    title: "Web Application for Social Challenge",
    blurb: "Java/SQLite web app targeting a social challenge with strong UX artefacts (Personas, Context Scenarios, ER Models). Ran usability testing cycles and integrated feedback; responsive UI in Java, HTML, CSS.",
    tags: ["Java", "SQLite", "Front‑End", "UX/UI", "HTML", "CSS"],
  },
];

const experience = [
  {
    role: "DevOps & Cloud Engineering Intern",
    company: "Staffinity Technologies GmbH",
    period: "Feb 2025 – Jun 2025",
    bullets: [
      "Built Rust‑based gRPC services and automated GitOps pipelines with FluxCD & Kubernetes",
      "Deployed GDPR‑compliant SaaS with GitHub Actions CI/CD & observability",
      "Achieved 100% test pass rate across 40+ unit/integration tests"
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "International Film Festival of Australia",
    period: "Nov 2024 – Feb 2025",
    bullets: [
      "Built React components for submission & scheduling workflows",
      "Optimized page load ~40% and improved mobile retention ~30%",
      "Shipped in Agile sprints with code reviews"
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Wonder Electricals Limited",
    period: "Jul 2022 – Sep 2022",
    bullets: [
      "Improved embedded C++ performance by ~20% via algorithmic optimizations",
      "Established version control and CI pipelines; reduced integration conflicts",
      "Collaborated on bug fixes, docs, and feature scoping"
    ],
  },
  {
    role: "Web Development Intern",
    company: "Uttaranchal Industries",
    period: "Sep 2021 – Nov 2021",
    bullets: ["Developed and maintained web modules to support business operations"],
  },
];

const SectionTitle = ({ icon: Icon, title, sub }: any) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-xl bg-muted">{Icon && <Icon className="h-5 w-5" />}</div>
    <div>
      <h2 className="text-xl md:text-2xl font-semibold leading-tight">{title}</h2>
      {sub && <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>}
    </div>
  </div>
);

const Pill = ({ children }: {children: React.ReactNode}) => (
  <span className="badge">{children}</span>
);

const ProjectCard = ({ p }: {p: Project}) => (
  <div className="card h-full p-5">
    <div className="flex items-center justify-between mb-2">
      <div className="text-base md:text-lg font-semibold">{p.title}</div>
      <ExternalLink className="h-4 w-4 text-muted-foreground" />
    </div>
    <p className="text-sm text-muted-foreground">{p.blurb}</p>
    <div className="flex flex-wrap gap-2 mt-3">
      {p.tags.map((t) => (
        <Pill key={t}>{t}</Pill>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 pt-3">
      {p.links?.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn">
          <LinkIcon className="h-3.5 w-3.5 mr-1" /> {l.label}
        </a>
      ))}
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
    <div className="container py-3 flex items-center justify-between">
      <a href="#top" className="font-semibold tracking-tight flex items-center gap-2">
        <Terminal className="h-5 w-5" /> Lakshay Arora
      </a>
      <nav className="hidden md:flex items-center gap-1">
        {[
          ["About", "#about"],
          ["Projects", "#projects"],
          ["Experience", "#experience"],
          ["Skills", "#skills"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={href} href={href} className="btn btn-ghost text-sm font-medium">{label}</a>
        ))}
        <a href={links.resume} target="_blank" rel="noreferrer" className="btn btn-primary ml-2">
          <FileText className="h-4 w-4 mr-2" /> Resume
        </a>
      </nav>
      <div className="md:hidden">
        <a href={links.resume} target="_blank" rel="noreferrer" className="btn">
          <FileText className="h-4 w-4 mr-1" /> Resume
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="inline-flex items-center gap-2 text-xs bg-muted px-2.5 py-1 rounded-full mb-4">
        <Star className="h-3.5 w-3.5" /> Final‑year CS @ RMIT • Melbourne
      </div>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
        Building reliable, scalable systems and delightful UIs.
      </h1>
      <p className="text-muted-foreground mt-4">
        I’m a developer specialising in machine learning, DevOps, cloud‑native and full‑stack engineering. I love creating
        intelligent, scalable systems that blend smart algorithms with real‑world usability.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        <a href="#projects" className="btn btn-primary">
          <ChevronRight className="h-4 w-4 mr-2" /> See my work
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn">
          <Linkedin className="h-4 w-4 mr-2" /> Connect
        </a>
        <a href={links.github} target="_blank" rel="noreferrer" className="btn">
          <Github className="h-4 w-4 mr-2" /> GitHub
        </a>
      </div>
      <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground flex-wrap">
        <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1" /> Melbourne, AU</span>
        <span className="inline-flex items-center"><Mail className="h-4 w-4 mr-1" /> lakshayarora1904@gmail.com</span>
        <span className="inline-flex items-center"><Phone className="h-4 w-4 mr-1" /> +61 0420786635</span>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
      <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-card">
        <img
          src="/banner.jpg"
          alt="Lakshay Arora — portfolio banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        </div>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="container py-12">
    <SectionTitle icon={GraduationCap} title="About" sub="Who I am and what I’m focusing on" />
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card p-6 md:col-span-2">
        <p className="mb-4">
          I’m Lakshay, a final‑year Computer Science student at RMIT University (graduating Dec 2025).
          My work spans ML systems, cloud‑native platforms, and polished product experiences. Recently I’ve been building
          Rust-based gRPC services, shipping on Kubernetes with GitOps, and delivering production‑ready apps on AWS.
        </p>
        <p>I enjoy teams that value craftsmanship, velocity, and developer experience.</p>
      </div>
      <div className="card p-6 space-y-3 text-sm">
        <div className="flex items-center gap-2"><Cpu className="h-4 w-4" /> Platform Eng & MLOps</div>
        <div className="flex items-center gap-2"><Cloud className="h-4 w-4" /> Shipping on AWS & GCP</div>
        <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> Open‑source contributor</div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="container py-12">
    <SectionTitle icon={Brain} title="Projects" sub="Selected work with impact and polish" />
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="container py-12">
    <SectionTitle icon={Building2} title="Experience" sub="Internships and practical work" />
    <div className="grid lg:grid-cols-3 gap-6">
      {experience.map((e) => (
        <div key={e.role} className="card h-full p-5">
          <div className="text-base md:text-lg font-semibold mb-2">{e.role}</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2"><Building2 className="h-4 w-4" /> {e.company}</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2"><Calendar className="h-4 w-4" /> {e.period}</div>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {e.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="container py-12">
    <SectionTitle icon={Cpu} title="Skills" sub="A practical toolbelt I reach for often" />
    <div className="grid gap-4">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="card p-5">
          <div className="font-semibold mb-2">{group}</div>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => <Pill key={s}>{s}</Pill>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container py-12">
    <SectionTitle icon={Mail} title="Contact" sub="Let’s collaborate or just say hi" />
    <div className="card p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="underline" href={links.email}>lakshayarora1904@gmail.com</a></div>
          <div className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a className="underline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div className="flex items-center gap-2"><Github className="h-4 w-4" /><a className="underline" href={links.github} target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
        <form
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3"
          action="https://formspree.io/f/mandkrog"
          method="POST"
        >
          <input
            className="border rounded-xl px-3 py-2"
            placeholder="Name"
            name="name"
            type="text"
            required
            autoComplete="name"
          />
          <input
            className="border rounded-xl px-3 py-2"
            placeholder="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
          <textarea
            className="border rounded-xl px-3 py-2 md:col-span-2"
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          {/* Honeypot field for bots */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          {/* Optionally redirect to a thank you page or use Formspree's default */}
          <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
          <button className="btn btn-primary md:col-span-2" type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t mt-10">
    <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
      <div>© {new Date().getFullYear()} Lakshay Arora. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <a className="underline" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="underline" href={links.resume} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
