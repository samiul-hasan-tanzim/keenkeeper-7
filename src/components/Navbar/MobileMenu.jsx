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

            <div className={`absolute duration-500 ease-in-out ${menu ? '-left-23 top-10' : 'left-9 top-10'}`}>
                {
                    navLinks.map((navLink, i) => <NavLinks key={i} navLink={navLink} />)
                }
            </div>
        </div>
    );
};

export default MobileMenu;