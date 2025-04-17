import { useEffect, useRef } from "react";

export default function MarqueeSection() {
  const logos = [
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
    "https://sense.com/wp-content/uploads/2024/06/smartEn.svg",
  ];

  return (
    <div className="overflow-hidden py-12 bg-white px-6 lg:px-20">
      {/* Heading aligned left */}
      <div className="mb-8 text-left">
        <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-wide mb-2">
          Backed By
        </h2>
        <div className="w-20 h-1 bg-[#AF8A7E] rounded-full" />
      </div>

      {/* Marquee */}
      <div className="relative flex whitespace-nowrap">
        <ul className="flex items-center gap-12 animate-marquee">
          {[...logos, ...logos].map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <img className="w-48 h-auto" src={src} alt={`logo-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
