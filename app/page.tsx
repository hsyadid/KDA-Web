'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CardLeft from "@/components/CardLeft";
import CardRight from "@/components/CardRight";
import CardFront from "@/components/CardFront";
import { cards } from "./data/cards";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Show button when portfolio section is in view
        if (entry.intersectionRatio > 0) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, options);

    const portfolioElement = portfolioRef.current;
    if (portfolioElement) {
      observer.observe(portfolioElement);
    }

    return () => {
      if (portfolioElement) {
        observer.unobserve(portfolioElement);
      }
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  return (
    <> 
      <div className="overflow-hidden">

        {/* Hero Section */}
        <div className="w-screen h-[90vh] md:h-screen relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 w-screen h-[90%] brightness-200 pointer-events-none z-[1]">
            <Image 
              src="/pattern.png" 
              alt="Grid Pattern" 
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="w-screen h-screen"
            />
          </div>

          {/* gradient bottom */}
          <div className="absolute inset-0 w-full h-full opacity-80 brightness-200 pointer-events-none z-[2]">
            <Image 
              src="/gradient_bottom.png" 
              alt="gradient bottom" 
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="w-full h-screen"
            />
          </div>

          {/* Background texture */}
          <div className="absolute inset-0 w-full h-full opacity-15 brightness-200 pointer-events-none z-[3]">
            <Image 
              src="/Textures.png" 
              alt="Background Texture" 
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="w-full h-screen"
            />
          </div>

          {/* Hero Image */}
          <div className="absolute -bottom-0 sm:bottom-0 md:-bottom-9 lg:-bottom-20 xl:-bottom-37 left-1/2 transform -translate-x-1/2 w-[120vh] sm:w-[150vh] md:w-[100vh] lg:w-[90vh] xl:w-[90vh] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] opacity-100 brightness-110 pointer-events-none z-[50]">
            <Image 
              src="/hero.png" 
              alt="Hero Image"
              fill
              priority
              loading="eager"
              sizes="(max-width: 640px) 150vh, (max-width: 768px) 150vh, (max-width: 1024px) 100vh, (max-width: 1280px) 90vh, 90vh"
              className="object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 pt-12 pb-64 relative z-10 flex flex-col justify-center items-center gap-30 -mt-5">
            <div className="text-center mb-24 w-[120%] ">
              {/* Mobile version - 3 lines */}
              <div className="block sm:hidden mt-3 ">
                <h1 className="text-[13vw] font-bold font-syne -mb-2 uppercase tracking-widest">PT</h1>
                <h1 className="text-[9vw] font-bold font-syne -mb-2 uppercase tracking-widest">KARYA DIMENSI</h1>
                <h1 className="text-[13vw] font-bold font-syne -mb-2 uppercase tracking-widest">NUGRAHA</h1>
              </div>
              
              {/* Desktop version - 2 lines */}
              <div className="hidden sm:block">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-syne mb-1 uppercase tracking-widest">PT KARYA DIMENSI</h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-syne mb-4 uppercase tracking-widest">NUGRAHA</h1>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-[120%] xl:w-[90%] justify-between ">
                <Link 
                  href="/services" 
                  className=" border-2 font-semibold w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
                >
                  Services
                </Link>

                <Link 
                  href="/contact" 
                  className=" border-2 font-semibold w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
                >
                  Contact Us
                </Link>
            </div>
          </div>

        </div>
        
        {/* Services Section */}
        <div className="w-screen min-h-screen relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 w-screen h-[90%] brightness-200 pointer-events-none z-[1]">
            <Image 
                src="/pattern.png" 
                alt="Grid Pattern" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              className="w-screen h-screen"
            />
          </div>
          
          {/* Background texture */}
          <div className="absolute inset-0 w-full h-full opacity-10 brightness-200 pointer-events-none z-[3]">
            <Image 
              src="/Textures.png" 
              alt="Background Texture" 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="w-full h-screen"
            />
          </div>
          
          {/* glow*/}
          <div className="absolute -left-80 -top-40 brightness-125 opacity-90 size-[800px] pointer-events-none z-[2] rotate-42">
          <Image 
            src="/glow.png" 
            alt="object" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          </div>

          <div className="absolute -right-80 -bottom-80 brightness-125 opacity-90 size-[800px] pointer-events-none z-[2] rotate-42">
          <Image 
            src="/glow.png" 
            alt="object" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col justify-center gap-5 items-center">
            <div className="text-center md:text-left mb-6 mt-10">
              <h1 className="text-5xl md:text-6xl font-bold font-syne uppercase tracking-widest">Services</h1>
            </div>
            
            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20  w-full">

              {/* Infrastructure Card */}
              <div className="bg-default w-full backdrop-blur-sm px-8 pt-16 pb-16 md:pb-50 relative overflow-hidden border rounded-2xl border-white h-[400px] md:h-auto">

                <div className="absolute bottom-0 left-0 w-full opacity-60 size-full brightness-200 pointer-events-none -z-[1]">
                  <Image 
                      src="/gradient_bottom.png" 
                      alt="Grid Pattern" 
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    className="w-full h-full"
                  />
                </div>

                  <div className="absolute right-5 md:right-15 md:top-10 top-35 brightness-150 w-[120px] md:w-[170px] h-[180px] md:h-[250px] pointer-events-none z-[2] -rotate-42">
                      <Image 
                        src="/hammer.png" 
                        alt="object" 
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                  </div>
                    
                    <div className="absolute right-20 md:right-52 -bottom-0 brightness-150 w-[200px] md:w-[270px] h-[150px] md:h-[210px] pointer-events-none z-[2] rotate-20">
                      <Image 
                        src="/bridge.png" 
                        alt="object" 
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                  </div>


                <div className="flex flex-col justify-between h-full relative z-[3]">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Infrastructure</h2>
                    <p className="mb-6 text-white/80">Fondasi kuat untuk operasional bisnis</p>
                    <Link 
                      href="/porto-infra" 
                      className="inline-block border border-white/70 rounded-md px-6 py-2 text-sm font-syne tracking-widest hover:bg-white/10 transition"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Development Card */}
              <div className="bg-default backdrop-blur-sm px-8 pt-16 pb-16 md:pb-50 relative overflow-hidden border rounded-2xl border-white h-[400px] md:h-auto">

                <div className="absolute bottom-0 left-0 w-full opacity-60 size-full brightness-200 pointer-events-none -z-[1]">
                  <Image 
                      src="/gradient_bottom.png" 
                      alt="Grid Pattern" 
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    className="w-full h-full"
                  />
                </div>

                <div className="absolute right-5 md:right-10 md:top-10 top-35 brightness-150 w-[150px] md:w-[210px] h-[180px] md:h-[250px] pointer-events-none z-[2] -rotate-22">
                  <Image 
                    src="/dokument.png" 
                    alt="object" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
                
                <div className="absolute left-2 md:left-25 -bottom-0 brightness-150 w-[150px] md:w-[210px] h-[180px] md:h-[250px] pointer-events-none z-[2] rotate-190">
                  <Image 
                    src="/pencil.png" 
                    alt="object" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>

                <div className="flex flex-col justify-between h-full relative z-[3]">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Development</h2>
                    <p className="mb-6 text-white/80">Solusi inovatif untuk kemajuan teknologi</p>
                    <Link 
                      href="/porto-dev" 
                      className="inline-block border border-white/70 rounded-md px-6 py-2 text-sm font-syne tracking-widest hover:bg-white/10 transition"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>



      </div>
    
      {/* Desktop Recent Work Section */}
      <section ref={targetRef} className="relative h-[300vh] gradient_bg_sticky_container lg:block hidden">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-30 gradient_bg_sticky h-full justify-center items-center">
            {/* Desktop content */}

            {/* Background texture */}
            <div className="absolute inset-0 w-full h-full opacity-15 brightness-200 pointer-events-none z-[3]">
              <Image 
                src="/Textures.png" 
                alt="Background Texture" 
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="w-full h-screen"
              />
            </div>

            <div className="mb-10 md:mb-0 mr-20 ml-20">
              <h1 className="text-6xl md:text-7xl font-bold font-syne text-white leading-tight">
                OUR<br />
                RECENT<br />
                WORK
              </h1>
              
              <div className="mt-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center border border-white/70 rounded-full px-6 py-2 hover:bg-white/10 transition"
                >
                  <span className="mr-2">View All</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="col-span-1 row-span-1">
              <CardFront card={cards[0]}/>
            </div>
            <div className="col-span-1 row-span-1 -mt-50">
              <CardLeft card={cards[1]}/>
            </div>
            <div className="col-span-1 row-span-1 mt-50">
              <CardRight card={cards[2]}/>
            </div>
            <div className="col-span-1 row-span-1 -mt-10">
              <CardFront card={cards[3]}/>
            </div>
            <div className="col-span-1 row-span-1 mt-50">
              <CardRight card={cards[4]}/>
            </div>
            <div className="col-span-1 row-span-1 -mt-50">
              <CardLeft card={cards[5]}/>
            </div>

            <div className="mt-8">
              <Link 
                href="/services" 
                className="ml-20 mr-50 inline-flex items-center justify-center border-2 border-white/70 rounded-[15px] px-8 py-3 hover:bg-white/10 transition w-[280px] text-white font-bold"
              >
                View Full Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Recent Work Section */}
      <section ref={portfolioRef} className="relative gradient_bg_sticky_container lg:hidden block py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold font-syne text-white leading-tight">
              OUR<br />
              RECENT<br />
              WORK
            </h1>
          </div>

          <div className="flex flex-col gap-16 mb-20">
            <div className="w-full flex justify-center">
              <CardFront card={cards[0]}/>
            </div>
            <div className="w-full flex justify-center translate-x-5">
              <CardLeft card={cards[1]}/>
            </div>
            <div className="w-full flex justify-center -translate-x-5">
              <CardRight card={cards[2]}/>
            </div>
            <div className="w-full flex justify-center">
              <CardFront card={cards[3]}/>
            </div>
            <div className="w-full flex justify-center -translate-x-5">
              <CardRight card={cards[4]}/>
            </div>
            <div className="w-full flex justify-center translate-x-5">
              <CardLeft card={cards[5]}/>
            </div>
          </div>

          {/* Sticky Button Container */}
          <div className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="container mx-auto flex justify-center">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center border-2 border-white/70 rounded-[15px] px-8 py-3 hover:bg-white/10 transition w-[280px] text-white font-bold bg-black/50"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
      {/* About Us Section */}
      <section className="w-full py-20 relative overflow-hidden">
        
        {/* Background with gradient and texture */}
        <div className="absolute inset-0 bg-default z-0">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/grid.png" 
              alt="Grid Pattern" 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="object-center pb-15"
            />
          </div>
        </div>

      {/* glow*/}
        <div className="absolute -left-80 -top-80 brightness-125 opacity-90 size-[800px] pointer-events-none z-[2] rotate-42">
          <Image 
            src="/glow.png" 
            alt="object" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

          {/* Background texture */}
          <div className="absolute inset-0 w-full h-full opacity-10 brightness-150 pointer-events-none z-[3]">
            <Image 
              src="/Textures.png" 
              alt="Background Texture" 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="w-full h-screen"
            />
          </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold font-syne text-center mb-16 uppercase tracking-widest">ABOUT US</h2>
          
          <div className="max-w-4xl mx-auto text-white/90 text-center">
            <p className="mb-6">
              PT Karya Dimensi Nugraha Berdiri pada tahun 2024, yang berdomisili di Perum Metland Tambun Jl. Biduri III Blok F 22-23, Cibuntu, Cibitung, Bekasi, Jawa Barat. PT Karya Dimensi Nugraha adalah perusahaan yang memiliki kapabilitas dalam bidang konstruksi gedung hunian, perkantoran, bangunan sipil jalan, jembatan, underpass, instalasi saluran air dan listrik.
            </p>
            <p>
              Sebagai bagian dari misi kami untuk menjunjung tinggi suatu kualitas dengan standar yang sudah ditentukan dalam Peraturan Pemerintah. PT Karya Dimensi Nugraha mengaplikasikan truktur organisasi perusahaan dari semua unsur yang saling terkait. Baik secara operasional maupun administratif dengan penerapan kelola perusahaan yang baik (good corporate governance), komitmen terhadap tanggung jawab sosial (corporate social responsibility) dan tetap memperhatikan Peraturan Pemerintah (goverment regulation).
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full py-10 relative gradient_bg overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/90 max-w-xl text-center md:text-left">
              <h2 className="text-6xl md:text-7xl font-bold mb-3 uppercase tracking-widest font-syne">CONTACT US</h2>
              <p className="text-xl mb-4 font-syne">
                Get in touch with us for any inquiries about our services or to discuss your project needs.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link 
                href="mailto:karyanugraha.dimensi@gmail.com" 
                className="border-2 font-semibold w-[180px] flex justify-center items-center bg-white text-default rounded-[15px] py-3 transition text-xl"
              >
                Email
              </Link>
              
              <Link 
                href="https://wa.me/6285219104300" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 font-semibold w-[180px] flex justify-center items-center border-white/70 rounded-[15px] hover:bg-white/10 transition text-xl"
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

    </>
  );
}