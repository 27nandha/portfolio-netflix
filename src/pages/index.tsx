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

        {/* Animated "N" with Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-bold flex justify-center items-center text-[clamp(9vw,12vw,7rem)] drop-shadow-lg sm:text-8xl relative"
          style={{ transformOrigin: "center" }} // Ensures it scales from center
        >
          {!showFullName ? (
            // Step 1: Animated "N"
            <motion.span
              initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1.3, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-red-600  text-[clamp(11vw,11.5vw,9rem)] sm:text-8xl "
              style={{ transformOrigin: "center" }} // Keeps it centered while scaling
            >
              N
            </motion.span>
          ) : (
            // Step 2: Transform "N" into "Nandhakumar"
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

        {/* Step 3: "Portfolio" Appears After Name */}
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
              <div className="absolute w-[120vw] h-[100vh] bg-red-900 rounded-full blur-[700px] opacity-25"></div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-6xl sm:text-7xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 drop-shadow-lg"
              >
                Welcome to My Portfolio
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative text-lg sm:text-xl text-gray-300 mt-4 max-w-2xl leading-relaxed"
              >
                Crafting{" "}
                <span className="text-red-400 font-medium">scalable</span> and{" "}
                <span className="text-red-400 font-medium">
                  high-performance
                </span>{" "}
                web applications with precision.
              </motion.p>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1YRw4ya9wnuoZfqJ0Xoc1rNpb8m84a6a7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative mt-6 inline-block bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
              >
                Download Resume
              </motion.a>
            </section>

            {/* Projects Section */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-black overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute w-[120vw] h-[120vh] bg-red-900 rounded-full blur-[500px] opacity-30"></div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-5xl p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-lg"
              >
                Projects
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative text-gray-300 mt-4 text-lg max-w-xl text-center leading-relaxed"
              >
                Here are some of my recent works that showcase my technical
                expertise.
              </motion.p>

              {/* Project Cards */}
              <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Staff Agreement System",
                    tech: "Next.js, TypeScript, Tailwind CSS, Node.js",
                  },
                  {
                    title: "SymptomSense: AI Diagnosis",
                    tech: "Python, Flask, SVC, Pandas",
                  },
                  {
                    title: "Sales Insights Dashboard",
                    tech: "Power BI, MySQL",
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
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">{project.tech}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section className="h-screen flex flex-col items-center justify-center bg-black text-center px-6">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-5xl font-bold text-red-600 drop-shadow-md"
              >
                About Me
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-gray-300 mt-4 max-w-lg text-lg"
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
