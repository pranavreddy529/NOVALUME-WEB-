import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Graph from "./Graph";
import { StatsContext } from "../context/StatsContext";

export default function FinalStats() {

    const statsContext = useContext(StatsContext);

    useEffect(() => {
        setTimeout(() => {
            statsContext.setStats({
                ...statsContext.stats,
                statsWidget: 4,
            });
        }, 5000);
    }, [statsContext]);


    return (
        <motion.div 
            className="initstats-cont flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#675941]">
                This is how much you could be spending:
            </h2>
            <motion.div 
                className="graph-cont mt-6 w-full mt-20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Graph graph="after" />
            </motion.div>
        </motion.div>
    )
}