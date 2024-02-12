import React from 'react';
import Link from "next/link";
import SideBar from "@/components/layout/SideBar";
import logo from '@/assets/images/LogoUs.png'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='bg-white text-black flex justify-between items-center py-6 px-8 sm:px-16'>
            <Link href={'/'}><Image src={logo} alt='logo' className='w-32 h-16'/></Link>
            <div className='gap-10 hidden items-center md:flex text-lg'>
                <Link href={'/about'}>ABOUT</Link>
                <Link href={'/services'}>SERVICES</Link>
                <Link href={'/portfolio'}>PORTFOLIO</Link>
                <Link href={'/contact'} className='bg-[#fecc52] py-1 px-5'>CONTACT</Link>
            </div>
            <div className='md:hidden'><SideBar/></div>
        </div>
    );
};

export default Navbar;
