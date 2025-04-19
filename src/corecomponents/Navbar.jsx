import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    navigate(isToggled ? "/" : "/Home2");
  };

  return (
    <motion.div 
      className="overflow-x-hidden"
      initial={{opacity: 0, y: -10}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeInOut", delay: 2}}
    >
      {/* Top Header: Toggle Left + Logo Center */}
      <div className="w-full flex items-center justify-between py-3 px-6 bg-white shadow-md">
        {/* Left: Toggle & Text */}
        <div className="flex items-center gap-4">
          <span className="text-[#675941] font-medium">For Industries</span>

          {/* Toggle Switch */}
          <div
            className={`w-28 h-8 rounded-full flex items-center transition-all duration-300 cursor-pointer shadow-inner ${
              isToggled ? "bg-[#CD968B]" : "bg-[#E4DAD1]"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`h-full w-1/2 rounded-full text-sm font-semibold text-white flex items-center justify-center transition-all duration-300 ${
                isToggled ? "translate-x-full bg-[#A97D6D]" : "bg-[#CD968B]"
              }`}
            />
          </div>
        </div>

        
       {/* Center: Logo with text and embedded logo */}
       <div className="flex justify-center flex-1">
  <div
    className="flex items-center space-x-1 text-3xl font-bold text-[#675941]"
    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 100 }}
  >
    <span>N</span>
    <img
      src="/logo.png"
      alt="Logo O"
      className="h-6 w-6 object-contain"
    />
    <span>valume</span>
  </div>
</div>

        {/* Spacer to maintain layout */}
        <div className="w-36" />
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white py-4 px-6 flex items-center justify-between shadow-md relative">
        {/* Left Nav Text */}
        <div className="flex items-center space-x-6 text-[#675941] font-medium relative -top-1">
          {[
            { label: "Home", path: "/" },
            { label: "Blogs", path: "/News" },
            { label: "About", path: "" },
            { label: "Tech Breakdown", path: "/tech-breakdown" },
            { label: "Features", path: "/App-features" },
            { label: "Purchase", path: "/product-purchase" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className="cursor-pointer hover:text-[#EBA2A3] transition"
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mr-4">
          <div
            onClick={() => navigate("/contact")}
            className="px-5 py-2 rounded-lg border border-[#EBA2A3] bg-[#F4F1E7] text-[#AF8A7E] font-semibold shadow-sm cursor-pointer"
          >
            Get in Touch
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
