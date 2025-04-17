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
            Advanced Machine Learning Algorithms: <br />
            <span className="text-[#CD968B]">powering a smarter energy future</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            How intelligent data models help identify inefficiencies, predict energy usage, and optimize grid performance.
          </p>

          {/* Article content */}
          <div className="text-gray-800 space-y-4 text-base leading-relaxed">
            <p>
              As global energy demands rise, traditional monitoring methods struggle to keep up.
              Advanced machine learning (ML) algorithms step in to analyze vast datasets from smart
              meters, identifying consumption trends and behavioral patterns in real-time.
            </p>
            <p>
              These models can distinguish between normal and abnormal usage, predict peak demand
              periods, and detect inefficiencies before they become costly. They continuously learn
              and adapt, enabling dynamic grid optimization and more accurate forecasting.
            </p>
            <p>
              From reducing emissions to improving power quality, ML is helping utilities transition
              from reactive to proactive operations—making the grid not only smarter, but more
              sustainable and responsive.
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
              src="/generated_image (1).png"
              alt="AI concept in energy"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
