import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Purchase() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalClosing, setIsModalClosing] = useState(false);

    const products = [
        {
            id: 1,
            name: "Basic Energy Manager",
            price: "$199",
            description: "Our Basic Energy Manager is perfect for homeowners looking to begin their energy-saving journey. This entry-level solution provides fundamental monitoring capabilities with easy-to-understand insights.",
            features: [
                "Energy-efficient technology",
                "24/7 customer support",
                "Easy setup process"
            ],
            images: [1, 2, 3, 4], // Placeholders for image IDs
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            id: 2,
            name: "Professional Energy Manager",
            price: "$349",
            description: "The Professional Energy Manager offers advanced capabilities for those serious about optimizing their energy usage. With detailed analytics and customization options, it's the perfect solution for energy-conscious professionals.",
            features: [
                "Advanced analytics tools",
                "Priority support access",
                "Customizable settings",
                "Multi-device compatibility"
            ],
            images: [1, 2, 3, 4], // Placeholders for image IDs
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                </svg>
            )
        }
    ];

    const openModal = (product) => {
        setIsModalClosing(false);
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setSelectedProduct(null);
            setIsModalClosing(false);
        }, 300); // Match this with the exit animation duration
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProduct) {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProduct) {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
            );
        }
    };

    const goToImage = (index, e) => {
        e.stopPropagation();
        setCurrentImageIndex(index);
    };

    // Light pink color: #EBA3A4
    // Darker version for hover: #D48485 (about 15% darker)

    return (
        <section className="text-center max-w-6xl mx-auto px-4">
            <p className="text-center text-[#665740] mb-2">
                Affordable
            </p>
            <h2 className='text-center text-[#665740] mb-2 text-4xl font-bold' >
                Our Products
            </h2>
            <p className="text-center text-[#665740] mb-2">
                Choose the product that fits your needs best.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
                {products.map((product) => (
                    <div key={product.id} className="border border-gray-300 p-6 flex-1 relative">
                        <div className="bg-gray-100 h-48 mb-6 flex items-center justify-center">
                            <div className="bg-gray-200 w-24 h-24 flex items-center justify-center">
                                {product.icon}
                            </div>
                        </div>
                        
                        <h3 className="font-medium text-xl mb-2 text-[#665740]">
                            {product.name}
                        </h3>
                        <p className="text-3xl font-bold mb-4 text-[#665740]">
                            {product.price}
                        </p>
                        
                        <div className="text-left mb-16">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#665740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <p className="text-[#665740]">{feature}</p>
                                </div>
                            ))}
                        </div>
                        
                        <motion.button 
                            className="py-3 text-white w-1xs absolute bottom-6 px-6 mx-auto cursor-pointer bg-[#EBA3A4] hover:bg-[#D48485]"
                            style={{ left: "50%", transform: "translate(-50%, 0)" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isModalClosing) {
                                    openModal(product);
                                }
                            }}
                            disabled={isModalClosing}
                        >
                            Buy now
                        </motion.button>
                    </div>
                ))}
            </div>

            {/* Modal with pointer-events-none during exit animation */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div 
                        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isModalClosing ? 'pointer-events-none' : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div 
                            className="bg-white p-8 rounded-lg max-w-4xl mx-4 relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeModal();
                                }}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Carousel */}
                                <div className="relative overflow-hidden h-64 bg-gray-100 rounded-lg">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            className="absolute inset-0 flex items-center justify-center"
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                                                <p className="text-gray-600">Image {currentImageIndex + 1}</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                    
                                    <button 
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                                        onClick={prevImage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    
                                    <button 
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                                        onClick={nextImage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                    
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
                                        {selectedProduct.images.map((_, index) => (
                                            <button 
                                                key={index} 
                                                className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                                                onClick={(e) => goToImage(index, e)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Product info */}
                                <div className="text-left">
                                    <h2 className="text-2xl font-bold mb-2 text-[#665740]">
                                        {selectedProduct.name}
                                    </h2>
                                    <p className="text-3xl font-bold mb-4 text-[#665740]">
                                        {selectedProduct.price}
                                    </p>
                                    
                                    <p className="mb-4 text-gray-700">
                                        {selectedProduct.description}
                                    </p>
                                    
                                    <div className="mb-6">
                                        <h3 className="font-bold mb-2 text-[#665740]">Key Features:</h3>
                                        {selectedProduct.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2 mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#665740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                                                    <path d="M20 6 9 17l-5-5" />
                                                </svg>
                                                <p className="text-[#665740]">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h3 className="font-bold mb-2 text-[#665740]">Technical Specifications:</h3>
                                        <ul className="text-gray-700 list-disc list-inside space-y-1">
                                            <li>Power: 5W (standby) / 15W (active)</li>
                                            <li>Connectivity: WiFi, Bluetooth</li>
                                            <li>Dimensions: 12 x 8 x 3 cm</li>
                                            <li>Warranty: 2 years</li>
                                        </ul>
                                    </div>
                                    
                                    <motion.button 
                                        whileHover={{ 
                                            backgroundColor: '#D48485',
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="py-3 px-8 text-white rounded"
                                        style={{ backgroundColor: '#EBA3A4' }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}