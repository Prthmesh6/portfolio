"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-blue-500">Prathmesh Patil</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl mt-6 text-gray-400 max-w-2xl"
      >
        Backend Engineer specializing in Golang, Distributed Systems,
        Real-Time Gaming Infrastructure and System Design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-gray-600 hover:border-blue-500 transition px-6 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
