import React from 'react';
import { GoPlus } from 'react-icons/go';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center space-y-5 mt-10 py-10'>
            <h2 className='text-[25px] md:text-5xl'>Friends to keep close in your life</h2>
            <p className='w-90 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><GoPlus size={20} /> Add a Friend</button>
        </div>
    );
};

export default Hero;