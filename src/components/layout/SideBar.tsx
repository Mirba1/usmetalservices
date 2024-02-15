'use client'
import React, {useEffect, useState} from 'react';
import {MenuIcon, CloseIcon} from "@/assets/icons/Icons";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/Logo copy.webp"
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const path = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [path]);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }

        // Optional: Clean up function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove('active-modal');
        };
    }, [isOpen]); // The effect depends on `isOpen`
    return (
        <div>
            <MenuIcon onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen &&
                <div className='absolute z-40 top-0 right-0 h-full w-full bg-white'>
                    <CloseIcon onClick={()=>setIsOpen(false)} className='relative left-[86%] top-6'/>
                    <div className='flex flex-col justify-center items-center '>
                        <Image src={logo} alt='USA metal services' width={200} height={200}/>
                        <ul className=' flex flex-col justify-center items-center text-3xl mt-20 gap-7'>
                            <Link href={'/about'}>ABOUT</Link>
                            <Link href={'/services'}>SERVICES</Link>
                            <Link href={'/portfolio'}>PORTFOLIO</Link>
                            <Link href={'/contact'} className='bg-[#fecc52] py-1 px-5'>CONTACT</Link>
                        </ul>
                        <div className='flex flex-col w-full justify-center items-center absolute bottom-0 text-lg text-center'>
                            <p>© Copyright 2024 All Right Reserved</p>
                            <p>Proudly powered by <a href='https://salievmeerbek.com/'><span className='font-bold text-xl'>Saliev Meerbek</span></a></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SideBar;
