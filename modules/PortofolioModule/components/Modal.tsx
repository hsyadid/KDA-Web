import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { p } from "framer-motion/client";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

type MediaItem = {
  type: string;
  src: string;
  poster?: string; // Add poster/thumbnail support
  progress?: number;
};

type ModalProps = {
  imageHeight: boolean; // supposed to be zig-zag size tilling
  title: string;
  shortDescription: string;
  longDescription: string; // Detailed description for the modal
  mediaList: MediaItem[]; // List of images or videos
  progressPercentage: string;
  category: string; // INFRASTRUCTURE OR DEVELOPMENT (case insensitive)
};

const Modal = ({
  imageHeight,
  title,
  shortDescription,
  longDescription,
  mediaList,
  progressPercentage,
  category,
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>(mediaList[0]?.src || "");
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  useEffect(() => {
    if (isModalOpen && mediaList[currentIndex]?.type === "video" && mobileVideoRef.current) {
      const video = mobileVideoRef.current;
      video.load();
      video.play().then(() => {
        if (window.innerWidth <= 768) {
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if ((video as any).webkitRequestFullscreen) {
            (video as any).webkitRequestFullscreen();
          } else if ((video as any).mozRequestFullScreen) {
            (video as any).mozRequestFullScreen();
          }
        }
      }).catch(error => {
        console.error("Error playing video:", error);
        setIsVideoLoading(false);
      });
    }
  }, [isModalOpen, currentIndex, mediaList]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (mobileVideoRef.current) {
        mobileVideoRef.current.pause();
        mobileVideoRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && mobileVideoRef.current) {
        mobileVideoRef.current.pause();
        mobileVideoRef.current.currentTime = 0;
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
    };
  }, []);

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
    <div className={`${inter.className}`}>
      <div
        className={`w-full h-full rounded-md border-2 border-white/50 p-5 shadow-white hover:cursor-pointer flex flex-col`}
        style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="text-white lg:space-y-3">
          <p className="lg:text-4xl max-md:text-sm font-bold md:font-bold">
            {title}
          </p>
          <p className="lg:text-xl max-md:text-[10px] text-sm font-light">
            {shortDescription}
          </p>
        </div>
        <div className="flex-1 w-full pt-2">
          <Image
            src={mediaList[0]?.type === "video" ? "/default_video.jpg" : mediaList[0]?.src || "/placeholder-porto-plain.png"}
            alt={title}
            width={648.62}
            height={56.4}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Pop-up Modal Desktop */}
      <div
        className={`${
          isModalOpen ? "" : "hidden"
        } fixed flex flex-col max-xl:hidden  justify-center items-center w-full h-full bg-black/30 backdrop-blur-lg inset-0 z-50`}
      >
        <div className="flex flex-row justify-center items-center ml-15">
          <div className="flex flex-col space-y-9 w-[691px] ">
            <button
              className="mb-6 hover:cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <Image src="/arrow.svg" alt="Arrow Icon" width={48} height={48} />
            </button>

            <div className="w-[90%]  h-[320px] relative z-20 lg:p-5 ">
              {mediaList[currentIndex].type === "image" ? (
                <Image
                  src={mainImage}
                  alt="placeholder"
                  fill
                  priority
                  className="object-cover border-2 border-white rounded-lg"
                />
              ) : (
                <div className="relative w-full z-20 h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <video
                    ref={desktopVideoRef}
                    src={mediaList[currentIndex].src}
                    className="w-full h-full object-cover rounded-lg border-2 border-white"
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setIsVideoLoading(false)}
                    onError={(e) => {
                      console.error("Video error:", e);
                      setIsVideoLoading(false);
                    }}
                  />
                </div>
              )}

              <div className="flex absolute inset-0 z-30 justify-end text-end items-end  pr-8 pb-8">
                {category !== "Development" &&
                  mediaList[currentIndex].type === "video" && (
                    <p className="font-white font-bold text-xl text-white">
                      {mediaList[currentIndex].progress || progressPercentage}%{" "}
                      <br /> Work in Progress
                    </p>
                  )}
              </div>
            </div>

            <div className="w-[620px] relative space-x-4 justify-center z-5 flex h-[138px]">
              <Swiper
                slidesPerView={4}
                ref={swiperRef}
                spaceBetween={10}
                className="w-full"
              >
                {mediaList.map((mediaSource, index) => (
                  <SwiperSlide key={index}>
                    {mediaSource.type === "image" ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={mediaSource.src}
                          alt="placeholder"
                          fill
                          className="object-cover z-30 rounded-lg hover:cursor-pointer"
                          onClick={() => {
                            setMainImage(mediaSource.src);
                            setCurrentIndex(index);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src="/default_video.jpg"
                          alt="Video thumbnail"
                          fill
                          className="object-cover z-30 rounded-lg hover:cursor-pointer"
                          onClick={() => {
                            setMainImage(mediaSource.src);
                            setCurrentIndex(index);
                          }}
                        />
                        {category !== "Development" && (
                          <div className="absolute bottom-0 right-0 p-2 bg-black/50 text-white text-sm rounded-bl-lg">
                            {mediaSource.progress || progressPercentage}%
                          </div>
                        )}
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div
            className="space-y-5 border-1 border-white/50 lg:p-5 shadow-white lg:px-6 lg:w-[500px] lg:h-[620px] w-fit bg-[#082C2A] -translate-x-25 rounded-xl z-0"
            style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
          >
            <div className="px-15 py-15">
              <p className="text-[#FFBD59] text-[18px] font-bold text-start">
                <span className="underline">PORTOFOLIO</span> /{" "}
                <span className="underline">{category.toUpperCase()}</span>
              </p>
              <br />
              <p className="font-bold text-white text-4xl">
                KONSTRUKSI
                <br />
                {title}
              </p>
              <br />
              <p className="text-white text-md">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal Mobile View */}
      <div
        className={`${
          isModalOpen ? "" : "hidden"
        } fixed flex min-xl:hidden justify-center px-9 items-center h-full bg-black/60 inset-0 z-[1000] `}
      >
        <div
          ref={modalContentRef}
          className="border-1 px-6 pb-8 border-white/50 lg:p-5 shadow-white w-fit bg-[#082C2A] rounded-xl z-0"
          style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        >
          <div className="w-full flex justify-end pb-5 pt-5">
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <Image
                src="/exit.svg"
                alt="exit button"
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="min-md:w-full w-[300px] relative min-lg:h-[335px] min-md:h-[400px] h-[150px]">
              {mediaList[currentIndex].type === "image" ? (
                <Image
                  src={mediaList[currentIndex].src}
                  alt="placeholder"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="relative w-full h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <video
                    ref={mobileVideoRef}
                    src={mediaList[currentIndex].src}
                    className={`w-full h-full object-cover rounded-lg ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    onLoadedData={() => setIsVideoLoading(false)}
                    onError={(e) => {
                      console.error("Video error:", e);
                      setIsVideoLoading(false);
                    }}
                    onStalled={() => setIsVideoLoading(true)}
                    onWaiting={() => setIsVideoLoading(true)}
                    onPlaying={() => setIsVideoLoading(false)}
                  >
                    <source src={mediaList[currentIndex].src} type="video/mp4" />
                  </video>
                </div>
              )}
              <div className="flex absolute inset-0 z-30 justify-end text-end items-end pr-4 pb-4">
                {category !== "Development" && mediaList[currentIndex].type === "video" && !isFullscreen && (
                  <p className="font-white font-bold md:text-lg text-sm text-white">
                    {mediaList[currentIndex].progress || progressPercentage}%{" "}
                    <br /> Work in Progress
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row  pt-3 md:w-full w-fit">
              <Swiper
                slidesPerView={4}
                ref={swiperRef}
                spaceBetween={20}
                className="md:w-[700px] w-[300px] h-full"
              >
                {mediaList.map((mediaSrc, index) => (
                  <SwiperSlide key={index}>
                    {mediaSrc.type === "image" ? (
                      <div className="relative md:h-40 h-20">
                        <Image
                          src={mediaSrc.src}
                          alt="placeholder"
                          fill
                          className="object-cover rounded-lg hover:cursor-pointer"
                          onClick={() => {
                            setCurrentIndex(index);
                            setMainImage(mediaSrc.src);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="relative md:h-40 h-20">
                        <Image
                          src="/default_video.jpg"
                          alt="Video thumbnail"
                          fill
                          className="object-cover rounded-lg hover:cursor-pointer"
                          onClick={() => {
                            setCurrentIndex(index);
                            setMainImage(mediaSrc.src);
                          }}
                        />
                        {category !== "Development" && (
                          <div className="absolute bottom-0 right-0 p-2 bg-black/50 text-white text-sm rounded-bl-lg">
                            {mediaSrc.progress || progressPercentage}%
                          </div>
                        )}
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="pt-4">
              <p className="text-[#FFBD59] text-[12px] font-bold text-start">
                <span className="underline">PORTOFOLIO</span> /{" "}
                <span className="underline">{category.toUpperCase()}</span>
              </p>
              <p className="font-bold text-white text-3xl mt-3">
                KONSTRUKSI
                <br />
                {title}
              </p>
              <p className="text-white text-sm mt-2">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
