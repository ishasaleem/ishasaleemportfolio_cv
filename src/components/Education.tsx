import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "Arid Agriculture University, Rawalpindi",
    cgpa: "3.74",
    duration: "2021 – 2025",
    coursework: [
      "Web Development",
      "Data Structures",
      "Databases",
      "Software Engineering",
    ],
  },
];

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "U Devs",
    duration: "Jan 2026 – Present",
    points: [
      "Worked on real-time, production-oriented frontend projects.",
      "Reduced repetitive UI tasks by ~30% through reusable components.",
      "Developed responsive UI components using React, JavaScript, and CSS.",
      "Gained hands-on experience in a professional development environment.",
    ],
  },
];

const certificationsData = [
  {
    title: "Certifications & Learning",
    items: [
      "Frontend Development Libraries – FreeCodeCamp (2025)",
      "DevOps Fundamentals Certification",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Education: React.FC = () => {
  return (
    <section id="education" className="relative max-w-6xl px-6 mx-auto py-28">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text"
      >
      Education & Professional Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative flex flex-col gap-10 md:grid md:grid-cols-9"
      >
        {/* Vertical timeline line */}
        <div className="absolute hidden h-full transform -translate-x-1/2 border-l-2 border-gray-300 md:block left-1/2 dark:border-gray-600"></div>

        {/* Education */}
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="relative flex justify-end md:col-span-4 md:col-start-1 md:text-right md:pr-8"
          >
            {/* Dot */}
            <div className="absolute top-6 md:right-[-18px] w-4 h-4 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-900"></div>

            {/* Card */}
            <div className="w-full p-8 transition-all shadow-lg bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl hover:shadow-indigo-400/30 md:max-w-md">
              <h4 className="text-xl font-bold dark:text-white">{edu.degree}</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {edu.institution} • {edu.duration} • CGPA {edu.cgpa}
              </p>
              <ul className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-700 dark:text-gray-300">
                {edu.coursework.map((course, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Experience */}
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`relative md:col-span-4 ${
              idx % 2 === 0 ? "md:col-start-6 md:text-left md:pl-8 flex justify-start" : "md:col-start-1 md:text-right md:pr-8 flex justify-end"
            }`}
          >
            {/* Dot */}
            <div
              className={`absolute top-6 md:${
                idx % 2 === 0 ? "left-[-18px]" : "right-[-18px]"
              } w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900`}
            ></div>

            {/* Card */}
            <div className="w-full p-8 transition-all shadow-lg bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl hover:shadow-purple-400/30 md:max-w-md">
              <h4 className="text-xl font-bold dark:text-white">{exp.role}</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {exp.company} • {exp.duration}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 mt-1 bg-purple-400 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="relative flex justify-start md:col-span-4 md:col-start-6 md:pl-8"
          >
            {/* Dot */}
            <div className="absolute top-6 left-[-18px] w-4 h-4 bg-pink-500 rounded-full border-2 border-white dark:border-gray-900"></div>

            {/* Card */}
            <div className="w-full p-8 transition-all shadow-lg bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl hover:shadow-pink-400/30 md:max-w-md">
              <h4 className="text-xl font-bold dark:text-white">{cert.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                {cert.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 mt-1 bg-pink-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
