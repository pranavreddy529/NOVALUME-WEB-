import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const newsArticles = [
  {
    title: "New Breakthrough in Renewable Energy!",
    desc: "Scientists have developed a groundbreaking technology that could revolutionize solar power.",
    imageURL: "https://via.placeholder.com/800x400", // Replace with actual image URL
    newsUrl: "https://example.com/news1",
    sourceName: "Energy Times",
  },
  {
    title: "AI-Powered Smart Grids on the Rise",
    desc: "The latest AI advancements are optimizing energy consumption worldwide.",
    imageURL: "https://via.placeholder.com/800x400",
    newsUrl: "https://example.com/news2",
    sourceName: "Tech Daily",
  },
  {
    title: "Government Pushes for Green Policies",
    desc: "New policies are encouraging businesses to adopt eco-friendly solutions.",
    imageURL: "https://via.placeholder.com/800x400",
    newsUrl: "https://example.com/news3",
    sourceName: "Global News",
  },
];

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsArticles.length - 1 : prevIndex - 1));
  };

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsArticles.length - 1 ? 0 : prevIndex + 1));
  };

  const { title, desc, imageURL, newsUrl, sourceName } = newsArticles[currentIndex];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#F4F1E7] p-6">
      {/* Ensure Only One Article is Rendered */}
      <div className="w-full max-w-4xl bg-white text-[#675941] rounded-2xl shadow-lg overflow-hidden border border-[#CD968B]">
        <img src={imageURL} alt="News" className="w-full h-96 object-cover" />
        <div className="p-6 text-center">
          <h5 className="text-2xl font-bold text-[#675941]">{title}</h5>
          <p className="text-md text-[#AF8A7E] font-semibold text-right">- {sourceName}</p>
          <p className="text-lg mt-4 text-[#675941]">{desc}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-[#EBA2A3] text-white rounded-lg hover:bg-[#CD968B] transition"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevArticle}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#EBA2A3] p-3 rounded-full shadow-lg hover:bg-[#CD968B] transition"
      >
        <FaArrowLeft className="text-white text-2xl" />
      </button>
      <button
        onClick={nextArticle}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#EBA2A3] p-3 rounded-full shadow-lg hover:bg-[#CD968B] transition"
      >
        <FaArrowRight className="text-white text-2xl" />
      </button>
    </div>
  );
}
