import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductFeatures = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Live Energy Monitoring',
      description: 'Track your real-time electricity consumption and understand how different appliances impact your usage.',
      color: '#FFE0B2'
    },
    {
      icon: '🧠',
      title: 'Smart Insights & Recommendations',
      description: 'Receive AI-driven recommendations tailored to help you optimize energy consumption and lower bills.',
      color: '#C8E6C9'
    },
    {
      icon: '📊',
      title: 'User-Friendly Dashboard',
      description: 'A sleek, intuitive interface providing historical trends, comparisons, and usage breakdowns.',
      color: '#BBDEFB'
    },
    {
      icon: '👥',
      title: 'Community Energy Benchmarking',
      description: 'Compare your household\'s efficiency with others on the app, encouraging smarter energy habits.',
      color: '#D1C4E9'
    },
    {
      icon: '💵',
      title: "Forecast Monthly Bills",
      description: "Stay ahead of your expenses with AI-powered monthly bill predictions based on your current usage trends.",
      color: '#F8BBD0'
    },
    {
      icon: '☀️',
      title: "Solar Integration & Automation",
      description: "Integrate with solar data and prepare for smart home automation with NovaLume’s forward-thinking energy management.",
      color: '#FFECB3'
    }
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen w-full bg-[#F4F1E7] py-12 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#675941] mb-4">
          Empower Your Energy Management
        </h1>
        <p className="text-lg md:text-xl text-[#675941] max-w-3xl mx-auto">
          NovaLume transforms how you understand and control your home's energy usage.
          Discover insights, save money, and contribute to a sustainable future.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHoveredId(i)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedId(i)}
            className="cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 relative z-10"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#675941] mb-2">{feature.title}</h3>
            <p className="text-[#675941] text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  ✕
                </button>
                <div className="p-8 flex-1 overflow-y-auto">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4" style={{ color: features[selectedId].color }}>
                      {features[selectedId].icon}
                    </div>
                    <h2 className="text-3xl font-bold text-[#675941]">{features[selectedId].title}</h2>
                  </div>
                  <p className="text-[#675941] mb-6">{features[selectedId].description}</p>
                  <div className="bg-[#F4F1E7] p-6 rounded-xl mb-6">
                    <h4 className="text-xl font-semibold text-[#675941] mb-3">Key Benefits</h4>
                    <ul className="list-disc pl-5 text-[#675941] space-y-2">
                      <li>Track usage in real time</li>
                      <li>Personalized AI suggestions</li>
                      <li>Cost and environmental savings</li>
                      <li>Easy-to-read visual data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#675941] mb-3">How It Works</h4>
                    <p className="text-[#675941]">
                      NovaLume’s <strong>{features[selectedId].title}</strong> uses smart data processing to learn your habits, 
                      identify wasteful patterns, and help you make eco-friendly, budget-smart choices.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">App Preview</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFeatures;
