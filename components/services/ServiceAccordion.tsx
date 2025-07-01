import { motion } from "framer-motion";
import { ServiceItem } from "./ServiceItem";
import { services } from "./services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const ServiceAccordion = () => {
  return (
    <motion.section 
      className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {services.map((service, i) => (
        <ServiceItem key={i} {...service} />
      ))}
    </motion.section>
  );
}; 