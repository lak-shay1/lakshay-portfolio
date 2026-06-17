import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Headphones,
  Cloud,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechTag from '@/components/TechTag';

const roles = [
  {
    icon: Code2,
    color: '#FF7B6B',
    title: 'Junior Software Developer',
    summary:
      'Build end-to-end web applications with React, TypeScript, Java/Spring Boot, and REST APIs — from UI components to database-backed features.',
    highlights: [
      'Full-stack event platform with auth, CRUD, and Docker',
      'React component work at International Film Festival of Australia',
      'Strong focus on clean code, testing, and maintainable architecture',
    ],
    tech: [
      { label: 'React', cat: 'frontend' },
      { label: 'TypeScript', cat: 'frontend' },
      { label: 'Java', cat: 'backend' },
      { label: 'Spring Boot', cat: 'backend' },
      { label: 'SQL', cat: 'data' },
    ],
  },
  {
    icon: Brain,
    color: '#A78BFA',
    title: 'AI / CX Engineering Graduate',
    summary:
      'Design AI-assisted tools and conversational experiences that help users get answers faster — with human review built into every workflow.',
    highlights: [
      'AI FAQ assistant with knowledge-base integration and lead capture',
      'Prompt engineering and LLM workflow design in personal projects',
      'AI-accelerated prototyping with manual verification and testing',
    ],
    tech: [
      { label: 'Prompt Engineering', cat: 'ai' },
      { label: 'LLM APIs', cat: 'ai' },
      { label: 'React', cat: 'frontend' },
      { label: 'JSON KB', cat: 'backend' },
    ],
  },
  {
    icon: Headphones,
    color: '#60B5FF',
    title: 'Application Support / Technical Analyst',
    summary:
      'Combine customer-facing problem-solving with technical troubleshooting — translating user issues into actionable fixes.',
    highlights: [
      'Customer service and POS operations at Domino\'s Pizza, Melbourne',
      'Bug fixing, documentation, and version control from software internships',
      'Clear communicator under pressure in fast-paced environments',
    ],
    tech: [
      { label: 'Troubleshooting', cat: 'tools' },
      { label: 'Documentation', cat: 'tools' },
      { label: 'Git', cat: 'tools' },
      { label: 'Linux', cat: 'cloud' },
    ],
  },
  {
    icon: Cloud,
    color: '#FBBF24',
    title: 'Cloud / DevOps Graduate',
    summary:
      'Hands-on experience with cloud-native architecture, containerization, CI/CD pipelines, and deployment documentation.',
    highlights: [
      'DevOps internship: Docker, Kubernetes, GitHub Actions, FluxCD concepts',
      'AWS serverless music platform with Lambda, API Gateway, DynamoDB',
      'Supported testing workflows with structured deployment and operations guides',
    ],
    tech: [
      { label: 'AWS', cat: 'cloud' },
      { label: 'Docker', cat: 'cloud' },
      { label: 'Kubernetes', cat: 'cloud' },
      { label: 'GitHub Actions', cat: 'cloud' },
      { label: 'CI/CD', cat: 'cloud' },
    ],
  },
  {
    icon: BarChart3,
    color: '#4ADE80',
    title: 'Business Systems / Technical Analyst',
    summary:
      'Turn requirements and raw data into dashboards, reports, and systems that stakeholders can actually use.',
    highlights: [
      'NLP analytics dashboard project processing a large social media dataset for research insights',
      'Data pipelines with Python, pandas, and interactive visualizations',
      'Stakeholder feedback integration from Agile internship environments',
    ],
    tech: [
      { label: 'Python', cat: 'data' },
      { label: 'pandas', cat: 'data' },
      { label: 'SQL', cat: 'data' },
      { label: 'Data Viz', cat: 'data' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  }),
};

export default function RoleFit() {
  return (
    <section id="role-fit" className="bg-surface section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="WHERE I FIT"
          heading="Roles I'm targeting"
          subtext="A Computer Science graduate with internship experience across development, cloud, data, and customer-facing support — ready to contribute in junior and graduate positions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: '#3A4155', backgroundColor: '#1A1F28' }}
              className="group flex flex-col p-6 rounded-card bg-surface border border-border-custom transition-all duration-300 hover:shadow-card-hover"
            >
              <div
                className="w-12 h-12 rounded-card flex items-center justify-center mb-4"
                style={{ backgroundColor: `${role.color}26` }}
              >
                <role.icon size={24} style={{ color: role.color }} />
              </div>

              <h3 className="text-lg font-semibold text-text-primary">{role.title}</h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">{role.summary}</p>

              <div className="h-px bg-border-custom my-4" />

              <ul className="flex-1 space-y-2">
                {role.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-primary">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: role.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {role.tech.map((t) => (
                    <TechTag key={t.label} label={t.label} category={t.cat} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-card bg-surface-elevated border border-border-custom"
        >
          <p className="text-sm text-text-secondary text-center sm:text-left">
            Full-time working rights in Australia. Open to junior, graduate, and internship-to-permanent pathways.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 shrink-0 bg-coral text-bg-dark font-semibold text-sm px-5 py-2.5 rounded-button hover:bg-coral-light hover:shadow-coral-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Discuss a role
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
