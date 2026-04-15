'use client'
import { ActionContext } from '@/context/context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const { actions, calls, texts, videos } = useContext(ActionContext);
    console.log(calls)
    console.log(texts)
    console.log(videos)

    const data = [
        { name: 'Text', value: texts.length, fill: '#0088FE' },
        { name: 'Call', value: calls.length, fill: '#00C49F' },
        { name: 'Video', value: videos.length, fill: '#FFBB28' },
    ];



    return (
        <div className='bg-[#F8FAFC] p-5  pb-10'>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Friendship Analytics</h2>
                <div className='bg-white p-10 shadow rounded mt-5'>
                    <p>By Interaction Type</p>
                    <div className='flex justify-center'>
                        {
                            actions.length > 0 ? (
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
                            ) : (
                                <div className="flex flex-col justify-center p-5 rounded text-center text-gray-500 min-h-[50vh]">
                                    <p className="text-lg font-medium">No data found</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;