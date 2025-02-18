import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

// Animation Variants

const About = () => {
  return (
    <div className="max-w-screen-sm w-full mx-auto px-2">
      <div className="font-netflix relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,rgba(0,0,0,1)_80%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-red-600 z-10"
        >
          About Me
        </motion.h1>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative mt-10 bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-lg text-center border border-gray-700 z-10"
        >
          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-300"
          >
            Hi, I&apos;m{" "}
            <span className="text-red-600 font-semibold text-xl">
              Nandhakumar J
            </span>
            , a passionate Full-Stack Developer specializing in modern web
            technologies. I love building scalable applications and crafting
            engaging user experiences.
          </motion.p>

          {/* Details with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 space-y-4 text-gray-400"
          >
            {/* Education */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3"
            >
              <FaGraduationCap className="text-yellow-400 text-2xl" />
              <span>
                <span className="text-red-600 font-semibold">Education:</span>{" "}
                MCA, SRM Institute of Science & Technology
              </span>
            </motion.p>

            {/* Experience */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3"
            >
              <FaBriefcase className="text-green-400 text-2xl" />
              <span>
                <span className="text-red-600 font-semibold">Experience:</span>
                Full-Stack Developer @ Nexus International Alliance
              </span>
            </motion.p>

            {/* Email */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3"
            >
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span>
                <span className="text-red-600 font-semibold">Email:</span>
                nandhakumar272002@gmail.com
              </span>
            </motion.p>

            {/* LinkedIn */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3"
            >
              <FaLinkedin className="text-blue-500 text-2xl" />
              <span>
                <span className="text-red-600 font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/nandhakumar27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-500 transition-all"
                >
                  linkedin.com/in/nandhakumar27
                </a>
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
