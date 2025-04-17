import { s } from "framer-motion/client";
import { createContext, useState } from "react";

export const StatsContext = createContext();

export const StatsContextProvider = ({ children }) => {

    const [stats, setStats] = useState({
        statsWidget: 1,
        numOfRooms: 0,
        numOfPeople: 0
    });

    return (
        <StatsContext.Provider value={{ stats, setStats }}>
            {children}
        </StatsContext.Provider>
    );
}