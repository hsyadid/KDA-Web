import AboutUsModule from "@/modules/AboutUsModule";

const Page = () => {
  return (
    <>
      <div className="fixed w-screen h-screen bg-[#031817] bg-cover bg-center -z-5">
        <div className="absolute w-screen h-screen bg-[url('/bg-image.jpg')] -z-1 opacity-10" />
      </div>
      <AboutUsModule />
    </>
  );
};

export default Page;
