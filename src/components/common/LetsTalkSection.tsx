import React from 'react';
import Image from "next/image";
import stairsBottom from "@/assets/images/stairsContact.webp";
import Link from "next/link";

const LetsTalkSection = () => {
    return (
        <div className='my-20 relative bg-black text-white text-center'>
            <Image src={stairsBottom} alt='main background image' width={1900} height={500} fetchPriority={"low"} loading={"lazy"}
                   className='opacity-40'/>
            <div
                className='absolute top-[40%] sm:top-[50%] flex flex-col items-center justify-center w-full gap-2 sm:gap-7'>
                <p className='text-xl md:text-4xl lg:text-8xl'>Letʼs Start Your Project!</p>
                <p className='text-xs md:text-xl lg:text-3xlr'>Dreaming of the perfect stairs? Reach out now and letʼs
                    turn your vision into a stunning
                    reality. Your journey begins here!</p>
                <Link href={'/contact'}
                      className='bg-[#fecc52] py-1 px-3 text-black  md:py-3 md:px-7 md:text-xl md:text-black'>START
                    NOW</Link>
            </div>
        </div>
    );
};

export default LetsTalkSection;
