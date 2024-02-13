import Link from "next/link";
import {Location, Mail, Phone} from "@/assets/icons/Icons";
import ContactForm from "@/components/common/ContactForm";

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
                <ContactForm/>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-around items-center mb-20 w-full ">
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
