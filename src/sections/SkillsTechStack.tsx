import { motion } from 'framer-motion';
import { Layout, Server, Database, Brain, Cloud, Wrench } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import PillTag from '@/components/PillTag';

const categories = [
  {
    icon: Layout,
    color: '#FF7B6B',
    name: 'Frontend',
    primary: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Vite'],
    secondary: ['Framer Motion', 'Responsive Design'],
  },
  {
    icon: Server,
    color: '#60B5FF',
    name: 'Backend & APIs',
    primary: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Node.js'],
    secondary: ['JSON', 'API Design'],
  },
  {
    icon: Database,
    color: '#4ADE80',
    name: 'Data & Dashboards',
    primary: ['Python', 'pandas', 'Data Visualization', 'SQL'],
    secondary: ['CSV Processing'],
  },
  {
    icon: Brain,
    color: '#A78BFA',
    name: 'AI & Automation',
    primary: ['Claude', 'ChatGPT', 'LLM APIs', 'Prompt Engineering', 'AI-assisted coding'],
    secondary: ['LLM Workflows', 'Knowledge Bases'],
  },
  {
    icon: Cloud,
    color: '#FBBF24',
    name: 'Cloud & DevOps',
    primary: ['AWS Lambda', 'API Gateway', 'S3', 'DynamoDB', 'EC2', 'Docker'],
    secondary: ['Kubernetes', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: Wrench,
    color: '#5A6378',
    name: 'Tools & Collaboration',
    primary: ['Git', 'GitHub', 'VS Code', 'Linux', 'Vercel'],
    secondary: ['Firebase', 'Supabase', 'Figma'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, type: 'spring' as const, stiffness: 100, damping: 15 },
  }),
};

export default function SkillsTechStack() {
  return (
    <section className="bg-surface section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="TECH STACK"
          heading="Technologies I work with"
          subtext="Tools and frameworks used across internships, university projects, and personal builds — with growing depth in each area."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: '#3A4155', backgroundColor: '#1A1F28' }}
              className="group p-6 rounded-card bg-surface border border-border-custom transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-card flex items-center justify-center mb-3"
                style={{ backgroundColor: `${cat.color}26` }}
              >
                <cat.icon size={20} style={{ color: cat.color }} />
              </div>

              {/* Name */}
              <h4 className="text-base font-semibold text-text-primary mb-3">
                {cat.name}
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.primary.map(tag => (
                  <PillTag key={tag} filled color={cat.color}>
                    {tag}
                  </PillTag>
                ))}
                {cat.secondary.map(tag => (
                  <PillTag key={tag}>{tag}</PillTag>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
