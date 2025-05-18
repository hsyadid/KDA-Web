"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Modal from "./components/Modal";

const dmSans = DM_Sans({ subsets: ["latin"] });

type PortofolioModuleProps = {
  portoType: string;
};

const PortofolioModule = ({ portoType }: PortofolioModuleProps) => {
  // Create ref for Swiper instance
  const swiperRef = useRef<SwiperRef>(null);

  const slides = [
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
    {
      image: "/placeholder-porto-plain.png",
      title: "Konstruksi Rumah Hunian ABC",
    },
  ];

  const cards = [
    {
      image: "/placeholder-porto-plain.png",
      header: "HEADER 1",
      desc: "Short desc",
    },
    {
      image: "/placeholder-porto-plain.png",
      header: "HEADER 2",
      desc: "Short desc",
    },
    {
      image: "/placeholder-porto-plain.png",
      header: "HEADER 3",
      desc: "Short desc",
    },
  ];

  const modalList = [Modal, Modal, Modal, Modal, Modal, Modal, Modal, Modal];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={`${dmSans.className}`}>
      {/* Desktop View */}
      <div className="flex max-md:hidden flex-row items-center min-h-screen bg-gradient-to-t from-[#082C2A] to-[##031817] overflow-x-hidden">
        {/* Left Side Image */}
        <Image
          src="/grid.png"
          alt="background-grid"
          fill
          className="object-cover opacity-10 -z-2 "
        />
        <div className="relative w-1/2 h-screen">
          <Image
            src="/placeholder-porto.png"
            alt="Sample Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-1/2 pl-14 flex items-center text-start">
          <div className="flex flex-col pr-9 w-full">
            <p className="text-[#FFBD59] font-bold text-3xl ">{portoType}</p>
            <p className="text-white xl:text-6xl text-4xl font-bold mt-4">
              Konstruksi Rumah ABCD
            </p>
            <p className="text-2xl  text-white mt-4 line-clamp-3 pr-20">
              Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD
              Konstruksi Rumah ABCD Konstruksi Rumah ABCD
            </p>

            {/* Carousel */}
            <div className="mt-24 -translate-x-96 relative">
              <Swiper
                ref={swiperRef}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // untuk HP / ukuran kecil
                  },
                  768: {
                    slidesPerView: 2, // md
                  },
                  1024: {
                    slidesPerView: 3, // lg
                  },
                  1280: {
                    slidesPerView: 5, // xl
                  },
                }}
                loop
                navigation={false} // Disable default navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="w-screen"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full h-96 ${
                        index % 2 === 0 ? "items-end" : "items-start"
                      } flex`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-xl w-full"
                      />
                      <div className="absolute w-full h-1/3 opacity-40 rounded-t-lg bg-[#215A58] blur-xl" />
                      <p className="text-white text-3xl absolute font-bold p-5 mt-2 z-10">
                        {slide.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex w-full justify-end mt-12">
              <button
                className="text-white hover:cursor-pointer transition-opacity hover:opacity-75"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <Image
                  src="/chevron-left.svg"
                  alt="left arrow"
                  width={56.4}
                  height={56.4}
                />
              </button>
              <button
                className="text-white hover:cursor-pointer transition-opacity hover:opacity-75"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <Image
                  src="/chevron-right.svg"
                  alt="right arrow"
                  width={56.4}
                  height={56.4}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative min-md:hidden w-full h-[300px]">
        <Image
          src="/placeholder-porto.png"
          alt="Sample Image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col text-center justify-center px-4">
          <p className="text-[#FFBD59] font-bold text-2xl">{portoType}</p>
          <p className="text-white text-3xl font-bold ">
            Konstruksi Rumah ABCD
          </p>
        </div>
      </div>

      <div className="px-3 py-5">
        <div
          className="w-full min-md:hidden  rounded-md border-1 border-white/50 p-3 shadow-white"
          style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        >
          <p className="text-[12px] text-white text-center ">
            Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD
            Konstruksi Rumah ABCD Konstruksi Rumah ABCD
          </p>
        </div>
      </div>

      <div className="absolute w-full h-full -z-1">
        <Image
          src="/grid.png"
          alt="background-grid"
          fill
          className=" opacity-10  w-full"
        />
      </div>
      <div className="  lg:px-28 md:px-20 px-3 pb-6 z-20">
        <div className="gap-5 ">
          <p className="text-[#FFBD59] lg:text-4xl md:text-3xl text-xl font-bold">
            Portofolio
          </p>
          <p className="text-white font-bold lg:text-7xl md:text-5xl text-2xl">
            Development
          </p>
          <p className="text-white lg:text-3xl md:text-2xl text-md">
            {portoType}
          </p>
        </div>

        <div className="grid grid-cols-2 xl:gap-12 gap-5 pt-6 z-20">
          <Modal
            imageHeight={false}
            title="HEADER 1"
            shortDescription="Short Desc"
            longDescription="PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi. 
            PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi.
            ### : 123
            ### :
            ###
            ###"
            mediaList={[
              { type: "image", src: "/placeholder-porto-plain.png" },
              { type: "image", src: "/images.jpeg" },
              { type: "image", src: "/instagram.svg" },
              {
                type: "video",
                src: "/placeholder-video.mp4",
              },
            ]}
            progressPercentage={50}
            category={portoType}
          />

          <Modal
            imageHeight={false}
            title="HEADER 2"
            shortDescription="Short Desc"
            longDescription="PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi. 
            PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi.
            ### : 123
            ### :
            ###
            ###"
            mediaList={[
              { type: "image", src: "/placeholder-porto-plain.png" },
              { type: "image", src: "/sample1.png" },
              { type: "image", src: "/placeholder-porto-plain.png" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/u31qwQUeGuM",
              },
            ]}
            progressPercentage={50}
            category={portoType}
          />

          <Modal
            imageHeight={false}
            title="HEADER 3"
            shortDescription="Short Desc"
            longDescription="PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi. 
            PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang melayani segala macam kebutuhan konstruksi bangunan di Kabupaten Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor terbaik dan terpercaya di Kabupaten Bekasi.
            ### : 123
            ### :
            ###
            ###"
            mediaList={[
              { type: "image", src: "/placeholder-porto-plain.png" },
              { type: "image", src: "/placeholder-porto-plain.png" },
              { type: "image", src: "/placeholder-porto-plain.png" },
              {
                type: "video",
                src: "https://www.youtube.com/embed/u31qwQUeGuM",
              },
            ]}
            progressPercentage={50}
            category={portoType}
          />
        </div>
      </div>
    </div>
  );
};

export default PortofolioModule;
