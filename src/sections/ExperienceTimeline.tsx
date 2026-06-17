import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const entries = [
  {
    role: 'DevOps & Cloud Engineering Intern',
    company: 'Staffinity Technologies GmbH, Melbourne',
    date: 'Feb 2025 \u2013 Jun 2025',
    bullets: [
      'Built and documented cloud-native workflows across Linux, Docker, and Kubernetes environments',
      'Implemented GitHub Actions CI/CD pipelines and explored FluxCD/GitOps deployment concepts',
      'Managed unit and integration test suites and supported ongoing quality checks',
      'Delivered structured deployment documentation and operational readiness guides',
    ],
    metrics: ['Tested features with documented workflows', 'Deployment and QA documentation'],
    side: 'right' as const,
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'International Film Festival of Australia, Melbourne',
    date: 'Nov 2024 \u2013 Feb 2025',
    bullets: [
      'Built React components for film submission, scheduling, and content management workflows',
      'Contributed to frontend optimization work that improved usability and performance',
      'Supported mobile experience improvements through iterative updates',
      'Worked in Agile sprints with code reviews, user testing, and stakeholder feedback integration',
    ],
    metrics: ['Performance and UX improvements delivered', 'Mobile flow refinements implemented'],
    side: 'left' as const,
  },
  {
    role: 'Software Engineer Intern',
    company: 'Wonder Electricals Limited, New Delhi',
    date: 'Jul 2022 \u2013 Sep 2022',
    bullets: [
      'Assisted with embedded software development and technical documentation',
      'Supported bug fixing, version control, and structured development practices',
      'Gained experience in software quality assurance and technical communication',
    ],
    metrics: [],
    side: 'right' as const,
  },
  {
    role: 'Customer Service & Operations',
    company: "Domino's Pizza, Melbourne",
    date: 'Aug 2023 \u2013 Dec 2025',
    bullets: [
      'Customer-facing communication, problem-solving, and issue resolution in fast-paced environment',
      'Operated POS systems and managed operational workflows with reliability',
      'Developed strong client communication skills \u2014 proof of reliability and customer focus',
    ],
    metrics: [],
    side: 'left' as const,
    tinted: true,
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-bg-dark section-padding">
      <div className="content-max-width page-padding">
        <SectionHeader
          eyebrow="EXPERIENCE"
          heading="Where I've worked"
          subtext="Internships, engineering roles, and customer-facing work that shaped how I build, communicate, and deliver."
        />

        <div className="relative mt-12 max-w-[900px] mx-auto">
          {/* Vertical Line - desktop centered, mobile left */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-border-custom"
          />

          <div className="space-y-8 md:space-y-12">
            {entries.map((entry, i) => (
              <div key={i} className="relative flex items-start md:items-center">
                {/* Desktop: alternating layout */}
                <div className={`hidden md:flex w-full items-center ${entry.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content side */}
                  <motion.div
                    initial={{ opacity: 0, x: entry.side === 'left' ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="w-[calc(50%-2rem)]"
                  >
                    <TimelineCard entry={entry} />
                  </motion.div>

                  {/* Node */}
                  <div className="w-16 flex justify-center shrink-0">
                    <TimelineNode isFirst={i === 0} />
                  </div>

                  {/* Empty side */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>

                {/* Mobile: left line, right content */}
                <div className="flex md:hidden w-full items-start">
                  <div className="w-8 flex justify-center shrink-0 pt-6">
                    <TimelineNode isFirst={i === 0} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 ml-2"
                  >
                    <TimelineCard entry={entry} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ isFirst }: { isFirst: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {isFirst && (
        <span className="absolute w-5 h-5 rounded-full border border-coral animate-pulse-ring" />
      )}
      <span className={`w-3 h-3 rounded-full border-2 z-10 ${isFirst ? 'bg-coral border-coral' : 'bg-bg-dark border-border-custom'}`} />
    </div>
  );
}

function TimelineCard({ entry }: { entry: typeof entries[0] }) {
  return (
    <div
      className={`p-5 rounded-card bg-surface border border-border-custom ${
        'tinted' in entry && entry.tinted ? 'bg-[rgba(90,99,120,0.05)]' : ''
      }`}
    >
      {/* Role */}
      <h3 className="text-base font-semibold text-text-primary">{entry.role}</h3>

      {/* Company */}
      <p className="text-sm font-semibold text-text-primary mt-0.5">{entry.company}</p>

      {/* Date + Location */}
      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-text-secondary">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {entry.date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={12} />
          {entry.company.split(', ').slice(1).join(', ')}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-border-custom my-3" />

      {/* Bullets */}
      <ul className="space-y-1.5">
        {entry.bullets.map((b, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="w-2 h-0.5 bg-coral rounded-full mt-2 shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      {/* Metrics */}
      {entry.metrics.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-border-custom">
          {entry.metrics.map(m => (
            <span key={m} className="flex items-center gap-1 text-xs font-medium text-mint">
              <TrendingUp size={12} />
              {m}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
