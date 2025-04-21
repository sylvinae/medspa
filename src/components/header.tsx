import * as React from "react";
import Button from "./button";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Promo from "./promo";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Promo />

      {/* Main Header */}
      <div className="w-full bg-transparent py-4 px-6 md:px-12 flex items-center justify-between ">
        {/* Logo */}
        <div className="w-[180px] md:w-[220px] flex-shrink-0">
          <StaticImage
            src="../../assets/images/logo.png"
            alt="The Skin Etiquette Medspa Logo"
            placeholder="blurred"
            layout="fixed"
            width={220}
            height={70}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          <nav
            className={`flex items-center space-x-[3rem] text-lg transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              SERVICES
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              SHOP
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              ABOUT US
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              PATIENT RESOURCES
            </button>

            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer bg-black text-white px-10 py-2 rounded-md shadow-md tracking-wider uppercase font-medium text-sm sm:text-base">
                Book Now
              </Button>
            </a>

            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer border border-gray-400 px-10 py-2 rounded-md shadow-sm tracking-wider uppercase font-medium text-sm sm:text-base">
                Join
              </Button>
            </a>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-black focus:outline-none"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6">
          {/* Top - Logo + Close Button */}
          <div className="flex items-center justify-between">
            <div className="w-[160px]">
              <StaticImage
                src="../../assets/images/logo.png"
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
                width={160}
                height={50}
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-black"
            >
              <FiX />
            </button>
          </div>

          {/* Middle - Nav Links */}
          <div className="mt-10 flex flex-col space-y-5 text-black text-lg font-light">
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              SERVICES
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              SHOP
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              ABOUT US
            </button>
            <button className="tracking-wide uppercase font-medium text-sm sm:text-base transition-all duration-200 hover:text-[#C6A79F]">
              PATIENT RESOURCES
            </button>
          </div>

          {/* Bottom - Buttons */}
          <div className="flex flex-col space-y-4 pt-10">
            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-black text-white py-2 rounded-md shadow-md tracking-wider uppercase font-medium text-sm sm:text-base">
                Book Now
              </Button>
            </a>
            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full border border-gray-400 py-2 rounded-md shadow-sm tracking-wider uppercase font-medium text-sm sm:text-base">
                Join
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
