export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold">Real-Time Leaderboard Service</h3>
          <p className="text-gray-400 mt-2">
            Built using Golang + Redis sorted sets to handle real-time ranking updates.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold">WebSocket Chat Backend</h3>
          <p className="text-gray-400 mt-2">
            High-concurrency WebSocket server built in Golang.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold">In-Memory Cache</h3>
          <p className="text-gray-400 mt-2">
            Custom in-memory caching engine inspired by Redis.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold">Built My Own Redis</h3>
          <p className="text-gray-400 mt-2">
            Implemented core Redis functionalities in Golang.
          </p>
        </div>

      </div>
    </section>
  );
}
