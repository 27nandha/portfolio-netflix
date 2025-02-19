import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Name Reveal Animation
const nameVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.3, ease: "easeOut" },
  }),
};

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
  const [showGradient, setShowGradient] = useState(true);

  if (!showN) return null; // Blank screen initially

  return (
    <>
      {/* Animated Intro Section */}
      <div className="font-netflix flex flex-col items-center justify-center h-screen bg-black px-4">
        {showGradient && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: [0.2, 0.5, 0.2], x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: 2,
            }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => setShowGradient(false)} // Hides after finishing
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-900 to-transparent blur-lg opacity-30"
          />
        )}

        {/* Animated "N" with Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-bold flex justify-center items-center text-[10vw] sm:text-8xl relative"
          style={{ transformOrigin: "center" }} // Ensures it scales from center
        >
          {!showFullName ? (
            // Step 1: Animated "N"
            <motion.span
              initial={{ opacity: 0, scale: 2.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1.3, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
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
                className="text-red-600"
              >
                N
              </motion.span>
              {"ANDHAKUMAR".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={nameVariants}
                  className="text-white text-[10vw] sm:text-8xl drop-shadow-lg"
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
                initial="hidden"
                animate="visible"
                variants={nameVariants}
                className="text-red-600 text-[2vw] text-lg sm:text-6xl drop-shadow-lg"
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
            <section className="h-screen flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 drop-shadow-lg"
              >
                Welcome to My Portfolio
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-lg sm:text-xl text-gray-300 mt-4 max-w-2xl"
              >
                A Full-Stack Developer passionate about building scalable web
                applications with high performance.
              </motion.p>

              {/* Download Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1YRw4ya9wnuoZfqJ0Xoc1rNpb8m84a6a7/view?usp=sharing" // Replace with your actual Drive link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block bg-red-500 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
              >
                Download Resume
              </motion.a>
            </section>

            {/* Projects Section */}
            <section className="h-screen flex flex-col items-center justify-center bg-gray-900 px-6">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-5xl font-bold text-red-500 drop-shadow-md"
              >
                Projects
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-gray-300 mt-4 text-lg"
              >
                Here are some of my recent works.
              </motion.p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="p-6 bg-gray-800 bg-opacity-60 backdrop-blur-xl border border-gray-700 shadow-lg rounded-2xl hover:scale-105 transition-all cursor-pointer"
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
                className="text-5xl font-bold text-blue-400 drop-shadow-md"
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
