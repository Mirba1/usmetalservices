import Image from "next/image";
import Link from "next/link";
import bgImage from '@/assets/images/MainPageImage.jpg'
import stairsBottom from '@/assets/images/stairsContact.jpeg'
import firstImage from '@/assets/images/modern-stairs.jpg'
import React from "react";
import {Star} from "@/assets/icons/Icons";
export default function Home() {
  return (
      <div>
          <div className='relative bg-black text-white'>
              <Image src={bgImage} alt='main background image' className='h-auto md:h-screen opacity-40'/>
              <div className='absolute top-[40%] sm:top-[50%] flex flex-col items-center justify-center w-full gap-3 sm:gap-7'>
                  <p className='text-2xl md:text-4xl lg:text-8xl'>DREAMS MEET DESIGN</p>
                  <p className='text-[12px] md:text-xl lg:text-3xl text-center'>Elevate your space with our custom-crafted staircases and rails.</p>
                  <Link href={'/contact'}
                        className='bg-[#fecc52] py-1 px-3 text-black  md:py-3 md:px-7 md:text-xl md:text-black'>CONTACT</Link>
              </div>
          </div>
          <ul className='flex bg-[#f7f8f9] flex-col gap-5 md:flex-row md:py-20  px-8 sm:px-16 justify-around items-center py-5'>
              <li className='flex flex-col items-center hover:text-[#fecc52]'>
                  <p className='text-6xl font-semibold'>22 YEARS</p>
                  <p className='text-xl'>IN THE INDUSTRY</p>
              </li>
              <li className='flex flex-col items-center hover:text-[#fecc52]'>
                  <p className='text-6xl font-semibold'>7K+</p>
                  <p className='text-xl'>HAPPY CLIENTS</p>
              </li>
              <li className='flex flex-col items-center hover:text-[#fecc52]'>
                  <p className='text-6xl font-semibold'>50K+</p>
                  <p className='text-xl'>METALWORK DESIGNS</p>
              </li>
          </ul>
          <div className='px-8 sm:px-16 mb-10 mt-20 flex flex-col items-center justify-center text-[#737373]'>
              <p>
                  Weʼre artisans of iron and wood, crafting staircases and rails that blend safety with art. Our gallery
                  boasts elegant, durable designs that transform</p>
              <p> homes. Letʼs connect and make your space shine!</p>
          </div>
          <div className='flex flex-col gap-10 px-8 sm:px-16'>
              <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                  <div className="flex flex-col w-auto items-center justify-center p-10">
                      <h1 className="text-5xl font-bold mb-4">Our Values</h1>
                      <p className="text-xl mb-6 text-[#737373]">
                          We put heart into every piece, ensuring top safety<br/> and timeless elegance. Trust us to
                          uplift
                          your
                          home.
                      </p>
                      <button className="bg-[#fecc52] text-black py-2 px-4">
                          VALUE PROMISE
                      </button>
                  </div>
                  <div className="flex-1 ">
                      <p className='flex justify-end text-5xl font-bold py-2 text-[#ffce526e]'>01</p>
                      <Image src={firstImage} alt="House" className="object-cover w-full h-[500px]"/>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                  <div className="hidden flex-1 md:block">
                      <p className='flex justify-start text-5xl font-bold py-2 text-[#ffce526e]'>02</p>
                      <Image src={firstImage} alt="House" className="object-cover w-full h-[500px]"/>
                  </div>
                  <div className="flex flex-col w-auto items-center justify-center p-10">
                      <h1 className="text-5xl font-bold mb-4">Our Values</h1>
                      <p className="text-xl mb-6 text-[#737373]">
                          We put heart into every piece, ensuring top safety<br/> and timeless elegance. Trust us to
                          uplift
                          your
                          home.
                      </p>
                      <button className="bg-[#fecc52] text-black py-2 px-4">
                          VALUE PROMISE
                      </button>
                  </div>
                  <div className="md:hidden flex-1">
                      <p className='flex justify-start text-5xl font-bold py-2 text-[#ffce526e]'>02</p>
                      <Image src={firstImage} alt="House" className="object-cover w-full h-[500px]"/>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                  <div className="flex flex-col w-auto items-center justify-center p-10">
                      <h1 className="text-5xl font-bold mb-4">Our Values</h1>
                      <p className="text-xl mb-6 text-[#737373]">
                          We put heart into every piece, ensuring top safety<br/> and timeless elegance. Trust us to
                          uplift
                          your
                          home.
                      </p>
                      <button className="bg-[#fecc52] text-black py-2 px-4">
                          VALUE PROMISE
                      </button>
                  </div>
                  <div className="flex-1 ">
                      <p className='flex justify-end text-5xl font-bold py-2 text-[#ffce526e]'>03</p>
                      <Image src={firstImage} alt="House" className="object-cover w-full h-[500px]"/>
                  </div>
              </div>
          </div>
          <div className=' mt-20 flex flex-col justify-center items-center bg-[#f7f8f9] gap-16 py-5 md:py-20'>
              <p className='text-7xl'>Praise</p>
              <div className='flex flex-col justify-around items-center w-full md:flex-row gap-10'>
                  <ul>
                      <li className='flex gap-2 flex-col items-center justify-center'>
                          <div className='flex'><Star/><Star/><Star/><Star/><Star/></div>
                          <p className='text-center'>The new railing transformed our home!<br/> Superb quality and
                              service. We couldnʼt<br/> be happier with the results!</p>
                          <p className='text-2xl font-semibold'>Emily & James H.</p>
                      </li>
                  </ul>
                  <ul>
                      <li className='flex gap-2 flex-col items-center justify-center'>
                          <div className='flex'><Star/><Star/><Star/><Star/><Star/></div>
                          <p className='text-center'>The new railing transformed our home!<br/> Superb quality and
                              service. We couldnʼt<br/> be happier with the results!</p>
                          <p className='text-2xl font-semibold'>Emily & James H.</p>
                      </li>
                  </ul>
                  <ul>
                      <li className='flex gap-2 flex-col items-center justify-center'>
                          <div className='flex'><Star/><Star/><Star/><Star/><Star/></div>
                          <p className='text-center'>The new railing transformed our home!<br/> Superb quality and
                              service. We couldnʼt<br/> be happier with the results!</p>
                          <p className='text-2xl font-semibold'>Emily & James H.</p>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='my-20 relative bg-black text-white'>
              <Image src={stairsBottom} alt='main background image' className='h-auto md:h-screen opacity-40'/>
              <div className='absolute top-[40%] sm:top-[50%] flex flex-col items-center justify-center w-full gap-2 sm:gap-7'>
                  <p className='text-2xl md:text-4xl lg:text-8xl'>Letʼs Start Your Project!</p>
                  <p className='text-[10px] md:text-xl lg:text-3xl text-center'>Dreaming of the perfect stairs? Reach out now and letʼs turn your vision into a stunning
                      reality. Your journey begins here!</p>
                  <Link href={'/contact'}
                        className='bg-[#fecc52] py-1 px-3 text-black  md:py-3 md:px-7 md:text-xl md:text-black'>START NOW</Link>
              </div>
          </div>
      </div>
  );
}
