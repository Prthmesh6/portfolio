"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">
          Prathmesh.dev
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} />
          ) : (
            <Menu onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
