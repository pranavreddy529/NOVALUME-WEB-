import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Live Energy Monitoring",
    description:
      "Track your real-time electricity consumption and understand how different appliances impact your usage. Our system provides second-by-second updates, ensuring you're always informed and in control of your energy footprint.",
    video: "/image2.mp4",
  },
  {
    title: "Smart Insights & Recommendations",
    description:
      "Receive AI-driven recommendations tailored to help you optimize energy consumption and lower bills. Whether it’s suggesting off-peak appliance usage or identifying unusually high consumption, our smart system keeps you a step ahead.",
    image: "/image7.jpg",
  },
  {
    title: "User-Friendly Dashboard",
    description:
      "A sleek, intuitive interface providing historical trends, comparisons, and usage breakdowns. The dashboard is designed for users of all technical levels, making energy management simple and effective.",
    image: "/image6.jpg",
  },
  {
    title: "Community Energy Benchmarking",
    description:
      "Compare your household’s efficiency with others on the app, encouraging smarter energy habits. Learn how your neighbors or similar households are performing and discover new ways to save energy together.",
    image: "/image6.jpg",
  },
  {
    title: "Forecast Monthly Bills",
    description:
      "Stay ahead of your expenses with AI-powered monthly bill predictions based on your current usage trends. Forecasts are updated in real-time so you can adjust habits before receiving your energy bill.",
    image: "/image3.jpg",
  },
  {
    title: "Solar Integration & Future Automation",
    description:
      "Seamlessly integrates with solar power data, allowing you to monitor generation, usage, and storage efficiency. Future updates will include intelligent automation features to further reduce waste and increase sustainability.",
    image: "/image3.jpg",
  },
];

export default function AppFeatures() {
  return (
    <div className="min-h-screen bg-[#EBA2A3] text-white">
      {/* Main Hero Section */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the innovative embedded system powering Novalume's energy-saving solutions.
          </h1>
          <p className="text-lg mb-6">
            At the heart of Novalume's devices is a cutting-edge embedded system that integrates our proprietary machine learning model. This technology learns from your daily habits, adapts in real-time, and empowers smarter energy decisions with minimal effort from you. By blending advanced hardware and AI software, we create a seamless experience that transforms how households interact with energy.
          </p>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Left Image */}
          <img
            src="/image6.jpg"
            alt="Screen Left"
            className="w-48 md:w-56 lg:w-64 absolute left-0 top-12 rotate-[] z-10 shadow-xl"
          />
          {/* Center Image */}
          <img
            src="/image7.jpg"
            alt="Screen Center"
            className="w-52 md:w-60 lg:w-72 z-20 shadow-2xl"
          />
          {/* Right Image */}
          <img
            src="/image6.jpg"
            alt="Screen Right"
            className="w-48 md:w-56 lg:w-64 absolute right-0 top-12 rotate-[] z-10 shadow-xl"
          />
        </div>
      </div>

      {/* Feature Sections */}
      <div className="bg-[#F4F1E7] text-[#665740] py-16 px-4">
        <div className="container mx-auto flex flex-col gap-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Media Column */}
              <div className="md:w-1/2 w-full">
                {feature.video ? (
                  <video
                    src={feature.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-2xl shadow-lg w-full max-w-[250px] h-auto mx-auto"
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-xl w-full max-w-[250px] mx-auto"
                  />
                )}
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
