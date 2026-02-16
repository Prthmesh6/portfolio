"use client";

import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section id="impact" className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Engineering Impact
      </h2>

      <div className="space-y-16">

        {/* SDE-2 */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            SDE-2 | Jul 2024 – Present
          </h3>

          <ul className="space-y-4 text-gray-300 leading-relaxed">
            <li>
              Designed and built the <span className="text-white font-semibold">Ludo Tournament System</span> from scratch,
              creating a scalable architecture capable of handling high-concurrency real-time gameplay.
            </li>
            <li>
              Owned and optimized Poker Tournament Microservices, improving system reliability and performance.
            </li>
            <li>
              Led a team of interns and SDE-1s, mentoring them in backend engineering and system design.
            </li>
            <li>
              Delivered end-to-end features using microservices, event-driven architecture, and optimized database design.
            </li>
          </ul>
        </div>

        {/* SDE-1 */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">
            SDE-1 | Backend Engineer
          </h3>

          <ul className="space-y-4 text-gray-300 leading-relaxed">
            <li>
              Built maintainable Golang microservices using Onion Architecture and Dependency Injection.
            </li>
            <li>
              Implemented real-time systems using Kafka, Redis, WebSockets, and HTTP APIs.
            </li>
            <li>
              Designed and deployed scalable ETL pipelines using PySpark, AWS EMR, Airflow, and Snowflake.
            </li>
            <li>
              Developed an internal monitoring tool to detect data pipeline failures and trigger Slack alerts.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
