import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqs = [
        {
            question: "How does Novalume work?",
            answer: "Our plug-in device monitors your overall household energy usage in real-time and provides personalized recommendations through our app to help you reduce costs and improve efficiency."
        },
        {
            question: "Do I need to replace my existing electricity meter?",
            answer: "No, Novalume is a non-intrusive solution that works with your current electrical setup. There's no need for a meter replacement or major installation changes."
        },
        {
            question: "What kind of insights does Novalume provide?",
            answer: "The app offers real-time energy tracking, smart recommendations, cost-saving tips, consumption alerts, and monthly bill forecasts."
        },
        {
            question: "Is it difficult to install the device?",
            answer: "Not at all! The device is designed for easy plug-and-play installation. Simply connect it to your power system, and it starts tracking immediately."
        },
        {
            question: "Can Novalume integrate with solar panels?",
            answer: "Yes, our system supports solar energy data integration, allowing users to optimize solar usage alongside regular electricity consumption."
        },
        {
            question: "How does Novalume help me save money?",
            answer: "By analyzing your energy usage patterns, the app provides insights and recommendations to reduce wastage, lower bills, and improve efficiency."
        },
        {
            question: "Is my data secure with Novalume?",
            answer: "Absolutely. We prioritize user privacy and ensure that all data is securely processed and stored."
        },
        {
            question: "How do I get started with Novalume?",
            answer: "Simply purchase the device, download the Novalume app, and follow the setup instructions. You'll be tracking your energy usage in no time!"
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F1E7]">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-[#675941]">
                    Novalume FAQ
                </h1>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border rounded-lg overflow-hidden shadow-sm ${
                                activeQuestion === index ? 'bg-[#EBA2A3]' : 'bg-[#F4F1E7]'
                            } border-[#EBA2A3]`}
                        >
                            <div 
                                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                                className="p-4 cursor-pointer flex justify-between items-center text-[#675941]"
                            >
                                <h2 className="text-lg font-semibold">{faq.question}</h2>
                                <span className="text-xl">
                                    {activeQuestion === index ? '−' : '+'}
                                </span>
                            </div>
                            
                            {activeQuestion === index && (
                                <motion.div 
                                    className="p-4 border-t bg-[#F4F1E7] border-[#EBA2A3] text-[#675941]"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 1}}
                                >
                                    <p>{faq.answer}</p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
