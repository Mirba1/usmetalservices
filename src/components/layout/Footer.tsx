import React from 'react';
import {Facebook, Insta, YouTube} from "@/assets/icons/Icons";
import Image from "next/image";
import logo from '@/assets/images/Logo copy.webp'
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-white text-black'>
            {/*<hr className='border-2 border-black mx-8 sm:mx-16 mb-5'/>*/}
            <div className=' flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between lg:items-center px-8 sm:px-16'>
                <Image src={logo} alt='logo' loading={"lazy"} fetchPriority={"low"} width={240} height={160}/>
                <div>
                    <p className='text-xl mb-2'>EXPLORE ALL</p>
                    <ul className='text-4xl flex flex-col gap-3'>
                        <Link href={'/services'} className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Handrails</Link>
                        <Link href={'/services'} className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Railings</Link>
                        <Link href={'/services'} className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Staircases</Link>
                        <Link href={'/services'} className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Window Guards</Link>
                        <Link href={'/services'} className='border-t-2 border-black hover:border-[#fecc52] hover:text-[#fecc52]'>Gates</Link>
                    </ul>
                </div>
                <div className='text-xl lg:text-4xl'>
                    <p className='text-xl'>LETS TALK!</p>
                    <p>usmetalservices@gmail.com</p>
                    <p className='text-xl lg:text-4xl mt-2'>+1 (224) 354-2494</p>
                    <p className='text-xl mt-5'>FOLLOW US</p>
                    <div className='flex gap-5 mt-5'>
                        <a href='https://www.instagram.com/usmetalservicesinc/'><Insta/></a>
                        <Facebook/>
                        <YouTube/>
                    </div>
                </div>
            </div>
            <hr className='mx-8 sm:mx-16 border-black border-2 my-10'/>
            <div className='flex flex-col w-full justify-center items-center mb-10'>
                <p>© Copyright 2024 All Right Reserved</p>
                <p>Proudly powered by <a href='https://salievmeerbek.com/'><span className='font-bold text-xl'>Saliev Meerbek</span></a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
