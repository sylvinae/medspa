import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#bfafa0] py-10 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto  flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Logo */}
        <div className="w-auto">
          <div className="max-w-[220px]">
            <StaticImage
              src="../../assets/images/logo.png"
              alt="The Skin Etiquette Medspa Logo"
              placeholder="blurred"
              layout="constrained"
              width={220}
              height={70}
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 text-left">
          {/* Shops Column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Shops
            </h3>
            <ul className="mt-2 text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Products</li>
              <li>Membership Programs</li>
              <li>E-Gift Card</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Patient Resources Column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Patient Resources
            </h3>
            <ul className="mt-2 text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Patient Portal</li>
              <li>Promotions, seasonal deals, etc</li>
              <li>Clinic Policies</li>
              <li>Financing</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
