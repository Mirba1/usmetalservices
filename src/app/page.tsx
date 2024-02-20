import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'; // Import Head for SEO
import dynamic from "next/dynamic";

import bgImage from '@/assets/images/MainPageImage.webp';
import smbgImage from '@/assets/images/smMainImage.jpg';
import {Star} from "@/assets/icons/Icons";
import type {Metadata} from "next";

const OurValuesSection = dynamic(() => import("@/components/common/OurValuesSection"));
const LetsTalkSection = dynamic(() => import("@/components/common/LetsTalkSection"));


export const metadata: Metadata = {
    title: "US Metal services",
    description: "US Metal Services offers custom metalwork solutions for residential and commercial projects. Explore our services for gates, railings, staircases, and more.",
    keywords: "metalwork, custom gates, railings, staircases, metal fabrication, US Metal Services",
};

export default function Home() {
    return (
        <div>
            <div className=' relative bg-black text-white'>
                <Image src={bgImage} alt='Custom-crafted metal staircases and rails' width={1900} height={1000}
                       fetchPriority="high" loading="eager"
                       className='opacity-40 hidden md:block' objectFit="cover" quality={35}/>
                <Image src={smbgImage} alt='Custom-crafted metal staircases and rails' width={800} height={450}
                       fetchPriority="high" loading="eager"
                       className='opacity-40 md:hidden' objectFit="cover" quality={35}/>
                <div
                    className='absolute top-[24%] sm:top-[50%] flex flex-col  items-center w-full gap-1 sm:gap-7  '>
                    <h1 className='font-bold text-center text-sm lg:text-4xl xl:text-8xl'>US METAL WORKS - DREAMS MEET
                        DESIGN</h1>
                    <h1 className='text-[12px] md:text-xl lg:text-2xl text-center'> Transform your space with our
                        bespoke metal staircases, railings, and architectural metalwork.</h1>
                    <Link href={'/contact'} prefetch={true}
                          className='bg-[#fecc52] py-1 px-3 text-black text-sm font-semibold  md:py-3 md:px-7 md:text-xl md:text-black'>
                        GET A QUOTE
                    </Link>
                </div>
            </div>
            <ul className='flex flex-col gap-5 md:flex-row md:py-20 px-8 sm:px-16 justify-around items-center bg-[#f7f8f9]'>
                {[
                    {title: '22 YEARS', subtitle: 'IN THE INDUSTRY'},
                    {title: '7K+', subtitle: 'HAPPY CLIENTS'},
                    {title: '50K+', subtitle: 'METALWORK DESIGNS'},
                ].map((item, index) => (
                    <li key={index} className='text-center hover:text-[#fecc52]'>
                        <p className='text-6xl font-semibold'>{item.title}</p>
                        <p className='text-xl'>{item.subtitle}</p>
                    </li>
                ))}
            </ul>
            <h2
                className='px-8 sm:px-16 mb-10 mt-20 flex flex-col text-center items-center justify-center text-[#737373]'>
                At US Metal Services, we pride ourselves on blending artistry with functionality, creating iron and wood
                masterpieces that ensure safety without sacrificing style. Discover our gallery of elegant, durable
                metalwork designs that redefine homes and commercial spaces alike.
                <br/>Ready to elevate your project? Connect with us today!
            </h2>
            <OurValuesSection/>
            <div className='mt-20 flex flex-col justify-center items-center bg-[#f7f8f9] gap-16 py-5 md:py-20'>
                <p className='text-7xl'>Reviews</p>
                <ul className='flex flex-col items-center justify-around w-full md:flex-row gap-10 text-center'>
                    <li className='flex gap-2 flex-col md:w-80 items-center justify-center text-center h-full'>
                        <Star loading={'lazy'}/>
                        <h3>US Metal Services is fantastic! They made stunning metal railings for my home, and I
                            couldn&apos;t be happier. The craftsmanship is top-notch, and the installation was a breeze.
                            The
                            team is friendly and professional. If you need metal railings, these guys are the best!</h3>
                        <p className='text-2xl font-semibold'>Salimzhan Momunov</p>
                    </li>
                    <li className='flex gap-2 flex-col md:w-[450px] items-center justify-center text-center h-full'>
                        <Star loading={'lazy'}/>
                        <h3>I picked US Metal Services for a metal staircase, and they did an amazing job! They listened
                            to
                            what I wanted, kept me in the loop, and made a staircase that&apos;s not just strong but
                            looks
                            really cool too. They were nice, finished on time, and didn&apos;t cost more than we agreed.
                            If
                            you need a metal staircase, these guys are the way to go!</h3>
                        <p className='text-2xl font-semibold'>Cristina Eni</p>
                    </li>
                    <li className='flex gap-2 flex-col md:w-72 items-center justify-center h-full'>
                        <Star loading={'lazy'}/>
                        <h3>When we wanted custom railings for our home, Michael provided designs that were a perfect
                            mix
                            of
                            classic and contemporary. The installation process was smooth, and the results are stunning.
                            Gj!👍</h3>
                        <p className='text-2xl font-semibold'>Oltean Raul</p>
                    </li>
                </ul>
                <a href='https://www.google.com/search?q=us+metal+services&rlz=1C1VIQF_enUS1082US1082&oq=us+met&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMgYIAhBFGDkyBwgDEAAYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x2235a60d526d5ccd:0x39813c689ce5aac1,1,,,,'
                   className='text-xl'>More reviews ➞</a>
            </div>
            <LetsTalkSection/>
        </div>
    );
}
