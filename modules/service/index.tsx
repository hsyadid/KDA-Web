'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-default text-white min-h-screen relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-32">

      {/* Background grid pattern */}
      <div className="absolute inset-0 w-screen h-[90%] brightness-150 pointer-events-none z-[1]">
        <Image 
            src="/pattern.png" 
            alt="Office Building" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          className="w-screen h-screen"
        />
      </div>
      
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full opacity-10 brightness-150 pointer-events-none z-[2]">
        <Image 
          src="/Textures.png" 
          alt="Background Texture" 
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="w-full h-screen"
        />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-32 sm:pb-64 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 uppercase tracking-wider">SERVICES</h1>
          <p className="max-w-5xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Memberikan standar kerja secara efisien, efektif dan terorganisir secara berkelanjutan melalui komitmen GCG (Good Corporate Governance) dan CSR (Corporate Social Responsibility)
          </p>
        </div>
        
        {/* Infrastructure Service */}
        <div className="bg-default backdrop-blur-sm shadow-md rounded-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 w-full md:w-[90%] mx-auto h-[300px] sm:h-[350px] md:h-[450px] relative overflow-hidden">
          <div className="absolute left-0 bottom-0 brightness-150 w-[300px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] md:h-[500px] pointer-events-none z-[2]">
            <Image 
              src="/gradient_left.png" 
              alt="Background gradient" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="absolute right-5 sm:right-8 md:right-15 top-15 sm:top-10 brightness-150 w-[80px] sm:w-[120px] md:w-[200px] h-[120px] sm:h-[180px] md:h-[300px] pointer-events-none z-[2] -rotate-42">
            <Image 
              src="/hammer.png" 
              alt="object" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
            
          <div className="absolute right-10 sm:right-32 md:right-52 bottom-10 brightness-150 w-[130px] sm:w-[200px] md:w-[330px] h-[100px] sm:h-[150px] md:h-[250px] pointer-events-none z-[2] rotate-20">
            <Image 
              src="/bridge.png" 
              alt="object" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center h-full">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 z-50 flex flex-col justify-between h-full">
              <div className="flex flex-col h-full justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">Infrastructure</h2>
                <p className="mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Fondasi kuat untuk operasional bisnis</p>
              </div>
              <Link 
                href="/porto-infra" 
                className="border w-fit sm:w-[200px] md:w-[250px] flex justify-center border-white/70 rounded-lg px-4 sm:px-6 py-2 hover:bg-white/10 transition text-sm sm:text-base md:text-lg xl:text-xl backdrop-blur-sm bg-black/30"
              >
                View Portfolio
              </Link>
            </div>
            <div className="hidden md:block md:w-1/2 relative h-full">
              <div className="absolute right-0 top-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* Empty space for decorative elements */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development Service */}
        <div className="bg-default backdrop-blur-sm shadow-md rounded-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 w-full md:w-[90%] mx-auto h-[300px] sm:h-[350px] md:h-[450px] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 brightness-150 w-[300px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] md:h-[500px] pointer-events-none z-[2]">
            <Image 
              src="/gradient_right.png" 
              alt="Background Texture" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="absolute left-6 sm:left-2 top-20 sm:top-10 brightness-150 w-[90px] sm:w-[140px] md:w-[220px] h-[120px] sm:h-[180px] md:h-[300px] pointer-events-none z-[2] -rotate-22">
            <Image 
              src="/dokument.png" 
              alt="object" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
            
          <div className="absolute left-20 sm:left-32 md:left-55 -bottom-0 brightness-150 w-[100px] sm:w-[150px] md:w-[250px] h-[120px] sm:h-[180px] md:h-[300px] pointer-events-none z-[2]">
            <Image 
              src="/pencil.png" 
              alt="object" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center h-full">
            <div className="hidden md:block md:w-1/2 relative h-full order-2 md:order-1">
              <div className="absolute left-0 top-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* Empty space for decorative elements */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 order-1 md:order-2 text-left md:text-right z-50 flex flex-col justify-between items-end h-full">
              <div className="flex flex-col h-full justify-center items-end">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">Development</h2>
                <p className="mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Solusi inovatif untuk kemajuan teknologi</p>
              </div>
              <Link 
                href="/porto-dev" 
                className="border w-fit sm:w-[200px] md:w-[250px] flex justify-center border-white/70 rounded-lg px-4 sm:px-6 py-2 hover:bg-white/10 transition text-sm sm:text-base md:text-lg xl:text-xl backdrop-blur-sm bg-black/30 md:ml-auto"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
              
      {/* Bottom curve - half circle */}
      <div className="absolute -bottom-[75px] sm:-bottom-[100px] md:-bottom-[150px] left-0 w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden z-[5]">
        <Image 
            src="/half-circle.png" 
            alt="Background Texture" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className=""
        />
      </div>
    </div>
  );
}
