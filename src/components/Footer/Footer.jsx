import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] flex flex-col items-center p-5 md:p-10 pt-15 text-center space-y-8'>
            <div className='space-y-3'>
                <h2 className='text-4xl md:text-6xl font-bold text-white'>KeenKeeper</h2>
                <p className='text-white/70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div className='space-y-3'>
                <h5 className='text-white'>Social Links</h5>
                <div className='flex gap-5'>
                    <Image src={'/assets/images/instagram.png'} alt='instagram' width={50} height={50}></Image>
                    <Image src={'/assets/images/facebook.png'} alt='instagram' width={50} height={50}></Image>
                    <Image src={'/assets/images/twitter.png'} alt='instagram' width={50} height={50}></Image>
                </div>
            </div>
            <p className='border border-b border-gray-500 container w-full '></p>
            <div className='container flex flex-col-reverse md:flex-row md:justify-between items-center w-full text-white'>
                <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                <div className='flex justify-between my-5 gap-10 whitespace-nowrap'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;