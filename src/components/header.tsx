import * as React from "react";
import Button from "./button";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white py-4 px-12 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-[220px] flex-shrink-0">
          <StaticImage
            src="../../assets/images/logo.png"
            alt="The Skin Etiquette Medspa Logo"
            placeholder="blurred"
            layout="fixed"
            width={220}
            height={70}
          />
        </div>

        {/* Menu + Buttons (Grouped Together) */}
        <div className="flex items-center space-x-12">
          {/* Navigation */}
          <nav className="flex items-center space-x-[3rem] text-black text-lg">
            <button className="font-light hover:opacity-80">SERVICES</button>
            <button className="font-light hover:opacity-80">SHOP</button>
            <button className="font-light hover:opacity-80">ABOUT US</button>
            <button className="font-light hover:opacity-80">
              PATIENT RESOURCES
            </button>
            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer bg-black text-white px-10 py-2 text-lg rounded-md shadow-md tracking-wider">
                Book Now
              </Button>
            </a>

            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer border border-gray-400 px-10 py-2 text-lg rounded-md shadow-sm tracking-wider">
                Join
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
