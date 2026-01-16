import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
    />
  );
};

export default ScrollProgress;
