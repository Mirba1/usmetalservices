import Image from "next/image";
import Head from "next/head";




function PortfolioPage() {
    const imagesContext = require.context('/src/assets/images/portfolio', true, /\.jpeg$/);
    const images = imagesContext.keys().map(imagesContext);

    const imageDetails = [
        { src: images[0], alt: "Custom-designed staircase by US Metal Services" },
        { src: images[1], alt: "Elegant metal railing craftsmanship" },
        { src: images[2], alt: "Architectural metalwork detailing" },
        { src: images[3], alt: "Innovative staircase design in metalwork" },
        { src: images[4], alt: "Custom metal staircase for modern homes" },
        { src: images[5], alt: "Luxury home metal staircase craftsmanship" },
        { src: images[6], alt: "Artistic metal window guard design" },
        { src: images[7], alt: "Custom wrought iron window protection" },
        { src: images[8], alt: "Sophisticated spiral staircase installation" },
        { src: images[9], alt: "Decorative metal gate entrance design" },
        { src: images[10], alt: "Elegant residential staircase architecture" },
        { src: images[11], alt: "Modern metal gate with intricate patterns" },
        { src: images[12], alt: "Luxury home staircase with detailed metalwork" },
        { src: images[13], alt: "Bespoke metal bench in artistic design" },
        { src: images[14], alt: "Secure and stylish wrought iron window guards" },
        { src: images[15], alt: "Ornamental garden metal gate design" },
        { src: images[16], alt: "Vintage style metal driveway gate" },
        { src: images[17], alt: "Contemporary spiral staircase with metal accents" },
        { src: images[18], alt: "Robust metal window guard for urban homes" },
        { src: images[19], alt: "Minimalist floating staircase in metal finish" },
        { src: images[20], alt: "Industrial-chic custom metal bench design" },
        { src: images[21], alt: "Enhanced safety with decorative window guards" },
        { src: images[22], alt: "Architectural steel staircase for modern homes" },
        { src: images[23], alt: "Sleek metal staircase with glass balustrades" },
        { src: images[24], alt: "Artisan-crafted metal bench with intricate details" },
        { src: images[25], alt: "Grand staircase design in luxurious metalwork" },
        { src: images[26], alt: "Protective and artistic metal window guards" },
        { src: images[27], alt: "Elaborate wrought iron gate with floral motifs" },
        { src: images[28], alt: "Custom metal coffee table in avant-garde design" },
        { src: images[29], alt: "Sturdy and elegant window guard in geometric pattern" },
        { src: images[30], alt: "Classical metal gate with intricate craftsmanship" },
        { src: images[31], alt: "Modern helical staircase enhancing interior elegance" },
        { src: images[32], alt: "Sculptural metal bench for contemporary outdoor spaces" },
        { src: images[33], alt: "Functional and stylish custom bench in metal design" },
        { src: images[34], alt: "Exquisite staircase with detailed metal balusters" },
        { src: images[35], alt: "Entrance metal gate with elegant security features" },
        { src: images[36], alt: "Grandiose metal gate with regal design accents" },
        { src: images[37], alt: "Spiral staircase masterpiece in contemporary metalwork" },
        { src: images[38], alt: "High-security window guard with artistic flair" },
        { src: images[39], alt: "Minimalist metal staircase with clean lines and modern design" },
        { src: images[40], alt: "Rustic wooden stairs with metal handrail for a warm, industrial feel" },
        { src: images[41], alt: "Floating metal stairs in a sleek, architectural home setting" },
        { src: images[42], alt: "Chic urban stairs with metal accents for a modern interior" },
        { src: images[43], alt: "Outdoor stone stairs with elegant metal railing designs" },
        { src: images[44], alt: "Decorative metal borders enhancing garden landscapes" },
    ];

    return (
        <div className='flex flex-col justify-center items-center w-full px-8 sm:px-16 my-20'>
            <Head>
                <title>Custom Metalwork Designs | Us Metal Services</title>
                <meta name="description"
                      content="Explore top-quality custom metalwork designs including staircases, gates, and window guards. Crafted with precision for both residential and commercial spaces."/>
                <meta name="keywords" content="custom metalwork, staircases, metal gates, window guards, metal design"/>
                <link rel="canonical" href="https://usmetalservices.com/portfolio"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Custom Metalwork Designs | Your Company Name"/>
                <meta property="og:description"
                      content="Explore top-quality custom metalwork designs including staircases, gates, and window guards. Crafted with precision for both residential and commercial spaces."/>
                <meta property="og:url" content="https://usmetalservices.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fweldin2.723e173a.webp&w=1920&q=75"/>
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
            <h1 className='text-3xl md:text-6xl my-10 border-b border-black'>
                PORTFOLIO

            </h1>
            <div className="flex flex-col gap-10 items-center justify-center w-full p-5">
                <div>
                    {imageDetails.map((image, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-5">
                            <div className="overflow-hidden bg-black">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={340}
                                    height={202}
                                    loading={index < 6 ? "eager" : "lazy"} // Eager load first 6 images, lazy-load the rest
                                    className="transform hover:scale-110 transition duration-300 ease-in-out opacity-50 hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
