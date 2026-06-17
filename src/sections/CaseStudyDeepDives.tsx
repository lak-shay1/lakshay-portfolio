import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import TechTag from '@/components/TechTag';

interface CaseStudy {
  title: string;
  category: string;
  categoryColor: string;
  oneliner: string;
  tabs: { label: string; content: string }[];
  tech: { label: string; cat: string }[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'NLP Analytics Dashboard',
    category: 'Data Analytics',
    categoryColor: '#60B5FF',
    oneliner: 'Processing a large social media dataset to uncover sentiment patterns and platform differences.',
    tabs: [
      {
        label: 'Challenge',
        content: 'Two major platforms had fundamentally different user sentiments about AI \u2014 but no one had quantified the difference. The task was to scrape, process, and visualize a large dataset to produce actionable insights for a research brief.',
      },
      {
        label: 'Approach',
        content: 'Built a Python pipeline using PRAW and YouTube Data API v3 for data collection. Applied BERTopic for topic modeling, VADER for sentiment scoring, and NRCLex for emotion analysis. Used Louvain community detection to map influence networks. Results delivered via interactive dashboards.',
      },
      {
        label: 'Outcome',
        content: 'Revealed a clear sentiment split between platforms: Reddit discussions leaned more toward risk concerns (job loss, bias), while YouTube conversations focused more on benefits (productivity, creativity). Delivered an executive brief with data-backed recommendations.',
      },
      {
        label: 'Learned',
        content: 'Data quality matters more than model complexity. Cleaning and preprocessing consumed a significant share of the effort. Visualization design is as important as analysis \u2014 insights are only useful when stakeholders can understand them.',
      },
    ],
    tech: [
      { label: 'Python', cat: 'data' },
      { label: 'pandas', cat: 'data' },
      { label: 'BERTopic', cat: 'ai' },
      { label: 'VADER', cat: 'ai' },
      { label: 'NRCLex', cat: 'ai' },
      { label: 'Data Viz', cat: 'data' },
    ],
    image: '/images/nlp-dashboard.jpg',
  },
  {
    title: 'Event Management Platform',
    category: 'Full-Stack App',
    categoryColor: '#FF7B6B',
    oneliner: 'A complete full-stack platform for creating, managing, and tracking event registrations.',
    tabs: [
      {
        label: 'Challenge',
        content: 'Event organizers needed a unified system to create events, manage registrations, and track attendance \u2014 without relying on scattered spreadsheets and manual processes. The platform needed authentication, CRUD operations, and a clean UI.',
      },
      {
        label: 'Approach',
        content: 'Designed a React frontend with component-based architecture for maintainability. Built REST APIs with Java/Spring Boot for business logic. Used SQL for relational data persistence. Containerized with Docker and explored Kubernetes for orchestration. Wrote comprehensive testing documentation.',
      },
      {
        label: 'Outcome',
        content: 'Delivered a complete event management system with user authentication, event CRUD, registration workflows, and testing documentation. The architecture supports future scaling through containerized deployment.',
      },
      {
        label: 'Learned',
        content: 'Full-stack development requires thinking across the entire stack simultaneously \u2014 a database decision impacts the API design, which impacts the frontend state management. Docker made local development and deployment significantly more reliable.',
      },
    ],
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'Java', cat: 'backend' },
      { label: 'Spring Boot', cat: 'backend' },
      { label: 'SQL', cat: 'data' },
      { label: 'REST APIs', cat: 'backend' },
      { label: 'Docker', cat: 'cloud' },
    ],
    image: '/images/event-management.jpg',
  },
  {
    title: 'AI Business FAQ Assistant',
    category: 'AI Tool',
    categoryColor: '#A78BFA',
    oneliner: 'An AI-powered assistant that answers customer questions and captures leads for small businesses.',
    tabs: [
      {
        label: 'Challenge',
        content: 'Small businesses lose potential customers because they cannot respond to inquiries instantly. Hiring full-time support staff is expensive, and generic chatbots feel robotic and unhelpful.',
      },
      {
        label: 'Approach',
        content: "Designed a React-based chat interface with a JSON knowledge base structure that's easy for non-technical business owners to update. Integrated AI API for natural language understanding. Built lead capture forms that trigger on high-intent questions. Used Tailwind for responsive, brandable styling.",
      },
      {
        label: 'Outcome',
        content: 'Created a prototype that reduces customer response time from hours to seconds. The knowledge base approach means businesses can customize responses without code changes. Lead capture integration turns conversations into actionable customer data.',
      },
      {
        label: 'Learned',
        content: 'AI-assisted development accelerated the prototype phase, but manual review was essential for handling edge cases in conversation flows. The knowledge base design is the most critical architectural decision \u2014 it determines long-term maintainability.',
      },
    ],
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'TypeScript', cat: 'frontend' },
      { label: 'Tailwind CSS', cat: 'frontend' },
      { label: 'AI API', cat: 'ai' },
      { label: 'JSON KB', cat: 'backend' },
    ],
    image: '/images/ai-faq-assistant.jpg',
  },
];

export default function CaseStudyDeepDives() {
  return (
    <section id="case-studies" className="bg-surface section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="CASE STUDIES"
          heading="Deep dives into key projects"
          subtext="Detailed breakdowns of architecture, decisions, and outcomes for projects that best represent my capabilities."
        />

        <div className="space-y-8 mt-12">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="rounded-card bg-surface border border-border-custom overflow-hidden hover:border-border-hover transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[400px]">
        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col">
          {/* Category */}
          <span
            className="inline-block self-start px-3 py-1 rounded-pill text-xs font-medium"
            style={{ backgroundColor: `${study.categoryColor}20`, color: study.categoryColor }}
          >
            {study.category}
          </span>

          {/* Title */}
          <h2 className="text-xl lg:text-2xl font-semibold text-text-primary mt-3">
            {study.title}
          </h2>

          {/* One-liner */}
          <p className="text-base text-text-secondary mt-2 leading-relaxed">
            {study.oneliner}
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-5">
            {study.tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-1.5 rounded-pill text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === i
                    ? 'bg-coral text-bg-dark'
                    : 'bg-surface-elevated text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 flex-1 min-h-[100px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="text-sm text-text-secondary leading-relaxed"
              >
                {study.tabs[activeTab].content}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-5">
            {study.tech.map(t => (
              <TechTag key={t.label} label={t.label} category={t.cat} />
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-coral text-bg-dark text-sm font-semibold px-5 py-2.5 rounded-button hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Ask About This Project
            </a>
            <a
              href="https://github.com/lak-shay1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-[1.5px] border-border-custom text-text-primary text-sm font-semibold px-5 py-2.5 rounded-button hover:border-border-hover hover:bg-surface-elevated transition-all duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden hidden lg:block">
          <img
            src={study.image}
            alt={study.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.article>
  );
}
