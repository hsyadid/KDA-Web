import PortofolioModule from "@/modules/PortofolioModule";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="fixed w-full h-full bg-[#031817] bg-cover bg-center -z-5">
        <div className="absolute w-full h-full bg-[url('/bg-image.jpg')] -z-1 opacity-10" />
      </div>

      <PortofolioModule portoType="Development" />
    </>
  );
};

export default Page;
