"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { yoyo: 5 } },
  tap: { scale: 0.95 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError(false);

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess("Failed to send message.");
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-screen-sm w-full mx-auto mt-7 font-netflix px-2">
      <div className="font-netflix relative bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />

        {/* Contact Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-lg w-full text-center border border-gray-700"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-red-600 mb-6"
          >
            Contact Me
          </motion.h1>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              variants={inputVariants}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none"
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              variants={inputVariants}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none"
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              variants={inputVariants}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none h-32"
            />

            {/* Send Button */}
            <motion.button
              type="submit"
              disabled={loading}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Success Message with Animation */}
          {success && (
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-green-500"
            >
              {success}
            </motion.p>
          )}

          {/* Error Shake Animation */}
          {error && (
            <motion.p
              initial={{ x: 0 }}
              animate={{ x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-red-500"
            >
              Failed to send message. Try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
