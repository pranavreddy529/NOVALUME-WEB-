import { motion } from "framer-motion";

export default function GridEdgeHero() {
  return (
    <section className="w-full bg-[#F4F1E7] py-16 px-6 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <button className="text-sm text-gray-500 mb-4 hover:underline">
            ← Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Grid Edge Intelligence on smart meters: <br />
            <span className>empowering energy operators</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            How non-intrusive load monitoring and machine learning help grid
            operators reduce energy waste and transition to a smarter grid.
          </p>

          {/* Article content below instead of "Learn more" button */}
          <div className="text-gray-800 space-y-4 text-base leading-relaxed">
            <p>
              In the evolving landscape of power distribution, smart meters equipped with
              edge intelligence are revolutionizing the way utilities manage energy flows.
              These devices not only measure consumption in real time but also analyze usage
              patterns to detect inefficiencies and anomalies.
            </p>
            <p>
              By embedding machine learning models directly on smart meters, operators can
              receive instant feedback without relying solely on cloud infrastructure. This
              reduces latency and enhances decision-making at the grid edge — a critical
              capability during peak demand or outages.
            </p>
            <p>
              Furthermore, non-intrusive load monitoring (NILM) makes it possible to break
              down household energy usage to specific appliances, enabling both customers
              and utilities to act on real insights rather than estimates.
            </p>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/generated_image.png"
              alt="Powerlines during sunset"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
