'use client'
import { ActionContext } from '@/context/context';
import React, { useContext } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { TbPhoneCall } from 'react-icons/tb';

const TimelinePage = () => {
    const { actions } = useContext(ActionContext);
    // console.log(actions)

    return (
        <div className='bg-[#F8FAFC] p-5'>
            <div className='container mx-auto mt-10 space-y-5 '>
                <h2 className='text-4xl font-bold'>Timeline</h2>
                <div>
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Filter Timeline</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                </div>
                <div className='space-y-5'>

                    {
                        actions.map(action => console.log(action))
                    }

                    {
                        actions.map((action, i) => (
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