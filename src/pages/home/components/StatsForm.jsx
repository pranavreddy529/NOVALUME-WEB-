import React, { useState, useRef, useEffect, useContext } from "react"
import { motion, useInView, useAnimation } from "framer-motion";

import { StatsContext } from "../context/StatsContext";

export default function StatsForm() {
    const [people, setPeople] = useState(" ");
    const [rooms, setRooms] = useState(" ");
    const statsContext = useContext(StatsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if both inputs have values
        if (people.trim() === "" || rooms.trim() === "") {
            alert("Please fill out all fields");
            return;
        }

        // Set the stats in the context
        statsContext.setStats({
            statsWidget: 2,
            numOfPeople: people,
            numOfRooms: rooms
        });
        console.log(statsContext.stats);
    };

      const statsRef = useRef(null);
      const isinView = useInView(statsRef, { once: true });
      const statsControls = useAnimation();
    
      useEffect(() => {
        if (isinView) {
          statsControls.start("visible");
        }
      }, [isinView]);
    
    return (
        <motion.div
          ref={ statsRef }
          className="flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={ statsControls }
          transition={{ duration: 1, ease: "easeOut", delay: 0.3}}
        >
          <div className="mt-6 md:mt-0 md:ml-12">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[#675941]">
                Get Personalized Stats For Your Home
              </h1>
              <p className="text-lg md:text-xl mt-4 mb-6 text-[#675941]">Enter a few details about your home and get personalized stats right now!</p>
          </div>
            <motion.div className="statsFormAnimCont"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
                <div className="statsformcontainer p-5 rounded-xl m-30 bg-[#F5F1E6]">
                    <form 
                        onSubmit={handleSubmit} 
                        className="statsform flex flex-col justify-center w-175 h-100 p-15"
                    >
                        <label htmlFor="peopleInp" className="text-[#665740] mb-2">Enter number of people</label>
                        <input
                            type="number"
                            name="peopleInp"
                            id="peopleInp"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            className="border-b-2 focus:outline-none mb-10 border-[#EBA3A4] caret-[#665740]"
                            required
                        />
                        <label htmlFor="roomsInp" className="text-[#665740] mb-2">Enter number of rooms</label>
                        <input
                            type="number"
                            name="roomsInp"
                            id="roomsInp"
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                            className="border-b-2 focus:outline-none mb-10 border-[#EBA3A4] caret-[#665740]"
                            required
                        />
                        <button 
                            className="bg-[#EBA2A3] hover:bg-[#d88b8c] text-white font-medium py-2 px-6 rounded-full transition"
                            type="submit"
                        >
                            Get Stats
                        </button>
                    </form>
                </div> 
            </motion.div>
        </motion.div>
    )
}