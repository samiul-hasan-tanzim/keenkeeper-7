import React from 'react';
import { TbPhoneCall } from 'react-icons/tb';

const TimelinePage = () => {
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
                    <div className='flex items-center gap-3 bg-white shadow rounded p-3'>
                        <TbPhoneCall size={20} />
                        <div>
                            <p><span>Text</span> with Arif Rahman</p>
                            <p>March 30, 2026</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 bg-white shadow rounded p-3'>
                        <TbPhoneCall size={20} />
                        <div>
                            <p><span>Text</span> with Arif Rahman</p>
                            <p>March 30, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;