'use client'
import React, {useEffect, useState} from 'react';
import {MenuIcon, CloseIcon} from "@/assets/icons/Icons";
import Link from "next/link";
import {usePathname} from "next/navigation";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const path = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [path]);

    return (
        <div>
            <MenuIcon onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen &&
                <div className='absolute z-40 top-0 right-0 h-full w-full bg-black'>
                    <CloseIcon onClick={()=>setIsOpen(false)} className='relative left-[86%] top-6'/>
                    <div>
                        <ul className='text-white flex flex-col justify-center items-center text-3xl mt-20 gap-7'>
                            <Link href={'/about'}>ABOUT</Link>
                            <Link href={'/services'}>SERVICES</Link>
                            <Link href={'/portfolio'}>PORTFOLIO</Link>
                            <Link href={'/contact'} className='bg-[#fecc52] py-1 px-5'>CONTACT</Link>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default SideBar;
