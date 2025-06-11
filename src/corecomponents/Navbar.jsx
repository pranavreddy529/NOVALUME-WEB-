import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/NovalumeLogo.png'
import bulbImg from '../assets/bulb.png'

export default function Navbar() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    navigate(isToggled ? "/" : "/Home2");
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 pointer-events-none">
      <div className="w-full px-6 py-4 flex items-center justify-between pointer-events-auto">

        
        <div className="flex items-center gap-8">
          <div className="flex items-center" >
          <span 
              className="font-thin text-4xl tracking-widest bg-gradient-to-r from-red-400 to-yellow-900 text-transparent bg-clip-text">
              N
            </span>
            <img src={bulbImg} alt="Novalume Bulb" className="w-[50px] mt-[-3px] mx-[-4px]"/>
            <span 
              className="font-thin text-4xl tracking-widest bg-gradient-to-r from-red-400 to-yellow-900 text-transparent bg-clip-text">
              VALUME
            </span>
          </div>

          
          <div className="flex items-center gap-2">
            <div
              onClick={handleToggle}
              className="w-14 h-7 bg-[#F4F1E7] rounded-full flex items-center cursor-pointer transition duration-300"
            >
              <div
                className={`h-7 w-7 rounded-full bg-[#A97D6D] transition-transform duration-300 ${
                  isToggled ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-black text-sm font-semibold">
              {isToggled ? "HOME" : "MSME"}
            </span>
          </div>
        </div>

      
        <div className="bg-[#F4F1E7] bg-opacity-90 backdrop-blur-md rounded-full px-10 py-3 flex gap-8 text-black text-base font-medium shadow-lg">
          {[
            { label: "Home", path: "/" },
            { label: "Blogs", path: "/News" },
            { label: "About", path: "/about" },
            { label: "Tech Breakdown", path: "/tech-breakdown" },
            { label: "Features", path: "/App-features" },
            { label: "Purchase", path: "/product-purchase" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className="cursor-pointer hover:text-[#AB7E7E] hover:scale-105 transition duration-200 ease-in-out"
            >
              {item.label}
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2.5 rounded-full bg-white text-[#AB7E7E] font-semibold hover:bg-[#F4F1E7] hover:scale-105 transition duration-200 ease-in-out"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}