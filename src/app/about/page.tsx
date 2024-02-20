import Link from "next/link";
import welding from '@/assets/images/welding-2262745_1280.webp'
import welding2 from '@/assets/images/weldin2.webp'
import working from '@/assets/images/working.webp'
import working2 from '@/assets/images/working2.webp'
import Image from "next/image";
import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About US Metal Service - Precision & Craftsmanship in Metalwork",
    description: "Discover the artistry behind US Metal Services. Learn about our journey in precision metalwork, our values, mission, and the legacy we're building in the industry.",
    keywords: "about US Metal Services, metalwork craftsmanship, metal services history, metalwork values, metalwork mission",
};
function AboutPage()  {

    return (
        <div>
            <div className='relative bg-black text-white'>
                <Image src={welding2} alt='Craftsmanship in metalwork' loading={"eager"} fetchPriority={"high"}
                       className='opacity-40'/>
                <div
                    className='absolute top-[40%] sm:top-[50%] flex flex-col items-center justify-center w-full gap-3 sm:gap-7'>
                    <h1 className='text-xl lg:text-3xl xl:text-8xl'>ABOUT - US METAL WORKS</h1>
                    <h2 className='text-[11px] lg:text-xl xl:text-3xl text-center'>We are the architects of precision
                        metalwork, sculpting the<br className='hidden sm:block'/> essence of durability and elegance
                        into the industrial landscape.<br/> staircases, rails, gates, window guards.
                    </h2>
                </div>
            </div>
            <section className='flex flex-col gap-10 px-8 sm:px-16 my-16'>
                <h3 className='flex justify-center text-6xl font-semibold'>Our Values</h3>
                <article className="flex flex-col lg:flex-row justify-between items-center bg-white">
                    <div className="flex flex-col w-auto items-center justify-center p-10 md:w-[50%]">
                        <h2 className="text-3xl font-bold mb-4 text-center">Our Promise: Safe<br/> Steps, Stylish Homes
                        </h2>
                        <p className="text-lg mb-6 text-[#737373] text-center">

                            At US Metal Services, based in Illinois, we&apos;re not just metalworkers; we&apos;re architects of secure and beautiful
                            living environments. Our commitment is twofold: to ensure the utmost safety of your spaces and to enhance their aesthetic
                            appeal. By marrying age-old craftsmanship with contemporary design, we craft bespoke staircases, railings, and architectural metal features designed to enrich your home&apos;s
                            character and longevity. Embrace our vision of setting new benchmarks for metalwork excellence in Illinois and beyond.
</p>
                    </div>
                    <div className="flex-1 ">
                        <Image src={working} width={500} loading={"eager"} fetchPriority={"high"} alt="Metalworking in action" height={500}/>
                    </div>
                </article>
                <article className="flex flex-col lg:flex-row justify-between items-center bg-white">
                    <div className="hidden flex-1 lg:block">
                        <Image src={working2} alt="Welding" width={500} loading={"eager"} fetchPriority={"low"} height={500}/>
                    </div>
                    <div className="flex flex-col w-auto md:w-[50%] text-center items-center justify-center p-10">
                        <h2 className="text-3xl font-bold mb-4">Our Mission: Redefining Metal Craftsmanship</h2>
                        <p className="text-lg mb-6 text-[#737373] ">
                            At the heart of US Metal Services lies a commitment to melding traditional metalwork
                            artistry with avant-garde design principles. Our mission transcends mere functionality; we
                            aim to infuse every space with unique narratives, embodying both innovation and the enduring
                            legacy of our craft. By engaging closely with our community, we endeavor to create not just
                            structures, but landmarks of precision and creativity that resonate with the stories of
                            those we serve.
                        </p>
                    </div>
                    <div className="lg:hidden flex-1">
                        <Image src={working2} alt="Metal Welding" width={500} loading={"eager"} fetchPriority={"low"} height={500}/>
                    </div>
                </article>
                <article className="flex flex-col lg:flex-row justify-between items-center bg-white">
                    <div className="flex flex-col w-auto md:w-[50%] text-center  items-center justify-center p-10">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values: Commitment to Excellence in
                            Metalwork</h2>
                        <p className="text-xl mb-6 text-[#737373]">
                            At US Metal Services, we infuse every project with dedication and passion, ensuring
                            unparalleled safety and aesthetic appeal. Our commitment extends beyond just fulfilling
                            requirements; we aim to elevate your space with custom-designed metalworks that reflect
                            sophistication and durability. From bespoke staircases to elegant railings and protective
                            window guards, trust our skilled artisans to transform your vision into reality, enhancing
                            the beauty and value of your home with our distinctive craftsmanship.
                        </p>
                    </div>
                    <div className="flex-1 ">
                        <Image src={welding} alt="Staircase factory"  width={500} loading={"lazy"} fetchPriority={"low"} height={500}/>
                    </div>
                </article>
            </section>
            <article className='bg-[#f7f8f9] flex flex-col items-center justify-center py-16 px-8 sm:px-16 gap-3 mb-10'>
                <h2 className='text-5xl text-center'>The Legacy of US Metal Services</h2>
                <p className='text-center'>
                    Founded in Chicago&apos;s vibrant heart, US Metal Services transcends the ordinary boundaries of a
                    metalwork firm. We stand as a testament to enduring metal craftsmanship, unwavering dedication, and
                    relentless innovation. Our journey from a modest workshop to a beacon of architectural metal
                    solutions mirrors our commitment to excellence and the transformative power of our creations.
                    Discover how our legacy shapes the future of metalwork, driving us towards new horizons of artistry
                    and engineering.
                </p>
                <Link  href={"/contact"} className="bg-[#fecc52] text-black py-2 px-4">
                    VALUE PROMISE
                </Link>
            </article>
        </div>
    );
}

export default AboutPage
