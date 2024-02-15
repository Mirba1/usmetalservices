import {Location, Mail, Phone} from "@/assets/icons/Icons";
import ContactForm from "@/components/common/ContactForm";
import React from "react";
import Head from "next/head";

function ContactPage() {
    return (
        <div className='flex flex-col justify-center items-center w-full '>
            <Head>
                <title>Contact Us - Us Metal Services</title>
                <meta name="description"
                      content="Reach out to Us Metal Services for custom metalwork projects. Contact us for expert advice, quotes, and to discuss your metalwork needs."/>
                <meta name="keywords"
                      content="contact metal services, custom metalwork, metalwork quotes, expert metalwork advice"/>
                <link rel="canonical" href="https://usmetalservices.com/contact"/>
                <meta property="og:title" content="Contact Us - Us Metal Services"/>
                <meta property="og:description"
                      content="Get in touch with Us Metal Services for bespoke metalwork designs and consultations."/>
                <meta property="og:url" content="https://usmetalservices.com/contact"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Contact Us - Us Metal Services"/>
                <meta name="twitter:description"
                      content="Reach out for custom metalwork designs and expert consultations at Us Metal Services."/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        "name": "Us Metal Services",
                        "url": "https://usmetalservices.com/contact",
                        "logo": "https://usmetalservices.com/logo.png",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+1 (224) 354-2494",
                            "contactType": "customer service",
                            "areaServed": "US",
                            "availableLanguage": ["English"]
                        }],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "800 E Northwest Hwy, #611",
                            "addressLocality": "Palatine",
                            "addressRegion": "IL",
                            "postalCode": "60074",
                            "addressCountry": "US"
                        }
                    })}
                </script>

            </Head>

            <h1 className='text-3xl md:text-6xl my-5 border-b border-black'>
                CONTACT METAL EXPERTS
            </h1>
            <div className='flex flex-col justify-center items-center w-full my-20 bg-[#f7f8f9]'>
                <h2 className='text-3xl md:text-6xl my-10'>
                    Get in Touch with Us!
                </h2>
                <ContactForm/>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-around items-center mb-10 w-full ">
                <div className="flex flex-col items-center justify-center">
                    <Location/>
                    <p className="font-medium">800 E Northwest Hwy, #611,</p>
                    <p className="font-medium">Palatine, IL 60074</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Phone/>
                    <p className="font-medium">+1 (224) 354-2494</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Mail/>
                    <p className="font-medium">usmetalservices@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center my-20 bg-[#fecc52]">
                <div className="flex flex-col w-auto md:w-[50%] items-center justify-center p-10">
                    <h2 className="text-5xl font-bold mb-4">Get in Touch with Our Metalwork Experts</h2>
                    <p className="text-xl text-center">
                        Seeking expert advice or a custom quote on metalwork designs? Our dedicated team at [Your
                        Company Name] is here to provide you with top-tier metalwork solutions tailored to your unique
                        needs. From enhancing the safety of your premises with robust metal features to infusing your
                        spaces with unparalleled elegance, we&apos;re committed to transforming your vision into reality.
                        Contact us now to embark on a journey towards creating spaces that reflect precision, quality,
                        and artistic craftsmanship. Let&apos;s shape the future of your projects together.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
