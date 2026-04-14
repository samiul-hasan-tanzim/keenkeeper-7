import React from 'react';
import NavLinks from './NavLinks';
import { RiHome2Line } from 'react-icons/ri';
import { CiTimer } from 'react-icons/ci';
import { VscGraphLine } from 'react-icons/vsc';
import MobileMenu from './MobileMenu';

const Navbar = () => {

    const navLinks = [
        {
            name: "Home",
            href: "/",
            icon: <RiHome2Line />
        },
        {
            name: "Timeline",
            href: "/timeline",
            icon: <CiTimer />
        },
        {
            name: "Stats",
            href: "/stats",
            icon: <VscGraphLine />
        }
    ];


    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <h2 className="font-bold text-lg md:text-xl"><span className='text-[#244D3F]'>Keen</span><span className='text-[1F2937] font-semibold'>Keeper</span> </h2>
                </div>
                <div className="hidden md:flex gap-3">
                    {
                        navLinks.map((navLink, i) => <NavLinks key={i} navLink={navLink} />)
                    }
                </div>
                <div className="md:hidden gap-5">
                    <MobileMenu navLinks={navLinks} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;