"use client"

import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Service data
const services = [
  {
    name: 'Web Design',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    description: 'We create stunning, responsive websites that captivate your audience and reflect your brand identity. Our designs are not just visually appealing but also user-friendly and optimized for performance.',
    features: ['Custom Design', 'Responsive Layouts', 'UI/UX Best Practices', 'Brand Integration']
  },
  {
    name: 'Web Development',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    description: 'Our development team builds robust, scalable web applications using the latest technologies and frameworks. We focus on creating solutions that are both powerful and easy to maintain.',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
  },
  {
    name: 'UI/UX Design',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    description: 'We design intuitive user interfaces and seamless user experiences that delight your customers and keep them coming back. Our approach combines aesthetics with functionality.',
    features: ['User Research', 'Wireframing & Prototyping', 'Usability Testing', 'Interaction Design']
  },
  {
    name: 'Web Security',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    description: 'We implement robust security measures to protect your web assets from threats and vulnerabilities. Our security solutions ensure your data and your users\' information stays safe.',
    features: ['Security Audits', 'Vulnerability Assessment', 'SSL Implementation', 'Data Protection']
  },
  {
    name: 'Digital Marketing',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    description: 'Our digital marketing strategies help you reach your target audience, increase brand awareness, and drive conversions. We use data-driven approaches to maximize your ROI.',
    features: ['SEO Optimization', 'Content Marketing', 'Social Media Campaigns', 'Analytics & Reporting']
  },
  {
    name: 'App Development',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    description: 'We develop custom mobile applications for iOS and Android platforms that extend your reach and engage users on the go. Our apps are built for performance and user satisfaction.',
    features: ['Native & Cross-Platform', 'User-Centered Design', 'Offline Functionality', 'App Store Optimization']
  },
  {
    name: 'Blockchain Development',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    description: 'We leverage blockchain technology to create secure, transparent, and decentralized solutions for your business needs. Our blockchain applications provide trust and efficiency.',
    features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'Blockchain Integration']
  },
  {
    name: 'AI & Machine Learning',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    description: 'We implement AI and machine learning solutions that automate processes, provide insights, and enhance decision-making. Our AI applications are designed to solve real business problems.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              variants={itemFadeIn}
            >
              <span className="block text-white">Our</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemFadeIn}
            >
              We offer a comprehensive suite of digital solutions designed to transform your business and drive exceptional results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 hover:bg-blue-500/10 transition-all group"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(99, 102, 241, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: service.name === 'Web Security' ? [0, 10, 0, -10, 0] : 0
                      }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        rotate: {
                          repeat: service.name === 'Web Security' ? Infinity : 0,
                          repeatDelay: 3,
                          duration: 1
                        }
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-sm font-semibold text-blue-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How We Work
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our Process
            </motion.h3>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We follow a structured approach to ensure every project is delivered on time, within budget, and exceeds expectations.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { step: '01', title: 'Discovery', description: 'We start by understanding your business, goals, and requirements through in-depth consultations.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.' },
              { step: '03', title: 'Implementation', description: 'Our team executes the plan with precision, keeping you informed at every step.' },
              { step: '04', title: 'Launch & Support', description: 'We ensure a smooth launch and provide ongoing support to help you succeed.' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 hover:bg-blue-500/10 transition-all"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(99, 102, 241, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{process.step}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{process.title}</h4>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={itemFadeIn}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={itemFadeIn}
            >
              Let's discuss how our services can help you achieve your goals.
            </motion.p>
            <motion.div variants={itemFadeIn}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative flex items-center">
                  GET STARTED
                  <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
