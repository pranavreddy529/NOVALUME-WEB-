import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import StatsForm from "./components/StatsForm";
import InitStats from "./components/InitStats";
import FinalStats from "./components/FinalStats";
import StatsComparison from "./components/StatsComparison";
import ProductFeatures from "./components/ProductFeatures";
import Companies from "./components/Companies";
import FAQs from "./components/FAQs";
import KnowMore from "./components/KnowMore";
import CalendlyBookingComponent from "../../corecomponents/ContactUs";
import { StatsContext } from "./context/StatsContext";
import VideoBG from "./components/VideoBG";


export default function Home() {

  const statsContext = useContext(StatsContext);

  const navigate = useNavigate();

  return (
    <>
    <div className="home">
      <div className="flex items-center justify-center min-h-screen w-full p-6 bg-transparent">
        <VideoBG />
        <motion.div 
          className="max-w-3xl text-center flex flex-col justify-center z-10 bg-[#ffffff15] p-7 rounded-xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#fff]"
          >
            Empowering smart energy, one choice at a time
          </h1>

          <motion.p 
            className="text-lg md:text-xl mt-4 mb-6 text-[#efef]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Our smart energy solution is designed to give you real-time insights into your energy consumption, helping you optimize usage, reduce costs, and contribute to a greener planet. Take control of your energy future today.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <button className="bg-[#EBA2A3] hover:bg-[#d88b8c] text-white font-medium py-2 px-6 rounded-full transition">
              Shop
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-full transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative">
        <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
          <AnimatePresence mode="wait">
            {
              statsContext.stats.statsWidget === 1 && ( 
                <motion.div
                  key={0}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1, ease: "easeOut"}}
                >
                  <StatsForm key={0} />
                </motion.div>
              )
            }  
            {
              statsContext.stats.statsWidget === 2 && (
                <motion.div
                  key={1}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0}}
                  transition={{ duration: 1, ease: "easeOut"}}
                >
                  <InitStats key={1} />
                </motion.div>
              )
            }
            {
              statsContext.stats.statsWidget === 3 && (
                <motion.div
                  key={2}
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0}}
                  transition={{ duration: 1, ease: "easeOut"}}
                >
                  <FinalStats key={2} />
                </motion.div>
              )
            }
            {
              statsContext.stats.statsWidget === 4 && (
                <motion.div
                  key={3}
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0}}
                  transition={{ duration: 1, ease: "easeOut"}}
                >
                  <StatsComparison key={3} />
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
        <KnowMore />
        <ProductFeatures />
        <Companies />
        <FAQs />
        <CalendlyBookingComponent />
      </div>
    </div>
    </>
  );
}
