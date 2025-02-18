import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB.",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Event Ticket Marketplace",
    description:
      "A secure event ticketing system using QR codes and real-time updates.",
    image: "/projects/ticketing.png",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Automated expense tracking using OCR and AI-based categorization.",
    image: "/projects/expense-tracker.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-6">
      <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-red-500">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
