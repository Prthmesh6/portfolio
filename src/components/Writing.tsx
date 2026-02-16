"use client";

export default function Writing() {
  return (
    <section id="writing" className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Technical Writing
      </h2>

      <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Designing Google Search System (HLD + LLD)
        </h3>

        <p className="text-gray-300 mb-6">
          A deep dive into scalable search system architecture covering
          autocomplete, prefix matching using Trie, Redis optimizations,
          and distributed system tradeoffs.
        </p>

        <a
          href="https://medium.com/@prathmeshpatilp/google-search-system-design-734bd3ab8be0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition"
        >
          Read Article
        </a>
      </div>
    </section>
  );
}
