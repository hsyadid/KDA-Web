'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer_bg text-white py-12 min-w-full z-[999] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/Textures.png" 
          alt="Background Texture" 
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top section with logo and links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 mb-12">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="relative w-[50px] h-[50px]">
              <Image 
                src="/Logo.png" 
                alt="PT KARYA DIMENSI NUGRAHA" 
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-200"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-syne font-bold text-lg tracking-wide">PT KARYA DIMENSI</h3>
              <h4 className="font-syne font-bold text-lg tracking-wide">NUGRAHA</h4>
            </div>
          </div>
          
          {/* Navigation links - Desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/services" className="font-syne hover:text-yellow transition-colors">Service</Link>
            <Link href="/portfolio" className="font-syne hover:text-yellow transition-colors">Portfolio</Link>
            <Link href="/about" className="font-syne hover:text-yellow transition-colors">About Us</Link>
            <Link href="/contact" className="font-syne hover:text-yellow transition-colors">Contact Us</Link>
          </div>

          {/* Navigation links - Mobile */}
          <div className="grid grid-cols-2 gap-6 lg:hidden w-full max-w-[300px]">
            <Link href="/services" className="font-syne hover:text-yellow transition-colors text-center">Service</Link>
            <Link href="/portfolio" className="font-syne hover:text-yellow transition-colors text-center">Portfolio</Link>
            <Link href="/about" className="font-syne hover:text-yellow transition-colors text-center">About Us</Link>
            <Link href="/contact" className="font-syne hover:text-yellow transition-colors text-center">Contact Us</Link>
          </div>
        </div>
        
        {/* Divider line with gradient */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"></div>
        
        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0">
          {/* Copyright text */}
          <p className="text-sm text-center lg:text-left text-white/80">
            PT.Karya Dimensi Nugraha © 2024. All rights reserved.
          </p>
          
          {/* Social media icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow transition-colors p-2"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6-40.8 0-73.9 36.4-73.9 81.4C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow transition-colors p-2"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow transition-colors p-2"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow transition-colors p-2"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"/>
                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow transition-colors p-2"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512">
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}