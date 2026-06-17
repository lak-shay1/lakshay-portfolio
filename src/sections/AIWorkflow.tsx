import { motion } from 'framer-motion';
import { MessageSquare, Code2, Eye, GitBranch, Target, Zap, Shield, Rocket, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Define the Problem',
    desc: 'Break down the business problem, identify user needs, and define clear requirements before writing any code.',
    icon: MessageSquare,
    badge: 'Claude / ChatGPT',
    color: '#FF7B6B',
  },
  {
    num: '02',
    title: 'Rapid Prototype',
    desc: 'Use AI-assisted development to generate scaffolding, component structures, and initial implementations at speed.',
    icon: Code2,
    badge: 'AI coding assistants',
    color: '#FBBF24',
  },
  {
    num: '03',
    title: 'Review, Test & Refine',
    desc: 'Manually review every line. Debug edge cases. Write tests. Ensure the code is production-quality, not just functional.',
    icon: Eye,
    badge: 'Manual Review',
    color: '#4ADE80',
  },
  {
    num: '04',
    title: 'Document & Deploy',
    desc: 'Write clear documentation, create deployment pipelines, and deliver a maintainable product with operational readiness.',
    icon: GitBranch,
    badge: 'GitHub Actions',
    color: '#60B5FF',
  },
];

const visualSteps = [
  { icon: Target, label: 'Problem Definition', tag: 'Claude', color: '#FF7B6B' },
  { icon: Zap, label: 'AI-Assisted Build', tag: 'AI Tools', color: '#FBBF24' },
  { icon: Shield, label: 'Human Review & Test', tag: 'Manual', color: '#4ADE80' },
  { icon: Rocket, label: 'Deploy & Document', tag: 'GitHub', color: '#60B5FF' },
];

export default function AIWorkflow() {
  return (
    <section className="bg-bg-dark section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="MY WORKFLOW"
          heading="AI-accelerated, human-verified"
          subtext="How I use AI to move faster on scaffolding and prototyping — while personally reviewing, testing, and documenting every deliverable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Left: Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative space-y-6"
          >
            {/* Vertical connector line */}
            <div className="absolute left-[1.75rem] top-8 bottom-8 w-px bg-border-custom hidden sm:block" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.6 } },
                }}
                className="relative flex gap-4 sm:gap-5"
              >
                {/* Number */}
                <span className="hidden sm:block text-5xl font-bold text-text-tertiary/30 shrink-0 w-14 text-right select-none">
                  {step.num}
                </span>

                {/* Card */}
                <div className="flex-1 p-5 rounded-card bg-surface border border-border-custom hover:border-border-hover hover:bg-surface-elevated transition-all duration-300 group">
                  <h4 className="text-base font-semibold text-text-primary group-hover:text-white transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-pill text-xs font-medium text-text-secondary bg-surface-elevated border border-border-custom">
                    <step.icon size={12} />
                    {step.badge}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Visual Diagram */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center gap-0"
          >
            {visualSteps.map((vs, i) => (
              <motion.div
                key={vs.label}
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.6 } },
                }}
                className="w-full max-w-[320px]"
              >
                {/* Step Box */}
                <div className="flex items-center gap-3 p-4 rounded-card bg-surface-elevated border border-border-custom">
                  <div
                    className="w-10 h-10 rounded-card flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${vs.color}20` }}
                  >
                    <vs.icon size={20} style={{ color: vs.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-primary truncate">{vs.label}</p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded-pill text-[10px] font-medium shrink-0"
                    style={{ backgroundColor: `${vs.color}20`, color: vs.color }}
                  >
                    {vs.tag}
                  </span>
                </div>

                {/* Arrow */}
                {i < visualSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ChevronDown
                      size={24}
                      className="text-coral animate-arrow-pulse"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
