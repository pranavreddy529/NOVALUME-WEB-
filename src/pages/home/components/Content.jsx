import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function GridEdgeSection() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  // Slower horizontal movement
  const x = useTransform(smoothScroll, [0, 1], ["0%", "-80%"]);

  return (
    <div className="h-[300vh] bg-[#F4F1E7]" ref={scrollRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          {/* ========== SECTION 1 ========== */}
          <div className="w-screen px-6 lg:px-20 py-16 space-y-12 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-12 text-left"
            >
              How We Do It?
            </motion.h2>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md"
              >
                <img
                  src="/generated_image.png"
                  alt="Electric Pole"
                  className="rounded-2xl w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-[-40px] left-6 bg-blue-50 text-gray-900 p-6 rounded-xl shadow-lg max-w-[90%]">
                  <p className="text-sm leading-relaxed">
                    In the past, we had to buy PMI PQ monitors to perform tasks that we can now do with Sense-enabled Revelo meters.
                  </p>
                  <p className="mt-3 text-sm font-semibold">
                    <span className="text-blue-600">Principal Engineer</span> at{" "}
                    <span className="font-bold">MIDWEST CO-OP</span>
                  </p>
                </div>
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-center lg:text-left"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Non-Intrusive Load Monitoring (NILM)
                </h3>
                <p className="text-gray-700 text-base mb-6">
                  Using advanced NILM techniques, our system disaggregates energy consumption data without requiring invasive hardware installations.
                </p>
                <Link
                  to="/nilm"
                  className="border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition inline-block"
                >
                  Learn more
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ========== SECTION 2 ========== */}
          <motion.div
            className="w-screen px-6 lg:px-20 py-16 space-y-12 flex flex-col justify-center"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #EBA2A3, #CD968B, #AF8A7E, #F4F1E7)",
              backgroundSize: "600% 100%",
            }}
          >
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-2">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md"
              >
                <img
                  src="/generated_image (1).png"
                  alt="Laundry family"
                  className="rounded-2xl w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-[-40px] left-6 bg-blue-50 text-gray-900 p-6 rounded-2xl shadow-lg max-w-[90%]">
                  <div className="text-2xl font-bold mb-2">18%</div>
                  <p className="text-sm mb-4">Peak energy reduction</p>
                  <hr className="my-2 border-blue-100" />
                  <div className="text-2xl font-bold mb-2">4x</div>
                  <p className="text-sm mb-4">More likely to delay high-energy tasks</p>
                  <p className="text-sm text-blue-700 font-semibold mt-2">⚡ OhmConnect</p>
                </div>
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-center lg:text-left"
              >
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Advanced Machine Learning Algorithms
                </h3>
                <p className="text-gray-700 text-base mb-6">
                  A combination of supervised and unsupervised learning mechanisms enables our system to detect power consumption patterns and offer insights.
                </p>
                <Link
                  to="/amla"
                  className="border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition inline-block"
                >
                  Learn more
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ========== SECTION 3 ========== */}
          <div className="w-screen px-6 lg:px-20 py-16 space-y-12 flex flex-col justify-center">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md"
              >
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Electric Pole"
                  className="rounded-2xl w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-[-40px] left-6 bg-blue-50 text-gray-900 p-6 rounded-xl shadow-lg max-w-[90%]">
                  <p className="text-sm leading-relaxed">
                    In the past, we had to buy PMI PQ monitors to perform tasks that we can now do with Sense-enabled Revelo meters.
                  </p>
                  <p className="mt-3 text-sm font-semibold">
                    <span className="text-blue-600">Principal Engineer</span> at{" "}
                    <span className="font-bold">MIDWEST CO-OP</span>
                  </p>
                </div>
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-center lg:text-left"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Adequate Sampling Frequency & Data Processing
                </h3>
                <p className="text-gray-700 text-base mb-6">
                  Our device captures energy usage patterns at an optimal sampling rate, ensuring accurate consumption analysis while balancing processing efficiency.
                </p>
                <Link
                  to="/data-sampling"
                  className="border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition inline-block"
                >
                  Learn more
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
