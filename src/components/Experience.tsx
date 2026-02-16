export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-4xl font-bold mb-12">Work Experience</h2>

      <div className="space-y-10">
        <div className="border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-2xl font-semibold">
            Junglee Games – Software Engineer (Backend)
          </h3>
          <p className="text-gray-400 mt-2">
            October 2022 – Present
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Built core Poker game logic module in Golang</li>
            <li>Designed scalable microservices using Onion Architecture</li>
            <li>Implemented MultiFlight Tournament system (+20% retention)</li>
            <li>Optimized hand rank calculation by 50%</li>
          </ul>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h3 className="text-2xl font-semibold">
            Cognizant – Backend Developer
          </h3>
          <p className="text-gray-400 mt-2">
            October 2021 – September 2022
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Built REST APIs in Golang</li>
            <li>Developed PySpark ETL pipelines</li>
            <li>Worked with AWS S3 for high availability systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
