import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Experience Data
const experiences = [
  {
    company: "Nexus International Alliance Pvt Ltd",
    role: "Part-Time Full-Stack Developer (Remote)",
    period: "Jan 2025 – Present",
    description:
      "Designed, developed, and deployed full-stack web applications using Next.js, TypeScript, and the MERN stack.",
    icon: <FaLaptopCode className="text-blue-400" />,
  },
  {
    company: "Orinson Technologies",
    role: "Full-Stack Developer Intern (Remote)",
    period: "Dec 2024 – Jan 2025",
    description:
      "Developed and deployed full-stack web applications using the MERN stack, enhancing efficiency and user experience.",
    icon: <MdWork className="text-yellow-400" />,
  },
];

const Experience = () => {
  return (
    <div className="font-netflix relative min-h-screen my-7 bg-black text-white">
      <Navbar />

      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.15)_0%,rgba(0,0,0,1)_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="container mx-auto p-10 relative z-10"
      >
        <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">
          Experience
        </h1>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-red-600 ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative bg-gray-900/80 backdrop-blur-md p-6 my-6 rounded-xl border border-gray-700 shadow-md hover:border-red-500 hover:bg-gray-800 transition-all duration-300"
            >
              {/* Glowing Dot and Connector */}
              <span className="absolute -left-[32px] top-6 w-6 h-6 bg-red-600 rounded-full animate-pulse"></span>

              {/* Experience Icon */}
              <span className="absolute -left-12 top-4 bg-red-700 p-3 rounded-full shadow-lg">
                {exp.icon}
              </span>

              {/* Experience Details */}
              <h2 className="text-2xl font-semibold text-blue-400">
                {exp.company}
              </h2>
              <h3 className="text-lg text-gray-300">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
