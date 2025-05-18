'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CardLeft from "@/components/CardLeft";
import CardRight from "@/components/CardRight";
import CardFront from "@/components/CardFront";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  return (
    <> 
      <div className="overflow-hidden">

        {/* Hero Section */}
        <div className="w-screen h-screen relative overflow-hidden">
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

          {/* gradient bottom */}
          <div className="absolute inset-0 w-full h-full opacity-80 brightness-200 pointer-events-none z-[2]">
            <Image 
              src="/gradient_bottom.png" 
              alt="gradient bottom " 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="w-full h-screen"
            />
          </div>

          
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

          {/* Hero Image */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-[45%] opacity-100 brightness-120 pointer-events-none z-[50]">
            <Image 
              src="/Hero_image.png" 
              alt="Background Texture" 
              width={0}
              height={0}
              sizes="210vw"
              style={{ 
                width: 'auto',
                height: 'auto',
                maxWidth: '100%'
              }}
              priority
            />
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 pt-12 pb-64 relative z-10 flex flex-col justify-center gap-30 -mt-5">
            <div className="text-center mb-24 ">
              <h1 className="text-8xl font-bold font-syne mb-4 uppercase tracking-widest">PT KARYA DIMENSI</h1>
              {/* <h1 className="text-8xl font-bold font-syne mb-4 uppercase tracking-widest"><span className="ml-28">NUG</span><span className="inline-block w-40"></span>RAHA</h1> */}
              <h1 className="text-8xl font-bold font-syne mb-4 uppercase tracking-widest">NUGRAHA</h1>
            </div>

            <div className="flex w-[90%]mx-auto justify-between">
                <Link 
                  href="/services/development" 
                  className=" border-2 font-semibold w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
                >
                  View Service
                </Link>

                <Link 
                  href="/services/development" 
                  className=" border-2 font-semibold w-[250px] flex justify-center border-white/70 rounded-lg px-6 py-2 hover:bg-white/10 transition text-2xl"
                >
                  View Portfolio
                </Link>
            </div>
          </div>

        </div>
        
        {/* Services Section */}
        <div className="w-screen h-screen relative overflow-hidden">
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
          <div className="container mx-auto px-6 py-12 pb-64 relative z-10 flex flex-col justify-center gap-5 ">
            <div className="text-center mb-6 mt-10">
              <h1 className="text-6xl font-bold font-syne uppercase text-left tracking-widest">Services</h1>
            </div>
            
            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Infrastructure Card */}
              <div className="bg-default backdrop-blur-sm px-8 pt-16 pb-50 relative overflow-hidden border rounded-2xl border-white">

                <div className="absolute bottom-0 left-0 w-full opacity-60 size-full brightness-200 pointer-events-none -z-[1]">
                  <Image 
                      src="/gradient_bottom.png" 
                      alt="Grid Pattern" 
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    className="w-screen h-screen"
                  />
                </div>

                  <div className="absolute right-15 top-10 brightness-150 w-[170px] h-[250px] pointer-events-none z-[2] -rotate-42">
                      <Image 
                        src="/hammer.png" 
                        alt="object" 
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                  </div>
                    
                    <div className="absolute right-52 -bottom-0 brightness-150 w-[270px] h-[210px] pointer-events-none z-[2] rotate-20">
                      <Image 
                        src="/bridge.png" 
                        alt="object" 
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                  </div>


                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Infrastructure</h2>
                    <p className="mb-6 text-white/80">Lorem ipsum dolor sit amet</p>
                    <Link 
                      href="/services/infrastructure" 
                      className="inline-block border border-white/70 rounded-md px-6 py-2 text-sm font-syne tracking-widest hover:bg-white/10 transition"
                    >
                      More
                    </Link>
                  </div>

           

                </div>
              </div>
              
              {/* Development Card */}
              <div className="bg-default backdrop-blur-sm px-8 pt-16 pb-50 relative overflow-hidden border rounded-2xl border-white">

                <div className="absolute bottom-0 left-0 w-full opacity-60 size-full brightness-200 pointer-events-none -z-[1]">
                  <Image 
                      src="/gradient_bottom.png" 
                      alt="Grid Pattern" 
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    className="w-screen h-screen"
                  />
                </div>

                <div className="absolute right-10 top-10 brightness-150 w-[210px] h-[250px] pointer-events-none z-[2] -rotate-22">
                  <Image 
                    src="/dokument.png" 
                    alt="object" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                
                <div className="absolute left-25 -bottom-0 brightness-150 w-[210px] h-[250px] pointer-events-none z-[2] rotate-190">
                  <Image 
                    src="/pencil.png" 
                    alt="object" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>




                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Development</h2>
                    <p className="mb-6 text-white/80">Lorem ipsum dolor sit amet</p>
                    <Link 
                      href="/services/infrastructure" 
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
    
      <section ref={targetRef} className="relative h-[300vh] gradient_bg_sticky_container ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-30 gradient_bg_sticky h-full justify-center items-center">

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



            <div className="mb-10 md:mb-0 mr-20  ml-20">
              <h1 className="text-6xl md:text-7xl font-bold font-syne text-white leading-tight">
                OUR<br />
                RECENT<br />
                WORK
              </h1>
              
              <div className="mt-8">
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center border border-white/70 rounded-full px-6 py-2 hover:bg-white/10 transition"
                >
                  <span className="mr-2">View All</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
              <div className="col-span-1 row-span-1 ">
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
                <CardLeft card={cards[4]}/>
              </div>

            <div className="mt-8">
              <Link 
                href="/portfolio" 
                className=" ml-20 mr-50 inline-flex items-center justify-center border-2 border-white/70 rounded-[15px] px-8 py-3 hover:bg-white/10 transition w-[280px] text-white font-bold"
              >
                View Full Portfolio
              </Link>
            </div>
          </motion.div>



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
      <section className="w-full py-20 relative gradient_bg">

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-white/90 max-w-xl">
              <h2 className="text-5xl font-bold mb-5 uppercase tracking-widest font-syne">Contact Us</h2>
              <p className="text-lg mb-8 font-syne">
                Get in touch with us for any inquiries about our services or to discuss your project needs.
              </p>
  
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="mailto:info@karyadimensinugraha.com" 
                className="border-2 font-semibold w-[200px] flex justify-center items-center bg-white text-default rounded-[15px] py-3  transition text-xl"
              >
                Email
              </Link>
              
              <Link 
                href="https://wa.me/6212345678" 
                className="border-2 font-semibold w-[200px] flex justify-center items-center  border-white/70 rounded-[15px]  hover:bg-white/10 transition text-xl"
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

// const Card = ({ card }: { card: CardType }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

export type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/test.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/test.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/test.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/test.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/test.png",
    title: "Title 5",
    id: 5,
  }
];






