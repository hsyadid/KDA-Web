'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState({
    portfolio: false,
    about: false
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    console.log('🔍 Desktop menu clicked:', menu);
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  const toggleMobileMenu = () => {
    console.log('📱 Mobile menu toggled');
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMenu(null);
    setMobileSubMenus({ portfolio: false, about: false });
  };

  const toggleMobileSubMenu = (submenu: 'portfolio' | 'about') => {
    console.log('📂 Mobile submenu toggled:', submenu);
    setMobileSubMenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

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

  const handleDesktopNavigation = (path: string) => {
    console.log('🖥️ Desktop navigation:', path);
    router.push(path);
    setOpenMenu(null);
  };

  const handleMobileNavigation = (path: string) => {
    console.log('📱 Mobile navigation:', path);
    router.push(path);
    setMobileMenuOpen(false);
    setMobileSubMenus({ portfolio: false, about: false });
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <nav className="bg-default text-white py-4 px-4 md:px-10 w-[95%] md:w-[90%] mx-auto mt-4 rounded-[22px] white_inset_shadow relative z-[1000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div onClick={() => handleDesktopNavigation('/')} className="flex items-center gap-2 md:gap-4 cursor-pointer">
            <Image
              src="/Logo.png"
              alt="PT KARYA DIMENSI NUGRAHA"
              width={35}
              height={35}
            />
            <div className="ml-1 md:ml-2">
              <h1 className="font-syne font-bold text-sm md:text-base">PT KARYA DIMENSI</h1>
              <h2 className="font-syne font-bold text-sm md:text-base">NUGRAHA</h2>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6" ref={menuRef}>
            <div className="relative">
              <div 
                onClick={() => handleDesktopNavigation('/services')}
                className="flex items-center font-inter cursor-pointer hover:text-[#FFBD59] transition-colors"
              >
                Service
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleMenu("portfolio")}
                className="flex items-center font-inter hover:text-[#FFBD59] transition-colors"
              >
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 transition-transform duration-200"
                  viewBox="0 0 512 512"
                  style={{ transform: openMenu === "portfolio" ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M112 184l144 144 144-144"
                  />
                </svg>
              </button>

              {openMenu === 'portfolio' && (
                <div className="absolute top-full left-0 w-48 bg-default mt-2 py-2 px-4 z-10 animate-slide-down rounded-[15px]">
                  <div onClick={() => handleDesktopNavigation('/porto-dev')} className="block py-2 font-inter hover:text-[#FFBD59] transition-colors cursor-pointer">Portfolio Development</div>
                  <div onClick={() => handleDesktopNavigation('/porto-infra')} className="block py-2 font-inter hover:text-[#FFBD59] transition-colors cursor-pointer">Portfolio Infrastructure</div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center font-inter hover:text-[#FFBD59] transition-colors"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 transition-transform duration-200"
                  viewBox="0 0 512 512"
                  style={{ transform: openMenu === "about" ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M112 184l144 144 144-144"
                  />
                </svg>
              </button>

              {openMenu === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-default mt-2 py-2 px-4 z-10 animate-slide-down rounded-[15px]">
                  <div onClick={() => handleDesktopNavigation('/visi-misi')} className="block py-2 font-inter hover:text-[#FFBD59] transition-colors cursor-pointer">Vision and Mission</div>
                  <div onClick={() => handleDesktopNavigation('/about-us')} className="block py-2 font-inter hover:text-[#FFBD59] transition-colors cursor-pointer">Company Profile</div>
                </div>
              )}
            </div>

            <div className="relative">
              <div 
                onClick={() => handleDesktopNavigation('/contact')}
                className="flex items-center font-inter cursor-pointer hover:text-[#FFBD59] transition-colors"
              >
                Contact Us
              </div>
            </div>
          </div>

          {/* Mobile Menu - Completely Different Approach */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 left-0 right-0 bg-default mt-4 py-4 px-6 rounded-[15px] md:hidden z-40"
              >
                {/* Service - Simple Link */}
                <div 
                  onClick={() => {
                    console.log('📱 Service clicked (mobile)');
                    handleMobileNavigation('/services');
                  }}
                  className="block py-3 font-inter border-b border-white/10 hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                >
                  Service
                </div>
                
                {/* Portfolio Section */}
                <div className="py-3 border-b border-white/10">
                  <div
                    onClick={() => {
                      console.log('📂 Portfolio header clicked (mobile)');
                      toggleMobileSubMenu('portfolio');
                    }}
                    className="flex items-center justify-between w-full font-inter group hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                  >
                    <span>Portfolio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transition-transform duration-200 group-hover:stroke-[#FFBD59]"
                      viewBox="0 0 512 512"
                      style={{ transform: mobileSubMenus.portfolio ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M112 184l144 144 144-144"
                      />
                    </svg>
                  </div>
                  
                  {/* Portfolio Submenu Items */}
                  {mobileSubMenus.portfolio && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 overflow-hidden"
                    >
                      <div 
                        onClick={() => {
                          console.log('🎯 Portfolio Development clicked (mobile)');
                          handleMobileNavigation('/porto-dev');
                        }}
                        className="block py-2 font-inter hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                      >
                        Portfolio Development
                      </div>
                      <div 
                        onClick={() => {
                          console.log('🎯 Portfolio Infrastructure clicked (mobile)');
                          handleMobileNavigation('/porto-infra');
                        }}
                        className="block py-2 font-inter hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                      >
                        Portfolio Infrastructure
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* About Section */}
                <div className="py-3 border-b border-white/10">
                  <div
                    onClick={() => {
                      console.log('📂 About header clicked (mobile)');
                      toggleMobileSubMenu('about');
                    }}
                    className="flex items-center justify-between w-full font-inter group hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                  >
                    <span>About Us</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transition-transform duration-200 group-hover:stroke-[#FFBD59]"
                      viewBox="0 0 512 512"
                      style={{ transform: mobileSubMenus.about ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M112 184l144 144 144-144"
                      />
                    </svg>
                  </div>
                  
                  {/* About Submenu Items */}
                  {mobileSubMenus.about && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 overflow-hidden"
                    >
                      <div 
                        onClick={() => {
                          console.log('🎯 Visi Misi clicked (mobile)');
                          handleMobileNavigation('/visi-misi');
                        }}
                        className="block py-2 font-inter hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                      >
                        Visi Misi
                      </div>
                      <div 
                        onClick={() => {
                          console.log('🎯 Company Profile clicked (mobile)');
                          handleMobileNavigation('/about-us');
                        }}
                        className="block py-2 font-inter hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                      >
                        Company Profile
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Contact - Simple Link */}
                <div 
                  onClick={() => {
                    console.log('📱 Contact clicked (mobile)');
                    handleMobileNavigation('/contact');
                  }}
                  className="block py-3 font-inter hover:text-[#FFBD59] transition-colors duration-200 cursor-pointer"
                >
                  Contact Us
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
