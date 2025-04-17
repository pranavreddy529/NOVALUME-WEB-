export default function LearnMorePurchase(){
    return (
        <section className="flex justify-between items-center w-7xl">
            <div className="w-1/2 bg-gray-200 h-96 flex items-center justify-center">
            <div className="bg-gray-300 w-24 h-24 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                    </svg>
            </div>
            </div>
            <div className="w-1/2 pl-8">
            <p className="mb-2" style={{ color: '#665740' }}>Illuminate</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#665740' }}>
                    Revolutionizing Energy Efficiency for Your Home
            </h2>
            <p className="mb-6" style={{ color: '#665740' }}>
                    Our innovative power-saving solution harnesses advanced machine learning
                    to optimize energy usage. Experience significant savings while contributing
                    to a sustainable future.
            </p>
            
            <div className="flex gap-16 mb-6">
                    <div className="w-1/2">
                    <h3 className="font-bold mb-2" style={{ color: '#665740' }}>
                            Smart Technology
                    </h3>
                    <p style={{ color: '#665740' }}>
                            Seamlessly integrates with your home for
                            effortless energy management and savings.
                    </p>
                    </div>
                    <div className="w-1/2">
                    <h3 className="font-bold mb-2" style={{ color: '#665740' }}>
                            User-Friendly
                    </h3>
                    <p style={{ color: '#665740' }}>
                            Designed for easy installation and intuitive operation, 
                            making energy efficiency accessible.
                    </p>
                    </div>
            </div>
            
            <div className="flex gap-4">
                    <button
                    className="border border-gray-300 px-6 py-2 hover:bg-gray-50 transition-colors"
                    style={{ color: '#665740' }}
                    >
                    Buy
                    </button>
                    <button
                    className="flex items-center px-6 py-2 hover:bg-gray-50 transition-colors"
                    style={{ color: '#665740' }}
                    >
                    Learn More
                    <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                    </svg>
                    </button>
            </div>
            </div>
        </section>
    )
}