import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Designing and building responsive, scalable, and user-focused web interfaces.",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Automation & Integration",
    description:
      "Automating workflows and connecting systems using APIs, webhooks, and logic-driven pipelines.",
    skills: ["n8n", "Zapier", "Webhooks", "API Orchestration"],
  },
  {
    title: "Others",
    description:
      "Supporting technologies for backend services, data handling, and deployment.",
    skills: ["Python", "Flask", "MongoDB", "MySQL", "Git", "GitHub", "Vercel"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-center dark:text-white"
        >
          Skills
        </motion.h2>

        <p className="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-400">
          Frontend and automation technologies I use to build efficient,
          real-world web solutions.
        </p>

        {/* Skill Groups */}
        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900"
            >
              <h3 className="mb-2 text-2xl font-semibold dark:text-white">
                {group.title}
              </h3>

              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full dark:bg-black dark:border-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
