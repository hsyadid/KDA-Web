'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-default text-white min-h-screen overflow-hidden ">

        {/* Background grid pattern */}
        <div className="absolute inset-0 mt-40 h-[800px] pointer-events-none z-[1]">
                <Image 
                    src="/pattern.png" 
                    alt="Office Building" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className='object-center'
                />
        </div>

       {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-full brightness-125 pointer-events-none -mt-10 z-[2]">
                <Image 
                    src="/gradient_up.png" 
                    alt="Office Building" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
        </div>

       {/* Background texture */}
        <div className="absolute inset-0 w-full h-[1000px] opacity-10 brightness-150 pointer-events-none z-[3]">
            <Image 
                src="/Textures.png" 
                alt="Background Texture" 
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="w-full h-screen"
            />
        </div> 

      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col w gap-12">
          {/* Text and buttons */}
            <div className=" flex justify-between items-end z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">For Other Enquiries,</h2>
                    <h1 className="text-4xl md:text-6xl font-semibold mb-8">Contact Us</h1>
                </div>
                
                <div className="flex gap-4 mb-12">
                <Link href="/contact/email" className="bg-white font-syne text-default px-14 py-2 rounded-md font-bold">
                    Email
                </Link>
                <Link href="/contact/whatsapp" className="border border-white font-syne px-12 py-2 rounded-md font-bold">
                    Whatsapp
                </Link>
                </div>
            </div>

            <div className='flex gap-12 z-10'>
                {/* image */}
                <div className="relative w-1/2 h-[300px] md:h-[450px]  overflow-hidden rounded-[22px]">
                    <Image 
                    src="/test.png" 
                    alt="Office Building" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    />
                </div>
                
                {/* Contact information */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="grid gap-8">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                    <div className=" p-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-yellow" viewBox="0 0 512 512">
                        <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Email</h3>
                        <p className="text-gray-300 mb-1">support@namaperusahaan.com</p>
                        <p className="text-gray-300">info@namaperusahaan.com</p>
                    </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                    <div className=" p-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-yellow" viewBox="0 0 512 512">
                        <path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Nomor Telepon</h3>
                        <p className="text-gray-300 mb-1">+62 812-3456-7890</p>
                        <p className="text-gray-300">+62 812-9876-5432</p>
                    </div>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                    <div className=" p-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-yellow" viewBox="0 0 512 512">
                        <path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Alamat Fisik</h3>
                        <p className="text-gray-300">Jl. Merdeka No. 123, Jakarta, Indonesia</p>
                    </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-4">
                    <div className=" p-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-yellow" viewBox="0 0 512 512">
                        <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Jam Operasional</h3>
                        <p className="text-gray-300">Senin–Jumat, 09.00–17.00 WIB</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}