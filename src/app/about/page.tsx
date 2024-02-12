import Link from "next/link";
import welding from '@/assets/images/welding-2262745_1280.jpg'
import welding2 from '@/assets/images/weldin2.jpg'
import working from '@/assets/images/working.jpg'
import working2 from '@/assets/images/working2.jpg'
import Image from "next/image";
import bgImage from "@/assets/images/MainPageImage.jpg";
import React from "react";

function AboutPage()  {
    return (
        <div>
            <div className='relative bg-black text-white'>
                <Image src={welding2} alt='main background image' className='h-auto md:h-screen opacity-40'/>
                <div
                    className='absolute top-[40%] sm:top-[50%] flex flex-col items-center justify-center w-full gap-3 sm:gap-7'>
                    <p className='text-2xl md:text-4xl lg:text-8xl'>About us</p>
                    <p className='text-[11px] md:text-xl lg:text-3xl text-center'>We are the architects of precision
                        metalwork, sculpting the<br className='hidden sm:block'/> essence of durability and elegance into the industrial landscape.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-10 px-8 sm:px-16 my-16'>
                <p className='flex justify-center text-6xl font-semibold'>Our Values</p>
                <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                    <div className="flex flex-col w-auto items-center justify-center p-10 md:w-[50%]">
                        <h1 className="text-5xl font-bold mb-4 text-center">Our Promise: Safe<br/> Steps, Stylish Homes
                        </h1>
                        <p className="text-lg mb-6 text-[#737373] text-center">

                            As a local metalworkers company, we are deeply rooted in our community,<br/> valuing the
                            diverse inspirations and influences that surround us. </p>
                    </div>
                    <div className="flex-1 ">
                        <Image src={working} alt="House" className="object-cover w-full h-[500px]"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                    <div className="hidden flex-1 md:block">
                        <Image src={working2} alt="House" className="object-cover w-full h-[500px]"/>
                    </div>
                    <div className="flex flex-col w-auto md:w-[50%] items-center justify-center p-10">
                        <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
                        <p className="text-lg mb-6 text-[#737373] text-center">
                            At US Metal Services, our mission is to celebrate the tradition of metal craftsmanship while
                            pushing the boundaries of design and innovation. Rooted deeply within our local community,
                            we aspire to transform spaces by crafting pieces that not only serve a functional purpose
                            but also narrate stories of artistry, dedication, and precision.
                        </p>
                    </div>
                    <div className="md:hidden flex-1">
                        <Image src={working2} alt="House" className="object-cover w-full h-[500px]"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                    <div className="flex flex-col w-auto md:w-[50%]  items-center justify-center p-10">
                        <h1 className="text-5xl font-bold mb-4">Our Values</h1>
                        <p className="text-xl mb-6 text-[#737373] text-center">
                            We put heart into every piece, ensuring top safety and timeless elegance. Trust us to
                            uplift
                            your
                            home.
                        </p>
                    </div>
                    <div className="flex-1 ">
                        <Image src={welding} alt="House" className="object-cover w-full h-[500px]"/>
                    </div>
                </div>
            </div>
            <div className='bg-[#f7f8f9] flex flex-col items-center justify-center py-16 px-8 sm:px-16 gap-3 mb-10'>
                <p className='text-6xl'>Our Story</p>
                <p className='text-center'>
                    Established in the heart of Chicago, US Metal Services has grown to be more than just a company –
                    it’s a legacy of metal craftsmanship, dedication, and innovation. Since our inception, we’ve set our
                    sights on redefining the boundaries of design and function in the realm of metalwork.
                    Chicago, with its rich architectural history and bustling urban life, has been both our home and our
                    muse. The city’s iconic skyline, diverse neighborhoods, and unique blend of old and new inspire
                    every curve, joint, and weld we make. But our influence doesn’t stop at Chicago’s borders. We’ve
                    expanded our footprint, proudly serving nearby areas and bringing our unparalleled expertise to
                    projects big and small.
                </p>
                <button className="bg-[#fecc52] text-black py-2 px-4">
                    VALUE PROMISE
                </button>
            </div>
        </div>
    );
}

export default AboutPage
