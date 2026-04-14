'use client'
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const data = [
    { name: 'Text', value: 400, fill: '#0088FE' },
    { name: 'Call', value: 300, fill: '#00C49F' },
    { name: 'Video', value: 300, fill: '#FFBB28' },
];

const StatsPage = () => {
    return (
        <div className='bg-[#F8FAFC] p-5'>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Friendship Analytics</h2>
                <div className='bg-white p-10 shadow rounded mt-5'>
                    <p>By Interaction Type</p>
                    <div className='flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;