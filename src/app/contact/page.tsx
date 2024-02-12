import Link from "next/link";
import {Location, Mail, Phone} from "@/assets/icons/Icons";

function ContactPage() {
    return (
        <div className='flex flex-col justify-center items-center w-full my-20'>
            <h1 className='text-3xl md:text-6xl my-5 border-b border-black'>
                CONTACT
            </h1>
            <div className='flex flex-col justify-center items-center w-full my-20 bg-[#f7f8f9]'>
                <h1 className='text-3xl md:text-6xl my-10'>
                    Get in Touch with Us!
                </h1>
                <form className="space-y-6 mb-20">
                    <div className="flex flex-col gap-5 md:flex-row md:space-x-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"/>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"/>
                    </div>

                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"/>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"/>

                    <textarea
                        placeholder="Message"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[#fecc52] text-black p-4 rounded-lg hover:bg-black hover:text-[#fecc52] transition-colors">
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-around items-center  w-full ">
                <div className="flex flex-col items-center justify-center">
                    <Location/>
                    <p className="font-medium">800 E Northwest Hwy, #611,</p>
                    <p className="font-medium">Palatine, IL 60074</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Phone/>
                    <p className="font-medium">+1 (224) 354-2494</p>
                    <p className="font-medium">+1 (224) 354-2494</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Mail/>
                    <p className="font-medium">usmetalservices@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
