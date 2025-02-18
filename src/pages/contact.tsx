import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <div className="max-w-screen-sm w-full mx-auto px-2">
      <div className="font-netflix relative bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />

        {/* Animated Background Effect */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,rgba(0,0,0,1)_80%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Contact Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-lg w-full text-center border border-gray-700"
        >
          <h1 className="text-5xl font-bold text-red-600 mb-6">Contact Me</h1>

          <div className="space-y-6 text-lg">
            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-4"
            >
              <FaPhoneAlt className="text-red-500 text-2xl" />
              <span className="text-gray-300">+91 7092729506</span>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-4"
            >
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span className="text-gray-300">nandhakumar272002@gmail.com</span>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-4"
            >
              <FaLinkedin className="text-blue-500 text-2xl" />
              <a
                href="https://linkedin.com/in/nandhakumar27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline hover:text-red-500 transition-all"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
