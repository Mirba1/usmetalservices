import Link from "next/link";
import Image from "next/image";
import React from "react";
import welding from "@/assets/images/welding-2262745_1280.webp";
import handRail from "@/assets/images/HandRails.jpg"
import Railings from "@/assets/images/Railings.webp"
import stairCases from "@/assets/images/Staircases-600x600.webp"
import windowGuards from "@/assets/images/Window-Guards-600x584.webp"
import customWork from "@/assets/images/Commercial-Metal-Design-600x607.webp"
import metalGates from "@/assets/images/metal-gates-600x450.webp"

import Head from 'next/head';


function ServicesPage() {
    return (
        <div className='mb-20 flex flex-col justify-center items-center w-full'>
            <Head>
                <title>Custom Metalwork Services - US Metal Services</title>
                <meta name="description"
                      content="Explore our wide range of custom metalwork services including handrails, railings, staircases, window guards, custom orders, and metal gates. Crafted with precision and care by US Metal Services."/>
                <meta property="og:title" content="Custom Metalwork Services - US Metal Services"/>
                <meta property="og:description"
                      content="Discover custom-designed metalwork services that combine safety, elegance, and innovative design to enhance your residential or commercial spaces."/>
                <meta property="og:type" content="website"/>
                <link rel="canonical" href="https://usmetalservices.com/services"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "ProfessionalService",
                        "@id": "",
                        "url": "https://usmetalworks/portfolio",
                        "telephone": "+1 (224) 354-2494",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "800 E Northwest Hwy, #611,",
                            "addressLocality": "Palatine",
                            "addressRegion": "IL",
                            "postalCode": "60074",
                            "addressCountry": "USA"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.7128,
                            "longitude": -74.0060
                        },
                        "openingHoursSpecification": [{
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "24"
                        }],
                        "sameAs": [
                            "https://www.instagram.com/usmetalservicesinc",]
                    })}
                </script>
            </Head>
            <h1 className='text-3xl md:text-6xl my-10 text-center border-b border-black'>
                METAL SERVICES

            </h1>
            <div className='flex flex-col gap-20  px-8 sm:px-16 '>
                <ul className='flex justify-around flex-col lg:flex-row items-center gap-5'>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center text-center'>
                        <Image src={handRail} alt="Elegant Metal Handrails by US Metal Services"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className="text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black">Handrails</h2>
                        <p className="mx-2 text-left">Elevate the safety and style of your home with our custom-designed
                            metal handrails. Crafted to perfection, our handrails provide a secure grip and enhance the
                            aesthetic appeal of your staircases and balconies. Perfect for residential and commercial
                            spaces, they blend form and function seamlessly.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'><Link
                            href={'/contact'}>Consult with
                            our handrails experts {'>'}</Link></p>

                    </li>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center'>
                        <Image src={Railings} alt="Custom Metal Railings Design"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>Railings</h2>
                        <p className='mx-2 text-left'>Discover the perfect blend of safety and style with our bespoke
                            metal railings. Designed to complement any architectural style, our railings are the ideal
                            choice for adding elegance and security to your home or business premises. From sleek,
                            modern designs to intricate, classic patterns, we tailor each project to your specific needs
                            and aesthetic preferences.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>
                            <Link href={'/contact'}>Consult with
                                our railings experts {'>'}</Link>
                        </p>

                    </li>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center lg:mb-5'>
                        <Image src={stairCases} alt="Elegant Custom Staircases"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>Staircases</h2>
                        <p className='mx-2 text-left '>Transform your space with our custom-built staircases, engineered
                            for safety without compromising on style. Each staircase we design is a masterpiece of
                            craftsmanship, tailored to enhance the unique character of your home or commercial space.
                            With a focus on durability, aesthetic appeal, and seamless integration into your existing
                            decor, our staircases stand as a testament to innovative design and precision
                            engineering.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black '>
                            <Link href={'/contact'}>Consult with
                                our stair case experts {'>'}</Link>
                        </p>
                    </li>
                </ul>
                <ul className='flex justify-around flex-col lg:flex-row items-center gap-5'>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center'>
                        <Image src={windowGuards} alt="Custom Window Guards Design"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>Window
                            Guards</h2>
                        <p className='mx-2 text-left'>Elevate the security and aesthetic of your home with our
                            custom-designed window guards. Crafted for both protection and style, our window guards
                            offer peace of mind while enhancing the visual appeal of your property. From classic wrought
                            iron to modern minimalist designs, we tailor every piece to meet your specific safety needs
                            and architectural style.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'>
                            <Link href={'/contact'}>Consult with
                            our window guard experts {'>'}</Link></p>
                    </li>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center'>
                        <Image src={customWork} alt="Bespoke Metal Design Projects"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>Custom
                            Orders</h2>
                        <p className='mx-2 text-left'>Bring your vision to life with our bespoke metal design services.
                            From unique staircases to personalized window guards, handrails, and metal gates, our team
                            specializes in creating custom pieces that perfectly match your home’s safety requirements
                            and aesthetic preferences. With a keen eye for detail and a commitment to quality, we ensure
                            that each custom project is not only safe and durable but also a stunning work of art that
                            enhances your space.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'><Link
                            href={'/contact'}>Consult with
                            our custom mtal works experts {'>'}</Link></p>

                    </li>
                    <li className='flex flex-col gap-5 w-auto justify-center items-center'>
                        <Image src={metalGates} alt="Custom Designed Metal Gates"
                               className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"/>
                        <h2 className='text-2xl md:text-4xl text-[#fecc52] cursor-pointer hover:text-black'>Metal
                            Gates</h2>
                        <p className='mx-2 text-left'>Enhance the security and curb appeal of your property with our
                            custom-designed metal gates. Tailored to your specific needs and style preferences, our
                            metal gates serve as both a robust security feature and a statement piece of art. Whether
                            you&apos;re looking for elegant entryway gates, garden gates, or driveway gates, we craft
                            each
                            project with precision and care to ensure it complements your home&apos;s architecture and
                            stands
                            as a testament to durable, sophisticated design.</p>
                        <p className='text-sm md:text-xl text-[#fecc52] cursor-pointer hover:text-black'><Link href={'/contact'}>Consult with
                            our metal gates experts {'>'}</Link></p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-center my-40 bg-[#fecc52]">
                <div className="flex flex-col w-auto md:w-[50%] items-center justify-center p-10">
                    <h2 className="text-5xl font-bold mb-4">Connect With Our Metalwork Experts!</h2>
                    <p className="text-xl mb-6 text-center">
                        Have queries or looking for a personalized quote? Our team of metalwork specialists is eager to
                        assist. Whether it&apos;s enhancing safety features or adding a touch of elegance to your space,
                        we&apos;re here to bring your vision to life. Get in touch today and start crafting your dream
                        space
                        with precision and style.
                    </p>
                    <button
                        className="bg-[#fecc52] hover:bg-black hover:text-white border-white border-2 text-black py-2 px-4">
                        <Link href={"/contact"}>Get Your Free Quote</Link>
                    </button>
                </div>
                <div className="flex-1">
                    <Image src={welding} width={500} height={400} alt="Expert Welding Services"
                           className="object-cover w-auto h-96"/>
                </div>
            </div>


        </div>
    );
}

export default ServicesPage;
