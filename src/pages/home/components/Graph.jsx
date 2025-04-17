import React from 'react'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  

const data = [   
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },   
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },   
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },   
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },   
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },   
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },   
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }, 
];  

export default function Graph(props) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const beforeData = months.map((month, index) => ({
        month,
    cost: 300 + Math.random() * 50
    }));

    const afterData = months.map((month, index) => ({
        month,
        cost: 180 - (index * 5) + (Math.random() * 20)
    }));

    const graphData = {
        data: props.graph === "before" ? beforeData : afterData,
        stroke: props.graph === "before" ? "#665740" : "#EBA3A4",
        dot: props.graph === "before" ? "#EBA3A4" : "#665740"
    }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md w-[750px] h-[400px]" style={{ backgroundColor: '#F5F1E6' }}> 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0DED5" />
            <XAxis dataKey="month" stroke="#665740" />
            <YAxis stroke="#665740" label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft', style: { fill: '#665740' } }} />
            <Tooltip contentStyle={{ backgroundColor: '#F5F1E6', borderColor: '#665740' }} />
            <Line 
              type="monotone" 
              dataKey="cost" 
              stroke={graphData.stroke}
              strokeWidth={3} 
              dot={{ fill: graphData.dot, r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
    </div>
  );
}