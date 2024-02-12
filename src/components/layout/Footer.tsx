import React from 'react';
import {Facebook, Insta, YouTube} from "@/assets/icons/Icons";
import Image from "next/image";
import logo from '@/assets/images/LogoUs.png'

const Footer = () => {
    return (
        <div className='bg-white text-black'>
            <div className=' flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between lg:items-center px-8 sm:px-16'>
                <Image src={logo} alt='logo' className='w-60 h-40'/>
                <div>
                    <p className='text-xl mb-2'>EXPLORE ALL</p>
                    <ul className='text-4xl flex flex-col gap-3'>
                        <li className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Handrails</li>
                        <li className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Railings</li>
                        <li className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Staircases</li>
                        <li className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Window Guards</li>
                        <li className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Gates</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl'>LETS TALK!</p>
                    <p className='text-xl lg:text-4xl'>usmetalservices@gmail.com</p>
                    <p className='text-xl lg:text-4xl mt-2'>+1 (224) 354-2494</p>
                    <p className='text-xl mt-5'>FOLLOW US</p>
                    <div className='flex gap-5 mt-5'>
                        <Insta/>
                        <Facebook/>
                        <YouTube/>
                    </div>
                </div>
            </div>
            <hr className='mx-8 sm:mx-16 border-black border-2 my-10'/>
            <div className='flex flex-col w-full justify-center items-center mb-10'>
                <p>© Copyright 2024 All Right Reserved</p>
                <p>Proudly powered by Saliev Meerbek</p>
            </div>
        </div>
    );
};

export default Footer;
