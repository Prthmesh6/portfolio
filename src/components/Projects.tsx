"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Fastest In-Memory Database in Golang",
    description:
      "A high-performance in-memory database built from scratch in Go, focusing on efficient data structures, low-latency access, and concurrency safety.",
    tech: ["Golang", "Concurrency", "Data Structures"],
    link: "https://github.com/Prthmesh6/Fastest-In-Memory-Database-in-Golang",
  },
  {
    title: "OCR Service",
    description:
      "Backend OCR microservice capable of extracting text from images using AI-based processing and scalable architecture.",
    tech: ["Golang", "Microservices", "Image Processing"],
    link: "https://github.com/Prthmesh6/ocr-service",
  },
  {
    title: "Microservice GoKit Sample",
    description:
      "Production-style microservice architecture implemented using Go-Kit with clean layering, dependency injection, and scalable patterns.",
    tech: ["Go-Kit", "Microservices", "Clean Architecture"],
    link: "https://github.com/Prthmesh6/Microservice_Gokit_Sample",
  },
  {
    title: "LRU Cache",
    description:
      "Custom implementation of a thread-safe LRU Cache demonstrating deep understanding of data structures and memory optimization.",
    tech: ["Golang", "LRU Algorithm", "HashMap + Doubly Linked List"],
    link: "https://github.com/Prthmesh6/LRU_Cache",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Selected Engineering Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm hover:border-blue-500 transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition font-medium"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
