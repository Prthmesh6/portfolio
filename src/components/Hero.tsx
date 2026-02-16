"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";


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
          target="_blank"
          rel="noopener noreferrer"
          className="relative group inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
        >
          <ArrowDownToLine className="w-5 h-5" />
          View Resume

          {/* Shine Effect */}
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute left-[-75%] top-0 h-full w-1/2 bg-white/10 transform skew-x-12 group-hover:animate-shine" />
          </span>
        </a>


      </motion.div>
    </section>
  );
}
