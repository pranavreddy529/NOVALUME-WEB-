import { motion } from "framer-motion";
import ComparisonGraph from "./ComparisonGraph";

export default function StatsComparison() {
    return (
        <motion.div 
            className="initstats-cont flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#675941]">
                See the difference in your energy consumption:
            </h2>
            <motion.div 
                className="graph-cont mt-6 w-full mt-20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <ComparisonGraph />
            </motion.div>
        </motion.div>
    )
}