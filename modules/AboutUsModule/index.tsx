"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shadow from "./components/Shadow";

const roboto = Roboto({ subsets: ["latin"] });

type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const projectImages: ImageItem[] = [
  { src: "/sample1.png", alt: "Sample Image", width: 372, height: 681 },
  { src: "/sample1.png", alt: "Sample Image", width: 372, height: 681 },
  { src: "/sample1.png", alt: "Sample Image", width: 372, height: 681 },
];

const AboutUsModule = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className={`font-inter w-screen relative overflow-hidden`}>
        {/* Shadow Images - Fixed z-index and positioning */}

        <Image
          src="/shadow.png"
          alt="shadow"
          width={1508}
          height={127}
          className="z-0 absolute -translate-y-10"
        />

        <Image
          src="/shadow.png"
          alt="shadow"
          width={1508}
          height={127}
          className="-z-3 absolute max-lg:translate-y-96 -translate-x-44 translate-y-[600px]  "
        />

        <div className="rotate-30 translate-y-52 xl:translate-y-[700px] xl:-translate-x-40 -z-5">
          <Shadow />
        </div>

        <div className="w-fit relative mb-30">
          <Image
            src="/grid.png"
            alt="grid"
            fill
            className="opacity-20 object-cover"
          />

          {/* Desktop & Tablet View */}
          <div className="grid grid-cols-2 max-md:hidden items-center pt-24 pl-24 relative z-10">
            {/* grid image */}

            <div className="flex flex-col">
              <p className="text-white text-4xl xl:text-[80px] font-bold">
                ABOUT US
              </p>
              <p className="text-white max-lg:text-sm text-md xl:text-2xl xl:pr-20 font-inter font-medium">
                <br />
                PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang
                melayani segala macam kebutuhan konstruksi bangunan di Kabupaten
                Bekasi. Perusahaan kami selalu berusaha memberikan jasa
                kontraktor terbaik dan terpercaya di Kabupaten Bekasi.
                Terimakasih kepada semua klien yang telah mempercayakan
                pembangunan maupun renovasi rumah, serta bangunan komersial
                lainnya kepada kami.
                <br /> <br />
                Ketika anda memanfaatkan jasa kami maka tidak perlu bingung
                untuk mencari bahan bangunan atau mencari tukang profesional
                sendiri. Anda dapat mulai konsultasikan dengan kami sehingga
                bisa menghemat waktu dan tenaga anda. Untuk mendapatkan hasil
                yang maksimal anda bisa menghubungi jasa kami yang menyediakan
                jasa kontraktor di Kabupaten Bekasi.
              </p>
            </div>

            <div className="translate-x-5">
              <Image
                src="/sample.png"
                alt="image"
                width={1000}
                height={922}
                className="rounded-3xl object-fill"
              />
            </div>
          </div>

          {/* Vertical Mobile View */}
          <div className="md:hidden flex flex-col items-center text-center w-full pt-12 relative z-10 px-4 pb-4">
            <p className="text-white text-4xl font-bold">ABOUT US</p>
            <p className="text-white text-sm font-inter">
              <br />
              PT Karya Dimensi Nugraha adalah perusahaan kontraktor yang
              melayani segala macam kebutuhan konstruksi bangunan di Kabupaten
              Bekasi. Perusahaan kami selalu berusaha memberikan jasa kontraktor
              terbaik dan terpercaya di Kabupaten Bekasi. Terimakasih kepada
              semua klien yang telah mempercayakan pembangunan maupun renovasi
              rumah, serta bangunan komersial lainnya kepada kami.
              <br /> <br />
              Ketika anda memanfaatkan jasa kami maka tidak perlu bingung untuk
              mencari bahan bangunan atau mencari tukang profesional sendiri.
              Anda dapat mulai konsultasikan dengan kami sehingga bisa menghemat
              waktu dan tenaga anda. Untuk mendapatkan hasil yang maksimal anda
              bisa menghubungi jasa kami yang menyediakan jasa kontraktor di
              Kabupaten Bekasi.
            </p>

            <div className="mt-12 z-10">
              <Image
                src="/sample.png"
                alt="image"
                width={342}
                height={332}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full relative mb-28">
          <Image
            src="/grid.png"
            alt="grid"
            fill
            className="opacity-20 object-cover z-0"
          />

          {/* Non-slider for desktop only */}
          <div className="pt-16 px-10 py-10 z-30 max-2xl:hidden flex flex-row justify-center gap-10 ">
            {projectImages.map((img, i) => (
              <div key={i}>
                {/* Scratched image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-[631px] relative rounded-3xl hover:w-[682px] transition-all duration-500 z-30"
                />
              </div>
            ))}
          </div>

          {/* Slider view - Mobile only */}
          <div className="2xl:hidden w-full justify-center items-center px-12  min-md:px-24 pt-10 z-5">
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              infinite={true}
              autoPlay={true}
              showDots={true}
              autoPlaySpeed={3000}
            >
              {projectImages.map((img, i) => (
                <div key={i} className="px-2">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <Image
            src="/shadow.png"
            alt="shadow"
            width={1508}
            height={127}
            className="-z-5 absolute -translate-y-82 -translate-x-68"
          />

          <div className="text-white px-6 md:px-20 text-center pb-6 max-2xl:text-sm text-2xl mt-12">
            <p className="font-inter font-medium">
              Jasa konstruksi kami bisa mengerjakan semua pembangunan yang
              detail dan terperinci. Anda dapat membawa desain bangunan sendiri
              atau menggunakan team arsitek kami dan kami akan membangunnya.
              Selain itu anda juga bisa memberi masukan mengenai pemilihan jenis
              material dan bahan bangunan yang diinginkan. Kami akan memberikan
              saran dan masukan tentang desain serta bahan dan bangunan yang
              anda inginkan supaya lebih sempurna. Menjanjikan bangunan anda
              dibangun tepat waktu dengan kualitas yang bisa
              dipertanggungjawabkan. Dengan harga yang juga bersaing. Memberikan
              standar kerja secara efisien, efektif dan terorganisir secara
              berkelanjutan melalui komitmen GCG (Good Corporate Governance) dan
              CSR (Corporate Social Responsibility)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsModule;
