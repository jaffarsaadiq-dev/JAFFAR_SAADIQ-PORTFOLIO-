"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Code2,
  ExternalLink, Github, GraduationCap, Mail, Menu, MonitorCog, X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const github = "https://github.com/jaffarsaadiq-dev";
const linkedin = "https://www.linkedin.com/in/mohammed-jaffar-saadiq";
const email = "jaffarsaadiq47@gmail.com";

const skills = [
  { title: "Programming", items: ["Python", "SQL", "HTML", "CSS"] },
  { title: "Data & Analytics", items: ["Excel", "Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { title: "AI & Machine Learning", items: ["Scikit-learn", "YOLOv8", "Computer Vision", "Statistical Analysis"] },
  { title: "Tools & Engineering", items: ["Git", "GitHub", "Jupyter", "VS Code", "n8n", "AWS", "Debugging", "REST APIs"] },
];

const projects = [
  {
    number: "01",
    title: "Fabric Defect Detection System",
    category: "Computer Vision · AI/ML",
    description:
      "An AI-driven computer vision solution designed to identify fabric defects and support quality-control analysis.",
    tags: ["Python", "YOLOv8", "Computer Vision"],
    icon: MonitorCog,
    githubUrl: `${github}?tab=repositories`,
  },
  {
    number: "02",
    title: "COVID-19 Data Analysis Dashboard",
    category: "Data Analytics · Visualization",
    description:
      "A data analysis dashboard exploring COVID-19 cases, deaths, recoveries, and trends through visual reporting.",
    tags: ["Python", "Pandas", "Power BI"],
    icon: Code2,
    githubUrl: `${github}?tab=repositories`,
  },
  {
    number: "03",
    title: "Adaptive Learning Research",
    category: "Machine Learning · Research",
    description:
      "Research on digital interaction-based learning-style detection for neurodiverse students using machine learning.",
    tags: ["Machine Learning", "Education", "Research"],
    icon: BrainCircuit,
    githubUrl: `${github}?tab=repositories`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
  ];

  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b12]/80 backdrop-blur-xl">
        <nav className="container-width flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-300/10 text-sm text-indigo-200">JS</span>
            <span>Jaffar<span className="text-indigo-300">.</span></span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
            ))}
            <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-indigo-300/50 hover:bg-white/5">Contact ↗</a>
          </div>
          <button
            className="rounded-lg border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="container-width flex flex-col gap-1 pb-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-indigo-200 hover:bg-white/5">Contact</a>
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-[94vh] items-center pt-24">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-28 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[100px]"
          animate={reduceMotion ? undefined : { x: [0, -25, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-width relative grid items-center gap-14 py-20 lg:grid-cols-[1.3fr_.7fr]">
          <motion.div initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-2 text-xs text-emerald-200">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" /></span>
              Open to suitable opportunities
            </motion.div>
            <motion.p variants={fadeUp} className="eyebrow mb-5">AI · Data · Software</motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Mohammed Jaffar <span className="text-gradient">Saadiq.</span>
            </motion.h1>
            <motion.h2 variants={fadeUp} className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
              AI & Data Science Graduate
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build data-driven applications and explore AI solutions that turn complex problems into practical, useful outcomes.
              My interests span data analytics, computer vision, and software development.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100">
                Explore projects <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-indigo-300/50 hover:bg-white/[0.04]">
                <Github size={16} /> GitHub <ExternalLink size={13} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> B.Tech · AI & Data Science</span>
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} /> Internship experience</span>
            </motion.div>
          </motion.div>

          <Reveal delay={0.25} className="relative mx-auto w-full max-w-sm">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass relative rounded-[2rem] p-6 shadow-glow"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <p className="text-xs text-slate-500">CURRENT FOCUS</p>
                  <p className="mt-1 font-medium">Learning by building</p>
                </div>
                <span className="rounded-xl bg-indigo-300/10 p-3 text-indigo-200"><BrainCircuit size={22} /></span>
              </div>
              <div className="space-y-5 py-6">
                {[
                  ["01", "Data analytics", "SQL · Excel · Power BI"],
                  ["02", "Machine learning", "Scikit-learn · YOLOv8"],
                  ["03", "Software development", "Python · Web applications"],
                ].map(([num, title, subtitle]) => (
                  <div key={num} className="flex gap-4">
                    <span className="pt-1 font-mono text-xs text-indigo-300/70">{num}</span>
                    <div><p className="font-medium text-slate-100">{title}</p><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-indigo-300/10 bg-indigo-300/[0.06] p-4">
                <p className="text-sm leading-6 text-slate-300">Curious by nature. Analytical by approach. Always learning.</p>
              </div>
            </motion.div>
            <div className="pointer-events-none absolute -bottom-5 -right-4 -z-10 h-36 w-36 rounded-full bg-sky-400/10 blur-3xl" />
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-space border-t border-white/[0.06]">
        <div className="container-width grid gap-10 md:grid-cols-[.65fr_1.35fr]">
          <Reveal><p className="eyebrow">01 / About</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Curiosity into <span className="text-gradient">solutions.</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-8 text-slate-400">
              I’m an Artificial Intelligence and Data Science graduate with internship exposure to analytics, software development, workflow automation, and technical production processes. I enjoy understanding a problem, working through the data, and building solutions that are clear, useful, and maintainable.
            </p>
            <p className="mt-5 leading-8 text-slate-500">
              I value teamwork, structured problem-solving, continuous learning, and writing down what it takes to reproduce a result.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section-space border-t border-white/[0.06] bg-white/[0.015]">
        <div className="container-width">
          <Reveal><p className="eyebrow">02 / Toolkit</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Skills I work with.</h2><p className="mt-4 max-w-xl leading-7 text-slate-500">A practical toolkit across data, machine learning, and software development.</p></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.07}>
                <div className="glass h-full rounded-2xl p-6 transition hover:border-indigo-300/25">
                  <h3 className="font-medium">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition hover:border-indigo-300/30 hover:bg-indigo-300/[0.07]">{skill}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-space border-t border-white/[0.06]">
        <div className="container-width">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">03 / Selected work</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Projects with purpose.</h2></div>
            <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">All repositories <ArrowUpRight size={16} /></a>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.number} delay={index * 0.09}>
                  <article className="project-card glass flex h-full flex-col rounded-2xl p-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-indigo-300/70">{project.number} / PROJECT</span>
                      <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-indigo-200"><Icon size={21} /></span>
                    </div>
                    <p className="mt-7 text-xs font-medium uppercase tracking-[.12em] text-slate-500">{project.category}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug">{project.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300">{tag}</span>)}</div>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-t border-white/[0.08] pt-5 text-sm font-medium text-slate-200 transition hover:text-indigo-200">View repository <ArrowUpRight size={15} /></a>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-600">Project links currently open your GitHub repositories list. Replace each with its exact repository URL once published.</p>
        </div>
      </section>

      <section id="experience" className="section-space border-t border-white/[0.06] bg-white/[0.015]">
        <div className="container-width">
          <Reveal><p className="eyebrow">04 / Experience & education</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Learning in real environments.</h2></Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.06}>
              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-4"><span className="rounded-xl bg-indigo-300/10 p-3 text-indigo-200"><BriefcaseBusiness size={21} /></span><div><p className="text-xs uppercase tracking-wider text-indigo-200">Jan 2026 – May 2026</p><h3 className="mt-2 text-lg font-semibold">Data Analytics Intern</h3><p className="mt-1 text-sm text-slate-400">White House Business Solutions Pvt. Ltd.</p></div></div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400"><li>• Supported software development and web application activities.</li><li>• Assisted with feature implementation, debugging, and user-experience improvements.</li><li>• Applied analytical skills to technical and analytics-related tasks.</li></ul>
              </div>
            </Reveal>
            <Reveal delay={0.13}>
              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-4"><span className="rounded-xl bg-indigo-300/10 p-3 text-indigo-200"><GraduationCap size={21} /></span><div><p className="text-xs uppercase tracking-wider text-indigo-200">2022 – 2026</p><h3 className="mt-2 text-lg font-semibold">B.Tech, Artificial Intelligence & Data Science</h3><p className="mt-1 text-sm text-slate-400">Mohammed Sathak A J College of Engineering</p></div></div>
                <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"><p className="text-sm text-slate-500">Academic result</p><p className="mt-1 text-2xl font-semibold">7.5<span className="text-base text-slate-500"> / 10 CGPA</span></p></div>
              </div>
            </Reveal>
            <Reveal delay={0.18} className="md:col-span-2">
              <div className="glass rounded-2xl p-6 sm:p-7">
                <p className="text-xs uppercase tracking-wider text-indigo-200">May 2023</p><h3 className="mt-2 text-lg font-semibold">Intern · Lenovo India Pvt. Ltd.</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">Gained exposure to hardware assembly, production workflows, quality standards, ESD safety protocols, and quality-control processes.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="container-width">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-400/[0.12] via-[#111625] to-sky-400/[0.06] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
              <p className="eyebrow">05 / Let’s connect</p>
              <h2 className="relative mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Good work starts with a <span className="text-gradient">conversation.</span></h2>
              <p className="relative mt-5 max-w-xl leading-7 text-slate-400">Interested in entry-level opportunities, internships, and projects involving data, AI, or software development.</p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100"><Mail size={16} /> Email me</a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/[0.05]">LinkedIn <ArrowUpRight size={15} /></a>
                <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/[0.05]"><Github size={16} /> GitHub</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-7">
        <div className="container-width flex flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Mohammed Jaffar Saadiq</p>
          <p>Designed for clarity. Animated with restraint.</p>
        </div>
      </footer>
    </main>
  );
}
