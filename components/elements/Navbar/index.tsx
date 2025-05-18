'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = (menu: string) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle link click to close menu
  const handleLinkClick = () => {
    setOpenMenu(null);
  };

  return (
    <nav className="bg-default text-white py-4 px-10 w-[90%] mx-auto mt-4 rounded-[22px] white_inset_shadow z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/Logo.png" alt="PT KARYA DIMENSI NUGRAHA" width={35} height={35} />
          <div className="ml-2">
            <h1 className="font-inter font-bold text-base">PT KARYA DIMENSI</h1>
            <h2 className="font-inter font-bold text-base">NUGRAHA</h2>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6" ref={menuRef}>
          <div className="relative">
            <Link 
              href="/services"
              className="flex items-center font-inter"
              onClick={handleLinkClick}
            >
              Service
            </Link>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => toggleMenu('portfolio')}
              className="flex items-center font-inter"
            >
              Portfolio
              {openMenu === 'portfolio' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 512 512">
                  <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 512 512">
                  <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/>
                </svg>
              )}
            </button>
            {openMenu === 'portfolio' && (
              <div className="absolute top-full left-0 w-48 bg-default mt-2 py-2 px-4 z-10 animate-slide-down rounded-[15px]">
                <Link href="/porto-dev" className="block py-2 font-inter" onClick={handleLinkClick}>Portfolio Development</Link>
                <Link href="/porto-infra" className="block py-2 font-inter" onClick={handleLinkClick}>Portfolio Infrastructure</Link>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => toggleMenu('about')}
              className="flex items-center font-inter"
            >
              About Us
              {openMenu === 'about' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 512 512">
                  <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 512 512">
                  <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/>
                </svg>
              )}
            </button>
            {openMenu === 'about' && (
              <div className="absolute top-full left-0 w-48 bg-default mt-2 py-2 px-4 z-10 animate-slide-down rounded-[15px]">
                <Link href="/visi-misi" className="block py-2 font-inter" onClick={handleLinkClick}>Visi Misi</Link>
                <Link href="/about-us" className="block py-2 font-inter" onClick={handleLinkClick}>Company Profile</Link>
                {/* <Link href="/about/team" className="block py-2 font-inter" onClick={handleLinkClick}>Our Team</Link> */}
              </div>
            )}
          </div>
          
          <div className="relative">
            <Link 
              href="/contact"
              className="flex items-center font-inter"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
          
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
