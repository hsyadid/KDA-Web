import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });

type MediaItem = {
  type: string;
  src: string;
};

type ModalProps = {
  imageHeight: boolean; // supposed to be zig-zag size tilling
  title: string;
  shortDescription: string;
  longDescription: string; // Detailed description for the modal
  mediaList: MediaItem[]; // List of images or videos
  progressPercentage: number;
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className={`${inter.className}`}>
      <div
        className={`w-full rounded-md border-2 border-white/50 p-5 shadow-white hover:cursor-pointer`}
        style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="text-white lg:space-y-3">
          <p className="lg:text-5xl max-md:text-xl text-2xl font-bold">
            {title}
          </p>
          <p className="lg:text-3xl max-md:text-md text-xl">
            {shortDescription}
          </p>
        </div>
        <div className="w-full flex h-full items-center justify-center">
          <Image
            src={mediaList[0]?.src || "/placeholder-porto-plain.png"}
            alt={title}
            width={653.62}
            height={56.4}
            className={`rounded-md md:mt-8 ${
              imageHeight && "lg:h-96"
            } w-full object-cover`}
          />
        </div>
      </div>

      {/* Pop-up Modal Desktop */}
      <div
        className={`${
          isModalOpen ? "" : "hidden"
        } fixed flex flex-col max-xl:hidden justify-center items-center w-full h-full bg-black/60 inset-0 z-50`}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col space-y-9 w-[691px]">
            <button
              className="mb-6 hover:cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <Image src="/arrow.svg" alt="Arrow Icon" width={53} height={50} />
            </button>

            <div className="w-full  h-[410px] relative ">
              {mediaList[currentIndex].type === "image" ? (
                <Image
                  src={mainImage}
                  alt="placeholder"
                  fill
                  className="object-cover z-20 rounded-lg"
                />
              ) : (
                <div className="relative w-full z-20 h-full">
                  <video
                    src={mediaList[currentIndex].src}
                    className="w-full h-full  object-cover rounded-lg "
                    autoPlay
                  />
                </div>
              )}

              <div className="flex absolute inset-0 z-30 justify-end text-end items-end  pr-4 pb-4">
                <p className="font-white font-bold text-xl text-white">
                  {progressPercentage}% <br /> Work in Progress
                </p>
              </div>
            </div>

            <div className="w-[691px] relative space-x-4 justify-center z-5 flex h-[138px]">
              {mediaList.map((mediaSource, index) =>
                mediaSource.type === "image" ? (
                  <div className="relative w-1/4">
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
                  <div className="relative w-1/4 h-full">
                    <video
                      src={mediaSource.src}
                      className="w-full h-full object-cover rounded-lg hover:cursor-pointer"
                      onClick={() => {
                        setMainImage(mediaSource.src);
                        setCurrentIndex(index);
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div
            className="space-y-5 border-1 border-white/50 lg:p-5 shadow-white lg:px-6 lg:w-[597px] lg:h-[731px] w-fit bg-[#082C2A] -translate-x-10 rounded-xl z-0"
            style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
          >
            <div className="px-26 py-20">
              <p className="text-[#FFBD59] text-[18px] font-bold text-start">
                <span className="underline">PORTOFOLIO</span> /{" "}
                <span className="underline">{category.toUpperCase()}</span>
              </p>
              <br />
              <p className="font-bold text-white text-5xl">
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
        } fixed flex min-xl:hidden justify-center px-9 items-center h-full bg-black/60 inset-0 z-50 `}
      >
        <div
          className="border-1  px-6 pb-8  border-white/50 lg:p-5 shadow-white w-fit bg-[#082C2A] rounded-xl z-0"
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
          <div>
            <div className="min-md:w-full w-[300px] relative min-lg:h-[335px] min-md:h-[400px] h-[150px]">
              {mediaList[currentIndex].type === "image" ? (
                <Image
                  src={mediaList[currentIndex].src}
                  alt="placeholder"
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <video
                  src={mediaList[currentIndex].src}
                  className="w-full h-full  object-cover rounded-lg "
                  autoPlay
                />
              )}
              <div className="flex absolute inset-0 z-30 justify-end text-end items-end  pr-4 pb-4">
                <p className="font-white font-bold md:text-lg text-sm text-white">
                  {progressPercentage}% <br /> Work in Progress
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 pt-3 h-">
              {mediaList.map((mediaSrc, index) =>
                mediaSrc.type === "image" ? (
                  <div className="relative w-1/2 h-[65px] md:h-[100px] lg:h-[150px]">
                    <Image
                      src={mediaSrc.src}
                      alt="placeholder"
                      fill
                      className="object-cover rounded-lg"
                      onClick={() => {
                        setCurrentIndex(index);
                        setMainImage(mainImage);
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-1/2">
                    <video
                      src={mediaSrc.src}
                      className="w-full h-full object-cover rounded-lg hover:cursor-pointer"
                      onClick={() => {
                        setCurrentIndex(index);
                        setMainImage(mainImage);
                      }}
                    />
                  </div>
                )
              )}
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

        {/* <div
          className="border-1 pt-7 px-6 pb-6 border-white/50 lg:p-5 shadow-white w-fit bg-[#082C2A] rounded-xl z-0"
          style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)" }}
        >
          <div className="w-full flex justify-end pb-5">
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
          <div className="relative">
            <div className="flex h-fit">
              {mediaList[currentIndex].type === "image" ? (
                <div className="w-full">
                  <Image
                    src={mediaList[currentIndex].src}
                    alt={title}
                    width={508}
                    height={135}
                    className="rounded-lg w-full z-10"
                  />
                </div>
              ) : (
                <video
                  src={mediaList[currentIndex].src || mainImage}
                  width={400}
                  height={400}
                  autoPlay
                  controls
                  className="rounded-lg w-full max-sm:h-fit z-20"
                />
           
              )}
            </div>
            <div className="absolute inset-0 flex   items-center justify-between">
              <button className="z-30 hover:cursor-pointer " onClick={prev}>
                <Image
                  src="/chevron-left.svg"
                  alt="arrow left"
                  width={30.12}
                  height={20.12}
                />
              </button>
              <button className="z-30 hover:cursor-pointer" onClick={next}>
                <Image
                  src="/chevron-right.svg"
                  alt="arrow right"
                  width={30.12}
                  height={20.12}
                />
              </button>
            </div>
            <div className="absolute flex inset-0 z-10 shadow-2xl items-end text-end justify-end p-2">
              <p className="text-white font-semibold max-md:text-[12px] text-2xl pr-3">
                {progressPercentage}% <br /> Work in Progress
              </p>
            </div>
          </div>
          <div className="flex h-fit justify-center flex-row gap-3 pt-3">
            {mediaList.map((media, index) =>
              media.type === "image" ? (
                <div className="w-full h-fit hover:cursor-pointer">
                  <Image
                    key={index}
                    src={media.src}
                    alt={title}
                    width={500}
                    height={50}
                    layout="responsive"
                    className="rounded-lg object-cover"
                    onClick={() => {
                      setCurrentIndex(index);
                      setMainImage(media.src);
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h hover:cursor-pointer">
                  <video
                    src={media.src}
                    key={index}
                    className={`w-full aspect-[${
                      mediaList.length - 1
                    }/1] rounded-lg h-full`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setMainImage(media.src);
                    }}
                  />
                
                </div>
              )
            )}
          </div>

          <div className="pt-3 w-fit">
            <p className="text-sm font-bold text-[#FFBD59]">
              <span className="underline">PORTOFOLIO</span> /{" "}
              <span className="underline">{category.toUpperCase()}</span>
            </p>
            <br />
            <p className="text-white font-bold text-2xl">{title}</p>

            <p className="max-md:text-[12px] text-lg text-white">
              {longDescription}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
