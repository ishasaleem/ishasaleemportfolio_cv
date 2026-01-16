import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* NAVBAR (safe layer) */}
      <nav className="absolute left-0 right-0 z-20 flex items-center justify-between max-w-6xl px-6 mx-auto top-6">
        <a
          href="/ISHA_SALEEM_CV.pdf"
          download
          className="px-6 py-2 font-semibold text-white transition transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-110 hover:shadow-2xl"
        >
          Download Resume
        </a>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 text-gray-800 transition bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200 hover:scale-105"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        >
          Isha Saleem
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-300"
        >
          <Typewriter
            words={[
              "Frontend Developer (React)",
              "Automation & AI Integrations",
              "Open to Remote Roles",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-400"
        >
      Frontend & Automation Specialist building responsive web apps and automated workflows, focused on delivering efficient, scalable, and user-friendly solutions.
    </motion.p>
      </div>

      {/* BACKGROUND BLOBS (NON-CLICKABLE) */}
      <motion.div
        className="absolute bg-purple-400 rounded-full pointer-events-none w-96 h-96 opacity-20 -top-32 -left-32 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        className="absolute bg-pink-400 rounded-full pointer-events-none w-96 h-96 opacity-20 -bottom-32 -right-32 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-blue-400 rounded-full pointer-events-none opacity-20 -top-20 -right-20 blur-2xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
};

export default Hero;
