import React from 'react';

export default function HeroPurchase() {
  return (
    <section className="flex items-center h-screen relative">
      <div className="absolute inset-0 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="bg-gray-300 w-24 h-24 flex items-center justify-center"> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg> */}
          {/* </div> */}
        </div>
      </div>
      
      {/* Text content positioned over the background */}
      <div className="pl-40 w-1/3 pr-8 ml-8 relative z-10">
        <h2 className="text-5xl font-bold mb-4" style={{ color: '#665740' }}>
          Novalume Smart Energy Manager
        </h2>
        <p className="mb-6" style={{ color: '#665740' }}>
          Experience advanced power consumption reduction through intelligent AI-driven 
          energy optimization with real-time monitoring and adaptive control systems.
        </p>
        <button 
          className="bg-[#EBA3A4] rounded-2xl px-6 py-2 hover:bg-gray-50 transition-colors"
          style={{ color: 'white' }}
        >
          Buy Product
        </button>
      </div>
    </section>
  );
}