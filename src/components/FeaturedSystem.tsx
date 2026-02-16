"use client";

export default function FeaturedSystem() {
  return (
    <section id="featured" className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Featured System: Ludo Tournament Architecture
      </h2>

      <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm space-y-6">

        <p className="text-gray-300 leading-relaxed">
          Designed and implemented a scalable tournament system supporting high-concurrency
          real-time multiplayer gameplay.
        </p>

        <ul className="space-y-3 text-gray-300">
          <li>• Microservices-based architecture</li>
          <li>• Event-driven communication using Kafka</li>
          <li>• Redis for distributed caching & leaderboard state</li>
          <li>• Matchmaking & table balancing algorithms</li>
          <li>• Horizontal scalability using containerized deployments</li>
          <li>• Real-time updates via WebSockets</li>
        </ul>

        <div className="text-sm text-gray-400 mt-6">
          Focus: Scalability, Reliability, Low Latency, Fault Isolation
        </div>

      </div>
    </section>
  );
}
