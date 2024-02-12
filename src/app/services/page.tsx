import Link from "next/link";
import Image from "next/image";

import firstImage from '@/assets/images/modern-stairs.jpg'
import stairsBottom from "@/assets/images/stairsContact.jpeg";
import React from "react";
import welding from "@/assets/images/welding-2262745_1280.jpg";
function ServicesPage() {
    return (
        <div className='mb-20'>
            <div className='py-40 font-semibold text-7xl justify-center flex text-[#fecc52]'>
                Services
            </div>
            <div className='flex flex-col gap-20'>
                <ul className='flex justify-around flex-col md:flex-row items-center gap-5'>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                </ul>
                <ul className='flex justify-around flex-col md:flex-row items-center gap-5'>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                    <li className='flex flex-col gap-5 w-80 justify-center items-center'>
                        <Image src={firstImage} alt='service Image' className='w-60 h-60 md:w-80 md:h-80 rounded-3xl'/>
                        <p className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>STAIRCASE
                            DESIGN</p>
                        <p className='mx-2 text-center'>Custom stairs made just for your home. Theyʼre safe and look
                            amazing!</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>Talk to
                            specialist {'>'}</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center my-40 bg-[#fecc52]">
                <div className="flex flex-col w-auto md:w-[50%]  items-center justify-center p-10">
                    <h1 className="text-5xl font-bold mb-4">Talk to Our Team!</h1>
                    <p className="text-xl  mb-6 text-center">
                        Got questions? Want a free quote? Our friendly experts are here to help you get what you need.
                        Reach out now and letʼs make your space safer and stylish!
                    </p>
                    <button className="bg-[#fecc52] hover:bg-black hover:text-white border-white border-2 text-black py-2 px-4">
                        VALUE PROMISE
                    </button>
                </div>
                <div className="flex-1 ">
                    <Image src={welding} alt="House" className="object-cover w-auto h-96"/>
                </div>
            </div>

        </div>
    );
}

export default ServicesPage;
