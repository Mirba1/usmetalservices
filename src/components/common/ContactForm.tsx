'use client';

import {FC, useState} from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/sendEmail';

export type FormData = {
    name: string;
    lastName: string;
    email: string;
    message: string;
    phone: number;
    service: any;
};


const ContactForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const [responseMessage, setResponseMessage] = useState('Submit');
    function onSubmit(data: FormData) {
        sendEmail(data);
        if(FormData){
            setResponseMessage('Sent')
        }
    }




    return (
        <form className="space-y-6 mb-20 " onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5 md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                        required={true}
                        {...register('name')}/>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                        required={false}
                        {...register('lastName')}/>
                </div>
            <div className='flex flex-col gap-5 w-f'>
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                    required={true}
                    {...register('phone')}/>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                    required={true}
                    {...register('email')}/>
                <select
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                    required={true}
                    {...register('service')}
                >
                    <option value="" disabled>Choose a product</option>
                    <option value="rails">Rails</option>
                    <option value="staircases">Staircases</option>
                    <option value="windowGuards">Window Guards</option>
                    <option value="gates">Gates</option>
                    <option value="handrails">Handrails</option>
                    <option value="other">Other</option>
                </select>
                <textarea
                    placeholder="Message"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fecc52] focus:border-transparent"
                    required={false}
                    {...register('message')}
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-[#fecc52] text-black p-4 rounded-lg hover:bg-black hover:text-[#fecc52] transition-colors">
                    {responseMessage}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

