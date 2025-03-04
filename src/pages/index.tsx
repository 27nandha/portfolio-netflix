import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Name Reveal Animation

// Scroll Fade-In Animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PortfolioLanding = () => {
  const [showN, setShowN] = useState(false);
  const [showFullName, setShowFullName] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowN(true), 1000); // "N" appears
    setTimeout(() => setShowFullName(true), 3000); // Full name appears
    setTimeout(() => setShowPortfolio(true), 4200); // Portfolio appears
    setTimeout(() => setShowPage(true), 5500); // Page content loads
  }, []);

  if (!showN) return null; // Blank screen initially

  return (
    <>
      {/* Animated Intro Section */}
      <div className="font-netflix flex flex-col items-center justify-center min-h-screen bg-black px-4 relative overflow-hidden">
        {/* Background Animated Glow */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: 0, ease: "easeInOut" }}
          className="absolute w-[120vw] h-[120vh] bg-red-900 rounded-full blur-[200px]"
        />

        {/* Step 1: "Welcome to" Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 tracking-widest uppercase mb-4"
        >
          Welcome to
        </motion.h2>

        {/* Step 2: Animated "N" with Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-bold flex justify-center items-center text-[clamp(9vw,12vw,7rem)] drop-shadow-lg sm:text-8xl relative"
          style={{ transformOrigin: "center" }} // Ensures it scales from center
        >
          {!showFullName ? (
            // Step 3: Animated "N"
            <motion.span
              initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1.3, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-red-600 text-[clamp(11vw,11.5vw,9rem)] sm:text-8xl"
              style={{ transformOrigin: "center" }} // Keeps it centered while scaling
            >
              N
            </motion.span>
          ) : (
            // Step 4: Transform "N" into "Nandhakumar"
            <motion.div className="flex">
              <motion.span
                initial={{ scale: 1 }}
                animate={{ scale: 1.3, x: -3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-red-600 pr-0.5 sm:pr-2 text-[clamp(11vw,11.5vw,9rem)] sm:text-8xl drop-shadow-lg"
              >
                N
              </motion.span>
              {"ANDHAKUMAR".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="text-white text-[clamp(11vw,11.5vw,7rem)] sm:text-8xl drop-shadow-lg"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Step 5: "Portfolio" Appears After Name */}
        {showPortfolio && (
          <motion.div className="flex mt-4">
            {"PORTFOLIO".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="text-red-600 font-bold text-[clamp(5vw,7vw,5rem)] sm:text-6xl drop-shadow-lg"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Page Content After Animation */}
      {showPage && (
        <>
          <Navbar />
          <main className="font-netflix bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
            {/* Welcome Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-black overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute w-[120vw] h-[120vh] bg-red-900 rounded-full blur-[700px] opacity-20"></div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative text-5xl sm:text-6xl font-bold text-red-500 drop-shadow-md"
              >
                Let&apos;s Build Something Amazing!
              </motion.h2>

              {/* Introduction Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="relative text-lg sm:text-xl text-gray-300 mt-4 max-w-2xl leading-relaxed"
              >
                I&apos;m a{" "}
                <span className="text-red-400 font-medium">
                  Full-Stack Developer
                </span>
                who loves creating **scalable**, **high-performance** web
                applications. From intuitive UI to robust backend systems, I
                bring ideas to life!
              </motion.p>

              {/* Skills Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative mt-8 flex flex-wrap justify-center gap-4"
              >
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "Node.js",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold border border-gray-700 shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Resume + Contact Buttons */}
              <div className="relative mt-6 flex justify-center flex-wrap gap-7">
                {/* Resume Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1kI7POMRcSLogCW8m1e40DJic_2ZqzzEK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
                >
                  Download Resume
                </motion.a>

                {/* Contact Me Button */}
                <motion.a
                  href="/contact" // Link to Contact Section
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
                >
                  Let&apos;s Connect
                </motion.a>
              </div>
            </section>

            {/* Projects Section */}
            <section className="relative flex flex-col items-center justify-center py-10 sm:min-h-screen px-6 bg-black overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute w-[120vw] h-[90vh] bg-red-900 rounded-full blur-[500px] opacity-30"></div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-2xl sm:text-4xl p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-lg"
              >
                Featured Projects
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative text-gray-300 mt-4 text-lg max-w-xl text-center leading-relaxed"
              >
                Here are some **standout projects** that highlight my expertise
                in **web development, AI, and data visualization**.
              </motion.p>

              {/* Featured Project Showcase */}
              <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Staff Agreement System",
                    tech: "Next.js, TypeScript, Tailwind CSS, Node.js",
                  },
                  {
                    title: "SymptomSense: AI Diagnosis",
                    tech: "Python, Flask, SVC, Pandas",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    className="relative p-6 bg-gray-900 bg-opacity-60 backdrop-blur-xl border border-gray-700 shadow-lg rounded-2xl hover:scale-105 hover:border-red-500 transition-all cursor-pointer"
                  >
                    <h3 className="sm:text-xl text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">{project.tech}</p>
                  </motion.div>
                ))}
              </div>

              {/* View More Projects Button */}
              <motion.a
                href="/projects" // Link to full projects page
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative mt-8 inline-block bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
              >
                View All Projects
              </motion.a>
            </section>

            {/* About Section */}
            <section className=" flex flex-col py-20 items-center justify-center bg-black text-center px-6">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="sm:text-5xl text-3xl font-bold text-red-600 drop-shadow-md"
              >
                About Me
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-gray-300 mt-4 max-w-lg text-md sm:text-lg"
              >
                I&apos;m a passionate Full-Stack Developer skilled in
                JavaScript, TypeScript, and backend development. My focus is on
                building high-performance applications that solve real-world
                problems.
              </motion.p>
            </section>

            {/* Footer */}
            <footer className="text-center p-6 bg-gray-900 text-gray-400">
              <p>&copy; 2025 Nandhakumar. All rights reserved.</p>
            </footer>
          </main>
        </>
      )}
    </>
  );
};

export default PortfolioLanding;
