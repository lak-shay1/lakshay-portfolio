import { motion } from 'framer-motion';
import { Code2, Brain, BarChart3, Cloud, FileCheck, Users, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const cards = [
  {
    icon: Code2,
    color: '#FF7B6B',
    bgTint: 'rgba(255, 123, 107, 0.15)',
    title: 'Full-Stack Development',
    desc: 'End-to-end web apps with React, TypeScript, Java/Spring Boot, and REST APIs — from database design to deployed frontend.',
    proof: 'Event platform, IFFA internship',
  },
  {
    icon: Brain,
    color: '#A78BFA',
    bgTint: 'rgba(167, 139, 250, 0.15)',
    title: 'AI & Automation',
    desc: 'AI-powered assistants, prompt engineering, and workflow automation using modern LLMs with human verification at every step.',
    proof: 'AI FAQ assistant, AI-accelerated workflow',
  },
  {
    icon: BarChart3,
    color: '#60B5FF',
    bgTint: 'rgba(96, 181, 255, 0.15)',
    title: 'Dashboards & Analytics',
    desc: 'Data pipelines and visual dashboards that turn raw datasets into clear, actionable insights for stakeholders.',
    proof: 'NLP dashboard project with large-scale dataset analysis',
  },
  {
    icon: Cloud,
    color: '#FBBF24',
    bgTint: 'rgba(251, 191, 36, 0.15)',
    title: 'Cloud & DevOps',
    desc: 'AWS serverless, Docker, Kubernetes concepts, CI/CD with GitHub Actions, and structured deployment documentation.',
    proof: 'Staffinity DevOps internship',
  },
  {
    icon: FileCheck,
    color: '#4ADE80',
    bgTint: 'rgba(74, 222, 128, 0.15)',
    title: 'Documentation & Testing',
    desc: 'Technical documentation, test strategies, deployment guides, and operational readiness materials teams can rely on.',
    proof: 'Testing workflow support and deployment documentation',
  },
  {
    icon: Users,
    color: '#FF7B6B',
    bgTint: 'rgba(255, 123, 107, 0.15)',
    title: 'Stakeholder Communication',
    desc: 'Translating feedback into platform improvements — combining customer-facing experience with technical delivery.',
    proof: 'Agile sprints, Domino\'s operations',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: 'spring' as const, stiffness: 100, damping: 15 },
  }),
};

export default function RecruiterSnapshot() {
  return (
    <section className="bg-bg-dark section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="WHAT I BRING"
          heading="Skills backed by real work"
          subtext="Internship experience and personal projects across development, cloud, data, and customer-facing roles — not just classroom theory."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: '#3A4155', backgroundColor: '#1A1F28' }}
              className="group p-6 rounded-card bg-surface border border-border-custom transition-all duration-300 hover:shadow-card-hover"
            >
              <div
                className="w-12 h-12 rounded-card flex items-center justify-center mb-4"
                style={{ backgroundColor: card.bgTint }}
              >
                <card.icon size={24} style={{ color: card.color }} />
              </div>

              <h4 className="text-base font-semibold text-text-primary mb-2">{card.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{card.desc}</p>

              <div className="flex items-center gap-1.5 text-xs font-medium text-mint">
                <CheckCircle size={14} />
                {card.proof}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
