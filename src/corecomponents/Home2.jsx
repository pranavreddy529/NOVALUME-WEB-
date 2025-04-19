import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LumeTales2 from "../pages/home/components/LumeTales2";
import Scroll from "../pages/home/components/Scroll";
import GridEdgeSection from "../pages/home/components/Content";

export default function Home2() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden pt-24">
        {/* ✅ Spline Background Embed */}
        <iframe
          src="https://my.spline.design/retrofuturisticcircuitloop-c95ef23491a862fc7c1f67e0e07a0f43/"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full z-0"
          allow="autoplay; fullscreen"
        ></iframe>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20 text-left">
          <motion.div
            className="p-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Transform Your Industry with <br /> Smart Energy Solutions
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-black mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Discover how Novalume's innovative technology can reduce your energy
              consumption while enhancing your comfort. Join the movement towards a
              sustainable future today!
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#CD968B] px-6 py-2 rounded-full font-medium transition hover:bg-gray-100 shadow-md border border-[#CD968B]"
              onClick={() => navigate("/App-features")}
            >
              Know More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <GridEdgeSection />
      <Scroll />
      <LumeTales2 />
    </>
  );
}
