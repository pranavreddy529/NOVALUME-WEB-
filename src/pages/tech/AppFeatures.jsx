import React from 'react';

export default function AppFeatures(){
    return (
        <div className="min-h-screen" style={{backgroundColor: 'white'}}>
            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div>
                    <h1 className="text-5xl font-bold mb-6" style={{color: '#665740'}}>
                        Discover the innovative embedded system powering Novalume's energy-saving solutions.
                    </h1>
                    <p className="text-lg mb-6" style={{color: '#665740'}}>
                        At the heart of Novalume's devices is a cutting-edge embedded system that integrates our proprietary machine learning model. This technology optimizes energy consumption, ensuring you save power while enhancing your home's efficiency.
                    </p>
                </div>

                {/* Right Column */}
                <div className="bg-white h-96 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                    </svg>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col gap-8">
                    {[
                        {
                            title: "Live Energy Monitoring",
                            description: "Track your real-time electricity consumption and understand how different appliances impact your usage."
                        },
                        {
                            title: "Smart Insights & Recommendations",
                            description: "Receive AI-driven recommendations tailored to help you optimize energy consumption and lower bills."
                        },
                        {
                            title: "User-Friendly Dashboard",
                            description: "A sleek, intuitive interface providing historical trends, comparisons, and usage breakdowns."
                        },
                        {
                            title: "Custom Alerts & Notifications",
                            description: "Get instant alerts on unusual consumption patterns, ensuring energy efficiency at all times."
                        },
                        {
                            title: "Community Energy Benchmarking",
                            description: "Compare your household’s efficiency with others on the app, encouraging smarter energy habits."
                        },
                        {
                            title: "Forecast Monthly Bills",
                            description: "Stay ahead of your expenses with AI-powered monthly bill predictions based on your current usage trends. Plan your budget effectively and avoid bill surprises."
                        },
                        {
                            title: "Solar Integration & Future Automation",
                            description: "Seamlessly integrates with solar power data for a holistic approach to energy management. Future updates will include automation for enhanced efficiency."
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-lg w-"
                            style={{
                                backgroundColor: '#F5F1E6',
                                color: '#665740'
                            }}
                        >
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
