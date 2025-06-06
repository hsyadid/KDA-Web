'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-default text-white min-h-screen overflow-hidden">

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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 z-10">
        <div className="flex flex-col gap-20 sm:gap-10 md:gap-12">
          {/* Text and buttons - Mobile View */}
          <div className="flex flex-col items-center text-center lg:hidden gap-5 z-10">
            <div className="w-full max-w-[500px]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0">For Other Enquiries,</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
            </div>
            
            <div className="flex gap-4 w-full max-w-[280px]">
              <Link 
                href="/contact/email" 
                className="bg-white font-syne text-default px-6 py-2 rounded-[20px] font-bold text-center w-full text-lg"
              >
                Email
              </Link>
              <Link 
                href="/contact/whatsapp" 
                className="border border-white font-syne px-6 py-2 rounded-[20px] font-bold text-center w-full text-lg"
              >
                Whatsapp
              </Link>
            </div>
          </div>

          {/* Text and buttons - Desktop View */}
          <div className="hidden lg:flex justify-between items-center z-10">
            <div>
              <h2 className="text-5xl font-bold mb-2 font-syne">For Other Enquiries,</h2>
              <h1 className="text-6xl font-semibold font-syne">Contact Us</h1>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="mailto:karyanugraha.dimensi@gmail.com" 
                className="bg-white font-syne text-default px-14 py-3 rounded-[15px] font-bold"
              >
                Email
              </Link>
              <Link 
                href="https://wa.me/6287884478948" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white font-syne px-12 py-3 rounded-[15px] font-bold hover:bg-white/10 transition"
              >
                Whatsapp  
              </Link>
            </div>
          </div>

            <div className='flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 z-10'>
                {/* image */}
                <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[450px] overflow-hidden rounded-[22px]">
                    <Image 
                    src="/modal1/1.jpeg" 
                    alt="Office Building" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    />
                </div>
                
                {/* Contact information */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="grid gap-6 sm:gap-8">
                    {/* Email */}
                    <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-yellow/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-10 text-yellow" viewBox="0 0 512 512">
                        <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white/90">Email</h3>
                        <p className="text-gray-300 text-sm sm:text-base">karyadimensinugraha@gmail.com</p>
                    </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-yellow/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-10 text-yellow" viewBox="0 0 512 512">
                        <path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white/90">Nomor Telepon</h3>
                        <p className="text-gray-300 text-sm sm:text-base">+62 878-8447-8948</p>
                    </div>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-yellow/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-10 text-yellow" viewBox="0 0 512 512">
                        <path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white/90">Alamat Fisik</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Perum Metland Tambun, Jalan Biduri III Blok F 22-23, Kelurahan Cibuntu, Kecamatan Cibitung, Kabupaten Bekasi, Kode Pos : 17520</p>
                    </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-yellow/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-10 text-yellow" viewBox="0 0 512 512">
                        <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white/90">Jam Operasional</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Senin–Jumat, 09.00–17.00 WIB</p>
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