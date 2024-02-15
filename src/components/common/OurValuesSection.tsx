import Image from "next/image";
import firstImage from "@/assets/images/modern-stairs.webp";
import secondImage from "@/assets/images/Iron-stairs-800x1067.webp";
import thirdImage from "@/assets/images/Staircases-600x600.webp";
import Link from "next/link";


const OurValuesSection = () => {
    return (
        <div className='flex flex-col gap-10 px-8 sm:px-16'>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                <div className="flex flex-col w-auto items-center justify-center p-10  text-center gap-5">
                    <h1 className="text-6xl font-semibold ">Our Values</h1>
                    <p className="text-xl text-[#737373]">
                        We stand for quality, safety, and beauty in every <br/> metal piece we craft. Your trust is our
                        foundation.
                    </p>
                    <button className="font-semibold">
                        <Link href={'/about'}>DISCOVER MORE ➞</Link>
                    </button>
                </div>
                <div className="flex-1 ">
                    <p className='flex justify-end text-5xl font-bold py-2 text-[#ffce526e]'>01</p>
                    <div className='bg-black'>
                        <Image src={firstImage}  alt="Stairs rails gates windowguards" fetchPriority={"low"} loading={"lazy"} width={500}
                               height={500}
                               className="object-cover w-full h-[500px] opacity-60"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                <div className="hidden flex-1 md:block">
                    <p className='flex justify-start text-5xl font-bold py-2 text-[#ffce526e]'>02</p>
                    <div className='bg-black'>
                        <Image src={secondImage} alt="Stairs rails gates windowguards" fetchPriority={"low"} loading={"lazy"} width={500}
                               height={500}
                               className="object-cover w-full h-[500px] opacity-60"/>
                    </div>
                </div>
                <div className="flex flex-col w-auto items-center justify-center p-10 text-center gap-5">
                    <h1 className="text-6xl font-semibold">Explore Our Services</h1>
                    <p className="text-xl text-[#737373]">
                        Dive into our comprehensive showcase of professional services.<br/> Experience the quality and
                        precision that define <br/> our work in every project.
                    </p>
                    <button className="font-semibold">
                        <Link href={'/services'}>DISCOVER SERVICES ➞</Link>
                    </button>
                </div>
                <div className="md:hidden flex-1">
                    <p className='flex justify-start text-5xl font-bold py-2 text-[#ffce526e]'>02</p>
                    <div className='bg-black'>
                        <Image src={secondImage} alt="Stairs rails gates windowguards" fetchPriority={"low"} loading={"lazy"} width={500}
                               height={500}
                               className="object-cover w-full h-[500px] opacity-60"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white">
                <div className="flex flex-col w-auto items-center justify-center p-10 text-center gap-5">
                    <h1 className="text-6xl font-semibold">Contact Us</h1>
                    <p className="text-xl text-[#737373]">
                        Questions? Ready to elevate your space? Reach out <br/> to discuss your project. Weʼre here to bring your<br/> vision to life.
                    </p>
                    <button className="font-semibold">
                        <Link href={'/contact'}>GET A QUOTE ➞</Link>
                    </button>
                </div>
                <div className="flex-1 ">
                    <p className='flex justify-end text-5xl w-auto font-bold py-2 text-[#ffce526e]'>03</p>
                    <div className='bg-black'>
                        <Image src={thirdImage} alt="Stairs rails gates windowguards" fetchPriority={"low"} loading={"lazy"} width={500} height={500}
                               className="object-cover w-full h-[500px] opacity-50"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValuesSection;
