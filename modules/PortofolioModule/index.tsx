"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Modal from "./components/Modal";
import { progressPercentage } from "framer-motion";

const dmSans = DM_Sans({ subsets: ["latin"] });

type PortofolioModuleProps = {
  portoType: string;
};

const PortofolioModuleDev = ({ portoType }: PortofolioModuleProps) => {
  // Create ref for Swiper instance
  const swiperRef = useRef<SwiperRef>(null);
  const [mainImage, setMainImage] = useState(
    portoType === "Development" ? "/modal1/1.jpeg" : "/modal5/1.png"
  );
  const [title, setTitle] = useState("Konstruksi Rumah ABCD");
  const [desc, setDesc] = useState(
    "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD"
  );

  const imageList1 = Array.from({ length: 28 }, (_, i) => ({
    type: "image",
    src: `/modal1/${i + 1}.jpeg`,
  }));

  const mediaList1 = [
    ...imageList1,
    {
      type: "video",
      src: "modal1/IPB_DEV_VID.mp4",
    },
  ];

  const imageList2 = Array.from({ length: 28 }, (_, i) => ({
    type: "image",
    src: `/modal2/${i + 1}.jpeg`,
  }));

  const mediaList2 = [
    ...imageList2,
    {
      type: "video",
      src: "modal2/KAI_DEV_VID.mp4",
    },
  ];

  const imageList3 = Array.from({ length: 3 }, (_, i) => ({
    type: "image",
    src: `/modal3/${i + 1}.jpeg`,
  }));

  const mediaList3 = [...imageList3];

  const imageList5 = Array.from({ length: 2 }, (_, i) => ({
    type: "image",
    src: `/modal5/${i + 1}.png`,
    progress: i === 0 ? 45 : 60
  }));

  const mediaList5 = [
    ...imageList5,
    {
      type: "video",
      src: "modal5/1.mp4",
      progress: 70
    },
    {
      type: "video",
      src: "modal5/2.mp4",
      progress: 85
    },
  ];

  const imageList6 = Array.from({ length: 3 }, (_, i) => ({
    type: "image",
    src: `/modal6/${i + 1}.png`,
    progress: i === 0 ? 30 : i === 1 ? 50 : 75
  }));

  const mediaList6 = [
    ...imageList6,
    {
      type: "video",
      src: "modal6/1.mp4",
      progress: 40
    },
    {
      type: "video",
      src: "modal6/2.mp4",
      progress: 65
    },
    {
      type: "video",
      src: "modal6/3.mp4",
      progress: 80
    },
  ];

  const imageList7 = Array.from({ length: 3 }, (_, i) => ({
    type: "image",
    src: `/modal7/${i + 1}.png`,
    progress: i === 0 ? 25 : i === 1 ? 40 : 65
  }));

  const mediaList7 = [
    ...imageList7,
    {
      type: "video",
      src: "modal7/1.mp4",
      progress: 35
    },
    {
      type: "video",
      src: "modal7/2.mp4",
      progress: 55
    },
    {
      type: "video",
      src: "modal7/3.mp4",
      progress: 75
    },
  ];

  const imageList8 = Array.from({ length: 3 }, (_, i) => ({
    type: "image",
    src: `/modal8/${i + 1}.png`,
    progress: i === 0 ? 35 : i === 1 ? 55 : 80
  }));

  const mediaList8 = [
    ...imageList8,
    {
      type: "video",
      src: "modal8/1.mp4",
      progress: 45
    },
    {
      type: "video",
      src: "modal8/2.mp4",
      progress: 60
    },
    {
      type: "video",
      src: "modal8/3.mp4",
      progress: 90
    },
  ];

  const developmentSlides = [
    {
      image: "/modal1/1.jpeg",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal1/2.jpeg",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal1/3.jpeg",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal1/4.jpeg",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal2/1.jpeg",
      title: "Konstruksi Rumah Hunian EFG",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal2/2.jpeg",
      title: "Konstruksi Rumah Hunian IJK",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal2/3.jpeg",

      title: "Konstruksi Rumah Hunian LMN",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal3/2.jpeg",

      title: "Konstruksi Rumah Hunian OPQ",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal3/3.jpeg",

      title: "Konstruksi Rumah Hunian RST",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
  ];

  const infrastructureSlides = [
    {
      image: "/modal5/1.png",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal5/2.png",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal6/1.png",

      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal6/2.png",
      title: "Konstruksi Rumah Hunian ABC",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal6/3.png",
      title: "Konstruksi Rumah Hunian EFG",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal7/1.png",

      title: "Konstruksi Rumah Hunian IJK",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal7/2.png",

      title: "Konstruksi Rumah Hunian LMN",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
    {
      image: "/modal7/3.png",

      title: "Konstruksi Rumah Hunian OPQ",
      desc: "Konstruksi Rumah EFGH Konstruksi Rumah EFGH Konstruksi Rumah EFGH",
    },
    {
      image: "/modal7/5.png",

      title: "Konstruksi Rumah Hunian RST",
      desc: "Konstruksi Rumah ABCD Konstruksi Rumah ABCD Konstruksi Rumah ABCD",
    },
  ];

  const slides =
    portoType === "Development" ? developmentSlides : infrastructureSlides;

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
    <div className={`${dmSans.className} `}>
      {/* Desktop View */}
      <div className="flex max-md:hidden -translate-y-24 flex-row items-center h-[110vh] overflow-hidden bg-gradient-to-t from-[#082C2A] to-[##031817] overflow-x-hidden">
        <Image
          src="/grid.png"
          alt="background-grid"
          fill
          className="object-cover opacity-10 -z-2 "
        />

        {/* Left Side Image */}
        <div className="relative w-full h-full ">
          <Image
            src={mainImage}
            alt="Sample Image"
            fill
            className="object-cover "
          />
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-green-1 to-transparent pointer-events-none" />
        </div>

        {/* Right Side Content */}
        <div className="w-1/2  pl-14 flex items-center text-start pt-24 xl:pt-25 ">
          <div className="flex flex-col pr-9 w-full">
            <p className="text-[#FFBD59] font-bold xl:text-2xl text-md ">
              {portoType}
            </p>
            <p className="text-white xl:text-[2.7vw] text-4xl font-bold mt-4">
              {title}
            </p>
            <p className=" xl:text-xl text-lg  text-white mt-4 line-clamp-3 pr-20">
              {desc}
            </p>

            {/* Carousel */}
            <div className="xl:mt-10 mt-10 -translate-x-67 relative bg-red-500s">
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
                    slidesPerView: 4, // lg
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
                className="w-[1100px]"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full relative h-[320px] ${
                        index % 2 === 0 ? "items-end" : "items-start"
                      } flex`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-xl w-full "
                        onClick={() => {
                          setMainImage(slide.image);
                          setTitle(slide.title);
                          setDesc(slide.desc);
                        }}
                      />

                      {/* sillhoute below */}
                      <div className="absolute w-full h-1/3 opacity-40 rounded-t-lg bg-[#215A58] blur-xl" />
                      <p className="text-white xl:text-2xl text-xl absolute font-bold p-5 mt-2 z-10">
                        {slide.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex w-full justify-end mt-7">
              <button
                className="text-white hover:cursor-pointer transition-opacity hover:opacity-75"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <Image
                  src="/chevron-left.svg"
                  alt="left arrow"
                  width={35}
                  height={35}
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
                  width={35}
                  height={35}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative min-md:hidden w-full h-[450px] -mt-25">
        <Image
          src={portoType === "Development" ? "/modal1/1.jpeg" : "/modal5/1.png"}
          alt="Sample Image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col text-center justify-center px-4">
          <p className="text-[#FFBD59] font-bold text-2xl">{portoType}</p>
          <p className="text-white text-3xl font-bold ">
            {portoType === "Development" 
              ? "INNOPRENEURSHIP CENTRE MANDIRI IPB"
              : "SMPN 7 TAMBUN"
            }
          </p>
        </div>
      </div>

      <div className="px-3 py-5">
        <div
          className="w-full min-md:hidden  rounded-md border-1 border-white/50 p-3 shadow-white"
          style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        >
          <p className="text-[12px] text-white text-center ">
            {portoType === "Development"
              ? "Mengembangkan solusi inovatif dan efisien yang mendukung pertumbuhan dan kemajuan teknologi melalui proses pengembangan terstruktur."
              : "Membangun fondasi yang kuat untuk mendukung sistem dan operasi bisnis dengan sumber daya yang handal dan terkelola dengan baik."
            }
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
            {portoType === "Development"
              ? "Development Planers"
              : portoType}
          </p>
          <p className="text-white lg:text-3xl md:text-2xl text-md">
            All works
          </p>
        </div>

        <div className="grid grid-cols-2 auto-rows-auto justify-center xl:gap-12 gap-5 pt-6 z-20">
          {portoType === "Development" ? (
            <>
              <div className="row-span-1">
              <Modal
                imageHeight={false}
                title="KAI SERPONG"
                shortDescription=""
                longDescription="Pembangunan fasilitas dan infrastruktur untuk mendukung operasional transportasi di kawasan Serpong, meningkatkan aksesibilitas dan kenyamanan pengguna jasa kereta api."
                mediaList={mediaList2}
                progressPercentage={50}
                category={portoType}
              />
              </div>
                <Modal
                  imageHeight={true}
                  title="INNOPRENEURSHIP CENTRE MANDIRI IPB"
                  shortDescription=""
                  longDescription="Pembangunan pusat inovasi dan kewirausahaan di IPB untuk mendukung pengembangan ide dan kolaborasi antar pelaku bisnis dan mahasiswa."
                  mediaList={mediaList1}
                  progressPercentage={50}
                  category={portoType}
                />

<Modal
                  imageHeight={true}
                  title="PEMANCINGAN PASIR TANJUNG"
                  shortDescription=""
                  longDescription="Pembangunan area pemancingan di Pasir Tanjung yang dirancang untuk menyediakan fasilitas rekreasi dan hiburan bagi pengunjung, dengan fokus pada kenyamanan dan keindahan alam."
                  mediaList={[
                    { type: "image", src: "/modal4/1.png" },
                    { type: "video", src: "/modal4/1.mp4" },
                  ]}
                  progressPercentage={50}
                  category={portoType}
                />


              <div className=" row-span-3">
                
              <Modal
                imageHeight={false}
                title="MANDIRI FLAT TASIKMALAYA"
                shortDescription=""
                longDescription="Pembangunan kompleks perumahan Mandiri Flat di Tasikmalaya, yang dirancang untuk menyediakan hunian vertikal yang nyaman dan terjangkau bagi masyarakat setempat."
                mediaList={mediaList3}
                progressPercentage={50}
                category={portoType}
              />
              </div>
            </>
          ) : (
            <>
              <Modal
                imageHeight={false}
                title="SMPN 7 TAMBUN"
                shortDescription=""
                longDescription="Pembangunan fasilitas sekolah SMPN 7 di Tambun untuk mendukung pendidikan dengan menyediakan ruang belajar yang modern dan nyaman bagi siswa dan tenaga pengajar."
                mediaList={mediaList5}
                progressPercentage={50}
                category={portoType}
              />

              <div className="row-span-2">
                <Modal
                  imageHeight={true}
                  title="STADION MINI BOJONG MANGU"
                  shortDescription=""
                  longDescription="Pembangunan stadion mini di Bojong Mangu untuk meningkatkan fasilitas olahraga dan mendukung kegiatan olahraga lokal dengan fasilitas yang memadai dan akses mudah bagi masyarakat."
                  mediaList={mediaList6}
                  progressPercentage={50}
                  category={portoType}
                />
              </div>

              <div className="row-span-2">
                <Modal
                  imageHeight={true}
                  title="UPTD PPA"
                  shortDescription=""
                  longDescription="Pembangunan Unit Pelaksana Teknis Daerah Perlindungan Perempuan dan Anak (UPTD PPA) untuk menyediakan fasilitas layanan yang mendukung perlindungan dan pemberdayaan perempuan serta anak di daerah."
                  mediaList={mediaList7}
                  progressPercentage={50}
                  category={portoType}
                />
              </div>

              <Modal
                imageHeight={false}
                title="WORKSHOP BINAMARGA"
                shortDescription="Short Desc"
                longDescription="Pembangunan fasilitas workshop Binamarga untuk mendukung pemeliharaan dan perbaikan infrastruktur jalan, serta meningkatkan kualitas pelayanan dan kinerja sektor transportasi."
                mediaList={mediaList8}
                progressPercentage={50}
                category={portoType}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortofolioModuleDev;
