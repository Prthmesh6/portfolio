"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Code } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    value: "Prthmesh6",
    link: "https://github.com/Prthmesh6",
    icon: Github,
  },
  {
    name: "LeetCode",
    value: "Prathmesh20",
    link: "https://leetcode.com/u/Prathmesh20/",
    icon: Code,
  },
  {
    name: "LinkedIn",
    value: "prathmeshpatil64",
    link: "https://www.linkedin.com/in/prathmeshpatil64/",
    icon: Linkedin,
  },
  {
    name: "Email",
    value: "prathmeshpatilp@gmail.com",
    link: "mailto:prathmeshpatilp@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    value: "+91 7558563795",
    link: "tel:+917558563795",
    icon: Phone,
  },
];

export default function Profiles() {
  return (
    <section id="profiles" className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Coding Profiles & Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {profiles.map((profile, index) => {
          const Icon = profile.icon;

          return (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              className="group border border-gray-800 rounded-2xl p-6 flex items-center gap-6 bg-gray-900/40 backdrop-blur-sm hover:border-blue-500 transition"
            >
              <div className="p-4 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 transition">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {profile.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {profile.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
