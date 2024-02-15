import React from 'react';
import Link from "next/link";
import logo from '@/assets/images/Logo copy.webp'
import Image from "next/image";
import dynamic from "next/dynamic";

const SideBar = dynamic(()=>import("@/components/layout/SideBar"))

const Navbar = () => {
    return (
        <div className='bg-white text-black flex justify-between items-center py-6 px-8 sm:px-16'>
            <Link prefetch={true}  href={'/'}><Image src={logo}  alt='logo' loading={"eager"} fetchPriority={"high"} width={128} height={64}/></Link>
            <div className='gap-10 hidden items-center md:flex text-lg'>
                <Link prefetch={true}  href={'/about'}>ABOUT</Link>
                <Link prefetch={true}  href={'/services'}>SERVICES</Link>
                <Link prefetch={true}  href={'/portfolio'}>PORTFOLIO</Link>
                <Link prefetch={true}  href={'/contact'} className='bg-[#fecc52] py-1 px-5'>CONTACT</Link>
            </div>
            <div className='md:hidden'><SideBar/></div>
        </div>
    );
};

export default Navbar;
