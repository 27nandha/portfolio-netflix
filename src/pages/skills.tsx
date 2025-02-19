import { motion } from "framer-motion";
import { BsDatabase } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import Navbar from "@/components/Navbar";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// Skills Data
const skills = [
  { name: "Java", icon: <FaJava className="text-yellow-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Java Script", icon: <FaJs className="text-yellow-300" /> },
  { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Mongo DB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Power BI", icon: <BsDatabase className="text-yellow-500" /> },
  { name: "Excel", icon: <FaDatabase className="text-green-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

export const Skills = () => {
  return (
    <div className="font-netflix relative my-7 min-h-screen bg-black text-white">
      <Navbar />

      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,rgba(0,0,0,1)_80%)]"
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
          Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-3 bg-gray-900/80 backdrop-blur-md p-5 rounded-xl border border-gray-700 shadow-md cursor-pointer hover:border-red-500 hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
