import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "staff-agreement",
    title: "Staff Agreement Management System",
    description:
      "Automating employee agreement processes with Next.js and TypeScript.",
    image: "/projects/staff-agreement.png",
  },
  {
    id: "symptomsense",
    title: "SymptomSense: AI-Powered Symptom Diagnosis Tool",
    description: "AI-driven healthcare platform for symptom-based diagnosis.",
    image: "/projects/symptomsense.png",
  },
  {
    id: "sales-dashboard",
    title: "Sales Insights Dashboard",
    description: "Interactive analytics dashboard using Power BI and MySQL.",
    image: "/projects/sales-dashboard.png",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  return (
    <section className="font-netflix relative min-h-screen bg-black text-white py-12 px-6">
      {/* Glowing Background Effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,rgba(0,0,0,1)_80%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center text-red-600 mb-12 relative z-10"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-700 cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-t-2xl"
                />
                {/* Overlay on Hover */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-xl font-semibold text-white bg-red-600 px-4 py-2 rounded-md">
                    View Project
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-red-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
