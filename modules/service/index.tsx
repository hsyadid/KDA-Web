'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-default text-white min-h-screen relative overflow-hidden pt-20 pb-32">

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
      <div className="absolute inset-0 w-full h-full opacity-5 brightness-150 pointer-events-none z-[2]">
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
      <div className="container mx-auto px-6 pt-12 pb-64 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-7xl font-bold mb-4 uppercase tracking-wider">SERVICES</h1>
          <p className="max-w-5xl mx-auto text-lg">
            Memberikan standar kerja secara efisien, efektif dan terorganisir secara berkelanjutan melalui komitmen GCG (Good Corporate Governance) dan CSR (Corporate Social Responsibility)
          </p>
        </div>
        
        {/* Infrastructure Service */}
        <div className="bg-default backdrop-blur-sm shadow-md rounded-lg p-8 mb-12 w-[90%] mx-auto h-[450px] relative overflow-hidden">

            <div className="absolute left-0 bottom-0 brightness-150 w-[700px] h-[500px] pointer-events-none z-[2]">
              <Image 
                src="/gradient_left.png" 
                alt="Background gradient" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>

          <div className="absolute right-2 top-0 brightness-150 w-[320px] h-[400px] pointer-events-none z-[2]">
              <Image 
                src="/service_things.png" 
                alt="object" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>
            
            <div className="absolute right-52 -bottom-32 brightness-150 w-[320px] h-[400px] pointer-events-none z-[2] rotate-42">
              <Image 
                src="/service_things.png" 
                alt="object" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="md:w-1/2 mb-8 md:mb-0 z-50 flex flex-col justify-between h-[300px] items-start">
              <div>
                <h2 className="text-6xl font-bold mb-4">Infrastructure</h2>
                <p className="mb-6 text-xl">Lorem ipsum dolor sit amet</p>
              </div>
              <Link 
                href="/services/infrastructure" 
                className="border w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
              >
                View Portfolio
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[200px]">
              <div className="absolute right-0 top-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* <Image
                    src="/shapes-right.png"
                    alt="Infrastructure Shapes"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'right' }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development Service */}
        <div className="bg-default backdrop-blur-sm shadow-md rounded-lg p-8 mb-12 w-[90%] mx-auto h-[450px]  relative overflow-hidden">

          <div className="absolute right-0 bottom-0 brightness-150 w-[700px] h-[500px] pointer-events-none z-[2]">
              <Image 
                src="/gradient_right.png" 
                alt="Background Texture" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>

            <div className="absolute left-2 top-0 brightness-150 w-[320px] h-[400px] pointer-events-none z-[2] rotate-42">
              <Image 
                src="/service_things.png" 
                alt="object" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>
            
            <div className="absolute left-52 -bottom-32 brightness-150 w-[320px] h-[400px] pointer-events-none z-[2]">
              <Image 
                src="/service_things.png" 
                alt="object" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 relative h-[200px] order-2 md:order-1">
              <div className="absolute left-0 top-0 w-full h-full">
                <div className="relative w-full h-full">
                  {/* <Image
                    src="/shapes-left.png"
                    alt="Development Shapes"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  /> */}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 text-right z-50 flex flex-col justify-between h-[300px] items-end">
              <div className=''>
                <h2 className="text-6xl font-bold mb-4">Development</h2>
                <p className="mb-6 text-xl">Lorem ipsum dolor sit amet</p>
              </div>
              <Link 
                href="/services/development" 
                className=" border w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
              
      {/* Bottom curve - half circle */}
      <div className="absolute -bottom-[150px] left-0 w-full h-[600px] overflow-hidden z-[5] ">
        <Image 
            src="/half-circle.png" 
            alt="Background Texture" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className=""/>
      </div>
    </div>
  );
}
