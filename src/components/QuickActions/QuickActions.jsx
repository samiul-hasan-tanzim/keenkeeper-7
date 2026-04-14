'use client';

import { TbPhoneCall } from 'react-icons/tb';
import { LuMessageSquareMore } from 'react-icons/lu';
import { IoVideocamOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useState } from 'react';

const QuickActions = ({ name }) => {
    const [call, setCall] = useState('')
    const handelCall = (calls) => {
        setCall(call)
    }

    return (
        <div className='text-center grid grid-cols-2 md:grid-cols-3 gap-5'>
            <div onClick={() => { toast.success(`Call with ${name}`); handelCall('call') }} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <TbPhoneCall size={20} />
                <p>Call</p>
            </div>

            <div onClick={() => toast.success(`Text with ${name}`)} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <LuMessageSquareMore size={20} />
                <p>Text</p>
            </div>

            <div onClick={() => toast.success(`Video with ${name}`)} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <IoVideocamOutline size={20} />
                <p>Video</p>
            </div>
        </div>
    );
};

export default QuickActions;