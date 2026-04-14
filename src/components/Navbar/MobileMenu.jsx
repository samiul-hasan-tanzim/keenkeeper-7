"use client"
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import NavLinks from './NavLinks';
import { IoMdCloseCircle } from 'react-icons/io';

const MobileMenu = ({ navLinks }) => {
    const [menu, setMenu] = useState(false)

    return (
        <div className='relative'>
            <div onClick={() => setMenu(!menu)}>
                {
                    menu ? <IoMdCloseCircle size={25} /> : <HiMenuAlt3 size={25} />
                }
            </div>

            <div
                className={`
      absolute top-10 right-0 transition-all duration-300
      ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-2 pointer-events-none'}
    `}
            >
                {
                    navLinks.map((navLink, i) => (
                        <NavLinks key={i} navLink={navLink} />
                    ))
                }
            </div>
        </div>
    );
};

export default MobileMenu;