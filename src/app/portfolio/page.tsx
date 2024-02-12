import firstImage from '@/assets/images/modern-stairs.jpg'
import Image from "next/image";




function PortfolioPage() {
    return (
        <div className='flex flex-col justify-center items-center w-full px-8 sm:px-16 my-20'>
            <h1 className='text-3xl md:text-6xl my-10 border-b border-black'>
                PORTFOLIO

            </h1>
            <div className="flex flex-col gap-10 items-center justify-center w-full p-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={firstImage} alt='dadsada'
                               className="transform hover:scale-110 transition duration-300 ease-in-out"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
