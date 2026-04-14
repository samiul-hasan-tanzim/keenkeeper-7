'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ navLink }) => {
    const pathName = usePathname()
    const defaultBtn = 'px-5 py-2 rounded-sm btn btn-soft w-30 md:w-fit '
    const activeBtn = 'bg-[#244D3F] text-white px-5 py-2 rounded-sm'

    return (
        <div className='my-1 md:my-0'>
            <Link href={navLink.href} className={`${defaultBtn} ${pathName === `${navLink.href}` && `${activeBtn}`}`}>{navLink.icon} {navLink.name}</Link>
        </div>
    );
};

export default NavLinks;