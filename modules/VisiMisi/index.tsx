'use client';
import Image from 'next/image';

export default function VisiMisi() {
  return (
<>
        {/* Graduient diagonal */}
    <div className="absolute w-screen h-[1600px] top-0 opacity-70 brightness-125 pointer-events-none z-[3]">
        <Image 
            src="/gradient_diagonal.png" 
            alt="Background Texture" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-full h-screen"
            />
    </div>

    <div className="bg-default text-white min-h-screen overflow-hidden relative">
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 w-screen h-[90%] pointer-events-none z-[1]">
        <Image 
            src="/pattern.png" 
            alt="Office Building" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-screen h-screen"
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
            className="w-full h-screen"
            />
        </div>



      <div className="container mx-auto px-6 py-12 relative z-10 ">

        {/* VISI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 py-20 ">
          <div className="relative h-[300px] md:h-[400px] w-[130%] overflow-hidden ml-[-25%] rounded-[22px] ">
            <Image 
              src="/test.png" 
              alt="Office Building" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
          
          <div className="flex flex-col justify-center items-end">
            <h2 className="text-5xl font-bold mb-6 text-right">VISI</h2>
            <p className="text-lg text-right">
              Memberikan standar kerja secara efisien, efektif dan 
              terorganisir secara berkelanjutan melalui komitmen 
              GCG (Good Corporate Governance) dan CSR 
              (Corporate Social Responsibility)
            </p>
          </div>
        </div>
        
        {/* MISI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-5xl font-bold mb-6">MISI</h2>
            <ol className="list-decimal pl-5 space-y-3 w-[70%]">
              <li>Memenuhi demand stakeholders dengan pelayanan yang berkualitas serta inovatif</li>
              <li>Mengembangkan inovasi produk dan proses untuk memberikan solusi serta dampak bagi stakeholders</li>
              <li>Memberikan rasa aman dan nyaman melalui tiga hal: Ketepatan waktu, kualitas pengerjaan dan transparansi</li>
              <li>Mengembangkan teknologi ramah lingkungan dengan memperhatikan dampak lingkungan dan sosial</li>
              <li>Penerapan manajemen yang terintegrasi dengan wilayah operasi skala nasional</li>
            </ol>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-1 md:grid-cols-2 gap-16 py-20">
            <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-[500px]">
              <div className="relative w-16 h-16 ">
                <Image 
                  src="/play-button.svg" 
                  alt="Play Video" 
                  fill
                  style={{ objectFit: 'contain' }}
                  />
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-[500px]">
              <div className="relative w-16 h-16">
                <Image 
                  src="/play-button.svg" 
                  alt="Play Video" 
                  fill
                  style={{ objectFit: 'contain' }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
