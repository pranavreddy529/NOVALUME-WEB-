import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Testimonials
const userStories = [
  {
    id: 1,
    name: "Alice Carter",
    story: "Novalume helped me cut my electricity bill by 60%! The smart solutions are incredible.",
  },
  {
    id: 2,
    name: "John Smith",
    story: "Switching to Novalume was the best decision! My home is now energy efficient and sustainable.",
  },
  {
    id: 3,
    name: "Sophie Martinez",
    story: "I love how smart and easy Novalume's system is. I can monitor everything from my phone!",
  },
];

const data = [
  {
    label: "Hospitals",
    icon: "🏥",
    description: "Efficient power management for healthcare facilities...",
    image: "https://source.unsplash.com/400x300/?hospital",
    benefits: ["Uninterrupted Power", "Lower Energy Costs", "Eco-friendly Solutions"],
  },
  {
    label: "Industries",
    icon: "🏭",
    description: "Optimizing energy usage in industrial operations...",
    image: "https://source.unsplash.com/400x300/?factory",
    benefits: ["Cost Reduction", "Automated Power Control", "Sustainable Energy"],
  },
  {
    label: "Housing Societies",
    icon: "🏘️",
    description: "Smart solutions for residential communities...",
    image: "https://source.unsplash.com/400x300/?apartment",
    benefits: ["Smart Metering", "Lower Bills", "Energy Conservation"],
  },
  {
    label: "Colleges",
    icon: "🏫",
    description: "Sustainable energy for educational institutions...",
    image: "https://source.unsplash.com/400x300/?university",
    benefits: ["Renewable Energy Integration", "Lower Carbon Footprint", "Automated Systems"],
  },
];

export default function NovalumeDashboard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const radius = 170;
  const center = 200;
  const gap = 0.05;
  const anglePerSector = (2 * Math.PI) / data.length;

  const describeArc = (startAngle, endAngle, isHovered) => {
    const r = isHovered ? radius + 15 : radius;
    const x1 = center + r * Math.cos(startAngle);
    const y1 = center + r * Math.sin(startAngle);
    const x2 = center + r * Math.cos(endAngle);
    const y2 = center + r * Math.sin(endAngle);
    return `M ${center} ${center} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
  };

  const getPopupPosition = (i) => {
    const angle = i * anglePerSector;
    return angle > Math.PI ? "left-10" : "right-10";
  };

  const colors = ["#EBA2A3", "#CD968B", "#AF8A7E", "#F4F1E7"];

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % userStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-black flex flex-col items-center bg-[#F4F1E7] pb-20">
      {/* Header */}
      <h1 className="text-3xl font-bold mt-12 mb-10">How Novalume Helps Industries Save Power</h1>

      {/* Radial Menu */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <svg width={400} height={400}>
          {data.map((item, i) => {
            const start = i * anglePerSector - Math.PI / 2 + gap;
            const end = (i + 1) * anglePerSector - Math.PI / 2 - gap;
            const path = describeArc(start, end, hoveredIndex === i);
            return (
              <motion.path
                key={i}
                d={path}
                fill={colors[i % colors.length]}
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelected({ ...item, index: i })}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer" }}
              />
            );
          })}

          {/* Center Circle */}
          <circle cx={center} cy={center} r={50} fill="#ffffff" stroke="#AF8A7E" strokeWidth={2} />

          {/* Icons and Labels */}
          {data.map((item, i) => {
            const angle = i * anglePerSector - Math.PI / 2 + anglePerSector / 2;
            const x = center + (radius - 60) * Math.cos(angle);
            const y = center + (radius - 60) * Math.sin(angle);
            return (
              <g key={i} transform={`translate(${x}, ${y})`} textAnchor="middle">
                <text y={-8} fontSize="24" dominantBaseline="middle" className="pointer-events-none">
                  {item.icon}
                </text>
                <text y={18} fontSize="10" className="pointer-events-none" fontWeight="600">
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Info Panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="popup"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-20 ${getPopupPosition(selected.index)} w-96 bg-white shadow-xl rounded-xl p-6 z-50`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{selected.label}</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-red-500 text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <img
              src={selected.image}
              alt={selected.label}
              className="rounded-lg w-full h-48 object-cover mb-3"
            />
            <p className="text-gray-700 text-sm mb-3">{selected.description}</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              {selected.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LumeTales Section */}
      <div className="bg-white mt-28 py-16 px-8 text-center w-full">
        <h2
          className="text-5xl font-extrabold text-[#473C2F] mb-6 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          LumeTales
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Discover how Novalume has transformed homes with smart energy solutions.
        </p>

        <motion.div
          key={userStories[currentIndex].id}
          className="w-full max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-3xl font-semibold text-gray-900">
            "{userStories[currentIndex].story}"
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-4">
            - {userStories[currentIndex].name}
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
