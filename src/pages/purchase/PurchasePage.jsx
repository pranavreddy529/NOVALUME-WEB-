import React from 'react';
import HeroPurchase from './components/HeroPurchase';
import LearnMorePurchase from './components/LearnMorePurchase';
import Purchase from './components/Purchase';

export default function PurchasePage() {
return (
    <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-16 pb-8 font-sans w-full">
            <HeroPurchase />
            <div className="w-full flex justify-center mt-20 mb-20">
                <LearnMorePurchase />
            </div>
            <Purchase />        
        </div>
    </div>

);
}