import React from "react";
import { useNavigate } from "react-router-dom"; 

import productImg from '../../../assets/SmartPlug1000_1000_upscaled.png'

export default function KnowMore() {

    const navigate = useNavigate()

    const features = [
        "Real-time energy tracking: Gain complete visibility over your power consumption.",
        "Personalized recommendations: Optimize your usage with AI-driven insights.",
        "Easy installation: A simple plug-in device—no infrastructure changes needed.",
        "Cost savings & sustainability: Reduce bills while making eco-friendly choices.",
        "Future-ready: Automation features planned for smarter homes.",
    ];

    return (
        <div className="min-h-screen py-16 px-4 bg-white">
            <div className="container mx-auto flex justify-center items-center">
                <div className="pr-12">
                    <div className="max-w-7xl mb-12 flex gap-8 items-center justify-center mb-32">
                        <div className="know-more-header-content flex flex-col gap-10">
                            <h2 className="text-4xl font-bold mb-6 text-[#675941]">
                                So What Exactly Do We Do?
                            </h2>
                            <p className="text-lg text-[#675941]">
                                Novalume is a revolutionary smart energy solution that bridges
                                the gap between technology and sustainable living. With our
                                plug-in device and mobile application, users can monitor their
                                household energy consumption in real-time, receive personalized
                                recommendations, and take actionable steps toward efficiency and
                                savings. Unlike traditional smart meters, our non-intrusive
                                device seamlessly integrates into existing electrical setups
                                without the need for costly replacements.
                            </p>
                            <button className="bg-[#EBA2A3] hover:bg-[#d88b8c] text-white font-medium py-2 px-6 rounded-full transition max-w-3xs"
                                onClick={()=>{
                                    navigate("/tech-breakdown")
                                }}
                            >
                                Get a Tech Breakdown
                            </button>
                        </div>
                        <img className="w-1/2" src="https://placehold.co/600x400" alt="" />
                    </div>

                    <div className="max-w-7xl mb-12 flex gap-20 items-center justify-center mb-32">
                        <img className="w-1/2 cursor-pointer hover:scale-[1.1] hover:drop-shadow-[0_0_15px_#EBA3A4] transition duration-300 " src={productImg} alt="" />
                        <div className="features-list">
                            <h2 className="text-4xl font-bold mb-6 text-[#675941]">
                                Why Choose Novalume?
                            </h2>
                            <ul className="space-y-4 text-lg text-[#675941]">
                                {features.map((feature, index) => (
                                    <li 
                                        className="flex items-center"
                                        key={index}
                                    >
                                        <span className="text-3xl mr-2 text-[#675941]">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
