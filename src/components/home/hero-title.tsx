import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-white">About</span>
        <br />
        <span className="text-blue-400">WebNexaAI</span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-400 font-medium max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        We are a team of passionate developers, designers, and digital strategists dedicated to transforming ideas into powerful digital experiences.
      </motion.p>
    </motion.div>
  );
};

export default HeroTitle; 