import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ComparisonGraph() {
  // Data for both lines
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Combined data with both before and after costs
  const combinedData = months.map((month, index) => ({
    month,
    beforeCost: 300 + Math.random() * 50,
    afterCost: 180 - (index * 5) + (Math.random() * 20)
  }));

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md w-[750px] h-[400px]" style={{ backgroundColor: '#F5F1E6' }}>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={combinedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0DED5" />
          <XAxis dataKey="month" stroke="#665740" />
          <YAxis stroke="#665740" label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft', style: { fill: '#665740' } }} />
          <Tooltip contentStyle={{ backgroundColor: '#F5F1E6', borderColor: '#665740' }} />
          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="circle"
            iconSize={12}
            wrapperStyle={{ color: '#665740' }}
          />
          <Line 
            name="Before Novalume" 
            type="monotone" 
            dataKey="beforeCost" 
            stroke="#EBA3A4" 
            strokeWidth={3} 
            dot={{ fill: '#EBA3A4', r: 6 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            name="After Novalume" 
            type="monotone" 
            dataKey="afterCost" 
            stroke="#665740" 
            strokeWidth={3} 
            dot={{ fill: '#665740', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}