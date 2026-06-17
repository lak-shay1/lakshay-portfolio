import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechTag from '@/components/TechTag';

const projects = [
  {
    title: 'AI Business FAQ Assistant',
    category: 'AI Prototype',
    categoryColor: '#A78BFA',
    problem: 'Small businesses lose leads by not answering customer questions instantly.',
    solution: 'An AI assistant that answers FAQs from a knowledge base and captures lead info.',
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'TypeScript', cat: 'frontend' },
      { label: 'Tailwind CSS', cat: 'frontend' },
      { label: 'AI API', cat: 'ai' },
      { label: 'Prompt Engineering', cat: 'ai' },
      { label: 'JSON KB', cat: 'backend' },
    ],
    outcome: 'Prototype demonstrating instant FAQ responses with knowledge-base lookup',
    image: '/images/ai-faq-assistant.jpg',
  },
  {
    title: 'Interactive Roadmap & Progress Tracker',
    category: 'Personal Project',
    categoryColor: '#FF7B6B',
    problem: 'Learners and teams struggle to track progress across complex multi-step goals.',
    solution: 'A visual roadmap tool with localStorage persistence, JSON export/import, and milestone tracking.',
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'TypeScript', cat: 'frontend' },
      { label: 'Tailwind CSS', cat: 'frontend' },
      { label: 'localStorage', cat: 'frontend' },
      { label: 'JSON', cat: 'backend' },
    ],
    outcome: 'Built with AI-assisted workflow, manually refined',
    image: '/images/roadmap-tracker.jpg',
  },
  {
    title: 'Event Management Platform',
    category: 'Internship Project',
    categoryColor: '#FF7B6B',
    problem: 'Event organizers need a complete system for creating, managing, and tracking registrations.',
    solution: 'Full-stack platform with event creation, registration workflows, auth, and REST APIs.',
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'Java', cat: 'backend' },
      { label: 'Spring Boot', cat: 'backend' },
      { label: 'SQL', cat: 'data' },
      { label: 'REST APIs', cat: 'backend' },
      { label: 'Docker', cat: 'cloud' },
    ],
    outcome: 'Complete CRUD + auth system with testing docs',
    image: '/images/event-management.jpg',
  },
  {
    title: 'Cloud Music Subscription Platform',
    category: 'Academic Cloud Project',
    categoryColor: '#FBBF24',
    problem: 'Music streaming needs scalable, cost-effective cloud infrastructure with user management.',
    solution: 'Serverless AWS platform with Lambda functions, API Gateway, DynamoDB, and S3 storage.',
    tech: [
      { label: 'AWS Lambda', cat: 'cloud' },
      { label: 'API Gateway', cat: 'cloud' },
      { label: 'DynamoDB', cat: 'data' },
      { label: 'S3', cat: 'cloud' },
      { label: 'EC2', cat: 'cloud' },
      { label: 'Auth', cat: 'backend' },
    ],
    outcome: 'Cloud-native architecture, modular deployment',
    image: '/images/cloud-music.jpg',
  },
  {
    title: 'NLP Analytics Dashboard',
    category: 'Academic Data Project',
    categoryColor: '#60B5FF',
    problem: 'Understanding public sentiment across platforms requires processing massive unstructured data.',
    solution: 'Processed 125K+ data points with topic modeling, sentiment analysis, and interactive dashboards.',
    tech: [
      { label: 'Python', cat: 'data' },
      { label: 'pandas', cat: 'data' },
      { label: 'VADER', cat: 'ai' },
      { label: 'BERTopic', cat: 'ai' },
      { label: 'NRCLex', cat: 'ai' },
      { label: 'Data Viz', cat: 'data' },
    ],
    outcome: 'Large social-media dataset explored with topic and sentiment analysis',
    image: '/images/nlp-dashboard.jpg',
  },
  {
    title: 'Portfolio Website',
    category: 'Personal Project',
    categoryColor: '#FF7B6B',
    problem: "A developer's portfolio should communicate product-thinking, not just list assignments.",
    solution: 'This website — built with React, TypeScript, Tailwind, and Framer Motion animations.',
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'TypeScript', cat: 'frontend' },
      { label: 'Tailwind CSS', cat: 'frontend' },
      { label: 'Vite', cat: 'tools' },
      { label: 'Framer Motion', cat: 'frontend' },
      { label: 'Vercel', cat: 'cloud' },
    ],
    outcome: 'Deployed and responsive portfolio with polished UI/UX',
    image: '/images/portfolio-website.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, type: 'spring' as const, stiffness: 100, damping: 15 },
  }),
};

export default function FeaturedProjects() {
  return (
    <section id="work" className="bg-bg-dark section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="FEATURED WORK"
          heading="Selected projects"
          subtext="Hands-on builds from internships, university work, and personal development — each with a clear problem, approach, and outcome."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: '#3A4155', backgroundColor: '#1A1F28' }}
              className="group rounded-card bg-surface border border-border-custom overflow-hidden transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-pill text-xs font-medium"
                  style={{ backgroundColor: `${project.categoryColor}20`, color: project.categoryColor }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mt-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="mt-3 space-y-1.5">
                  <p className="text-sm text-text-secondary">
                    <span className="text-xs font-semibold text-coral uppercase tracking-wide">Problem:</span>{' '}
                    {project.problem}
                  </p>
                  <p className="text-sm text-text-secondary">
                    <span className="text-xs font-semibold text-mint uppercase tracking-wide">Solution:</span>{' '}
                    {project.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(t => (
                    <TechTag key={t.label} label={t.label} category={t.cat} />
                  ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-custom">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-mint">
                    <TrendingUp size={14} />
                    {project.outcome}
                  </span>
                  <a
                    href="#case-studies"
                    className="flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Read Case Study
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
