import React from 'react';

export default function TechBreakdown() {
    const technologyCards = [
        {
            title: 'Non-Intrusive Load Monitoring (NILM)',
            description: 'Advanced NILM techniques disaggregate energy consumption data without invasive hardware installations, enabling precise tracking of individual appliance usage.'
        },
        {
            title: 'Optimal Sampling & Processing',
            description: 'Our device captures energy usage patterns at an optimal sampling rate, ensuring accurate consumption analysis while maintaining processing efficiency.'
        },
        {
            title: 'Machine Learning Algorithms',
            description: 'Combining supervised and unsupervised learning to detect power consumption patterns, identify inefficiencies, and provide actionable insights.'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F4F1E7]">
            {/* Hero Section */}
            <main className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-[#675941]">
                        Discover the Innovative Embedded System Powering Novalume's Energy-Saving Solutions
                    </h1>
                    <p className="mb-8 text-[#675941]">
                        At the heart of Novalume's devices is a cutting-edge embedded system that integrates our proprietary machine learning model. This technology optimizes energy consumption, ensuring you save power while enhancing your home's efficiency.
                    </p>
                    <button className="px-6 py-3 rounded-lg hover:opacity-90 bg-[#EBA2A3] text-[#F4F1E7]">
                        Learn More
                    </button>
                </div>
                <div className="rounded-lg flex items-center justify-center p-12 bg-[#C0968B]/20">
                    <div className="w-full h-64 bg-gray-300 rounded flex items-center justify-center text-gray-500">
                        Product Image
                    </div>
                </div>
            </main>

            {/* Technology Section */}
            <section id="how-we-do-it" className="py-16 bg-[#EBA2A3]/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#675941]">
                        How We Do It: Advanced Energy Monitoring Technology
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-[#675941]">
                        Novalume provides an unmatched energy optimization experience without the complexity and cost of full smart meter replacements. Our commitment is to make energy management intuitive and accessible for every household.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {technologyCards.map((card, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg shadow-md bg-[#F4F1E7] text-[#675941]"
                            >
                                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12"></div>
                </div>
            </section>
        </div>
    );
}
