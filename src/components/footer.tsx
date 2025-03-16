import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9F7F3] py-10 px-12">
      <div className="mx-auto flex justify-between items-center">
        {/* Left-aligned Logo (Matching Header Alignment) */}
        <div className="w-[220px] flex-shrink-0">
          <StaticImage
            src="../../assets/images/logo.png"
            alt="The Skin Etiquette Medspa Logo"
            placeholder="blurred"
            layout="fixed"
            width={280}
            height={80}
          />
        </div>

        {/* Footer Links */}
        <div className="flex space-x-24 ">
          {/* Shops Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Shops</h3>
            <ul className="mt-2 text-gray-700 space-y-1">
              <li>Products</li>
              <li>Membership Programs</li>
              <li>E-Gift Card</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Patient Resources Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Patient Resources
            </h3>
            <ul className="mt-2 text-gray-700 space-y-1">
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
