import PortofolioModule from "@/modules/PortofolioModule";

const Page = () => {
  return (
    <>
      <div className="fixed w-full h-full bg-[#031817] bg-cover bg-center -z-5">
        <div className="absolute w-full h-full bg-[url('/bg-image.jpg')] -z-1 opacity-10" />
      </div>
      <PortofolioModule portoType="Infrastructure" />
    </>
  );
};

export default Page;
