import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import Next.js Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  let lastScrollY = 0;

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-netflix">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: scrollingUp ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 backdrop-blur-lg z-50"
      >
        {/* Logo (Click to Go to Home) */}
        <Link href="/">
          <div className="text-red-600 text-xl font-bold tracking-wide cursor-pointer">
            Portfolio
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Skills", path: "/skills" },
            { name: "Experience", path: "/experience" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-red-600 cursor-pointer transition duration-300"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-xl text-white z-40"
          >
            {/* Menu Items */}
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Experience", path: "/experience" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="hover:text-red-600 transition duration-300"
              >
                <Link href={item.path}>{item.name}</Link>
              </motion.a>
            ))}

            {/* Close Button */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
