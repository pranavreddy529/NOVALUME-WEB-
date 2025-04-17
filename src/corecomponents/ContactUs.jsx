import React, { useState } from 'react';
import { Calendar, Clock, UserCheck } from 'lucide-react';

const CalendlyBookingComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCalendlyModal = () => {
    window.open('https://calendly.com/advitashrivastava09/novalume-consultations', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto p-6 bg-[#F4F1E7] shadow-lg rounded-xl mt-20">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#675341] mb-4">Book a Meeting </h2>
            <p className="text-[#CD968B] mb-6">
            Choose a convenient time to connect with our team.
            </p>
        </div>

        <div className="space-y-4">
            <div className="flex items-center bg-[#EBA2A3] bg-opacity-20 p-4 rounded-lg">
            <Calendar className="text-[#EBA2A3] mr-4" size={24} />
            <div>
                <h3 className="font-semibold text-[#675341]">Flexible Scheduling</h3>
                <p className="text-[#fff] text-sm">Choose from available time slots</p>
            </div>
            </div>

            <div className="flex items-center bg-[#CD968B] bg-opacity-20 p-4 rounded-lg">
            <Clock className="text-[#CD968B] mr-4" size={24} />
            <div>
                <h3 className="font-semibold text-[#675341]">Time Zone Adaptive</h3>
                <p className="text-[#fff] text-sm">Automatically adjusts to your local time</p>
            </div>
            </div>

            <div className="flex items-center bg-[#AF8D7E] bg-opacity-20 p-4 rounded-lg">
            <UserCheck className="text-[#AF8D7E] mr-4" size={24} />
            <div>
                <h3 className="font-semibold text-[#675341]">Quick Confirmation</h3>
                <p className="text-[#fff] text-sm">Instant booking and email confirmation</p>
            </div>
            </div>
        </div>

        <button 
            onClick={openCalendlyModal}
            className="w-full mt-6 bg-[#675341] text-[#F4F1E7] py-3 rounded-lg hover:bg-[#AF8D7E] 
                    transition duration-300 ease-in-out transform hover:scale-102 
                    focus:outline-none focus:ring-2 focus:ring-[#CD968B] focus:ring-opacity-50"
        >
            Schedule a Meeting
        </button>
        </div>
        <p className='mt-5 mb-20 text-[#CD968B]'>Powered By Calendly</p>
    </div>
  );
};

export default CalendlyBookingComponent;
