'use client'
import { ActionContext } from '@/context/context';
import React, { useContext, useState } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { TbPhoneCall } from 'react-icons/tb';

const TimelinePage = () => {
    const [filter, setFilter] = useState('all');
    const { actions, calls, texts, videos } = useContext(ActionContext);
    console.log(calls)

    let filteredDara = []
    if (filter === 'all') {
        filteredDara = actions;
    }
    else if (filter === 'text') {
        filteredDara = texts;
    }
    else if (filter === 'call') {
        filteredDara = calls;
    }
    else if (filter === 'video') {
        filteredDara = videos;
    }


    return (
        <div className='bg-[#F8FAFC] p-5'>
            <div className='container mx-auto mt-10 space-y-5 '>
                <h2 className='text-4xl font-bold'>Timeline</h2>
                <div className='flex gap-5'>
                    <label className="label">Filter Timeline</label>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select">
                        <option value="all">All</option>
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                <div className='space-y-5'>

                    {/* {
                        actions.map(action => console.log(action))
                    } */}

                    {
                        actions.length > 0 ? (
                            filteredDara.map((action, i) => (
                                <div key={i} className='flex items-center gap-3 bg-white shadow rounded p-3'>
                                    <div>
                                        {
                                            action.type === 'text' && <LuMessageSquareMore size={20} /> ||
                                            action.type === 'call' && <TbPhoneCall size={20} /> ||
                                            action.type === 'video' && <IoVideocamOutline size={20} />
                                        }
                                    </div>
                                    <div>
                                        <p>
                                            <span>
                                                {
                                                    action.type === 'text' && 'Text ' ||
                                                    action.type === 'call' && 'Call ' ||
                                                    action.type === 'video' && 'Video '
                                                }
                                            </span>
                                            {action.name}
                                        </p>
                                        <p>March 30, 2026</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            (
                                <div className="flex flex-col justify-center bg-white p-5 rounded shadow text-center text-gray-500 min-h-[50vh]">
                                    <p className="text-lg font-medium">No data found</p>
                                    <p className="text-sm">Try changing the filter option</p>
                                </div>
                            )
                        )
                    }

                    {/* <div className='flex items-center gap-3 bg-white shadow rounded p-3'>
                        <TbPhoneCall size={20} />
                        <div>
                            <p><span>Text</span> with Arif Rahman</p>
                            <p>March 30, 2026</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;