'use client';
import Image from 'next/image';

export default function VisiMisi() {
  return (
<div className="overflow-hidden">
    {/* Graduient diagonal */}
    <div className="absolute w-screen h-[1600px] top-0 -right-0 opacity-70 brightness-125 pointer-events-none z-[3]">
        <Image 
            src="/gradient_diagonal.png" 
            alt="Background Texture" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-full h-full"
        />
    </div>

    <div className="bg-default text-white min-h-screen overflow-hidden relative">
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 w-screen h-full pointer-events-none z-[1]">
        <Image 
            src="/pattern.png" 
            alt="Office Building" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-screen h-full"
        />
        </div>
        
        {/* Background texture */}
        <div className="absolute inset-0 w-full h-full opacity-10 brightness-150 pointer-events-none z-[2]">
        <Image 
            src="/Textures.png" 
            alt="Background Texture" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-full h-full"
        />
        </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* VISI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 sm:mb-20 py-8 sm:py-20">
          <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] w-full sm:w-[130%] overflow-hidden sm:ml-[-25%] rounded-[22px] order-2 lg:order-1">
            <Image 
              src="/modal1/1.jpeg" 
              alt="Company Vision" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
          
          <div className="flex flex-col justify-center items-start lg:items-end order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-left lg:text-right w-full">VISI</h2>
            <p className="text-base sm:text-lg text-left lg:text-right max-w-[550px]">
              Memberikan standar kerja secara efisien, efektif dan 
              terorganisir secara berkelanjutan melalui komitmen 
              GCG (Good Corporate Governance) dan CSR 
              (Corporate Social Responsibility)
            </p>
          </div>
        </div>
        
        {/* MISI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 sm:mt-0">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">MISI</h2>
            <ol className="list-decimal pl-5 space-y-2 sm:space-y-3 w-full sm:w-[90%] lg:w-[80%] text-base sm:text-lg">
              <li>Memenuhi demand stakeholders dengan pelayanan yang berkualitas serta inovatif</li>
              <li>Mengembangkan inovasi produk dan proses untuk memberikan solusi serta dampak bagi stakeholders</li>
              <li>Memberikan rasa aman dan nyaman melalui tiga hal: Ketepatan waktu, kualitas pengerjaan dan transparansi</li>
              <li>Mengembangkan teknologi ramah lingkungan dengan memperhatikan dampak lingkungan dan sosial</li>
              <li>Penerapan manajemen yang terintegrasi dengan wilayah operasi skala nasional</li>
            </ol>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 py-8 sm:py-12 lg:py-20">
            <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] transition-all duration-300 hover:bg-white/20 relative overflow-hidden">
              <Image 
                src="/modal2/1.jpeg" 
                alt="Company Mission" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
  
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] transition-all duration-300 hover:bg-white/20 relative overflow-hidden">
              <Image 
                src="/modal5/1.png" 
                alt="Company Mission" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
