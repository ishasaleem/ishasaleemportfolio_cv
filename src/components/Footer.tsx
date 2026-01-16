import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between max-w-6xl px-6 mx-auto text-gray-700 sm:flex-row dark:text-gray-300">
        <p className="text-sm sm:text-base">&copy; 2025 Isha Saleem. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 mt-4 sm:mt-0">
          {[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Resume", href: "/ISHA_SALEEM_CV.pdf", download: true },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.download ? { download: true } : {})}
              whileHover={{ scale: 1.1, color: "#A78BFA" }}
              className="text-sm transition-colors duration-200 sm:text-base hover:text-purple-500"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
