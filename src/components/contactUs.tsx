import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#2C2429] text-[#D3D3D3] py-[5rem] px-4 sm:px-6 lg:px-[5rem]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side - Contact Info + Map */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Cormorant] tracking-widest text-[#F6F6D7]">
            CONTACT US
          </h2>

          {/* Contact Details */}
          <div className="mt-6 space-y-3 text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
            <p>
              <strong>Phone:</strong> 510-935-8385
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <strong>Email:</strong>
              <a
                href="mailto:info@theSkinEtiquetteMedspa.com"
                className="flex items-center space-x-2 text-[#F8EDEB] hover:text-[#C6A79F] transition mt-1 sm:mt-0"
              >
                info@theSkinEtiquetteMedspa.com
                <FaEnvelope className="ml-2 w-5 h-5 text-[#F8EDEB]" />
              </a>
            </p>
            <p>
              <strong>Address:</strong> 15857 Channel St, San Lorenzo, CA 94580
              <br /> (Jaslynn Rose Beauty and Lashes Bldg / The Skin Etiquette
              Medspa)
            </p>
          </div>

          {/* Google Map Embed */}
          <iframe
            className="w-full h-72 sm:h-80 md:h-96 mt-6 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.8714207916914!2d-122.14482192412115!3d37.675728972010546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91fe1da4af83%3A0xa9eb491b1462d8b!2sThe%20Skin%20Etiquette%20MedSpa!5e0!3m2!1sen!2sus!4v1742125641515!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <FaFacebook className="text-[#F8EDEB] bg-[#3B5998] p-2 rounded-lg w-10 h-10 hover:opacity-80 transition" />
            <FaInstagram className="text-[#F8EDEB] bg-[#E4405F] p-2 rounded-lg w-10 h-10 hover:opacity-80 transition" />
            <FaTelegramPlane className="text-[#F8EDEB] bg-[#0088CC] p-2 rounded-lg w-10 h-10 hover:opacity-80 transition" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col items-start">
          <form className="space-y-6 w-full max-w-full sm:max-w-[450px]">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-[#D3D3D3] text-base sm:text-lg text-[#D3D3D3] py-2 focus:outline-none placeholder-[#D3D3D3]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#D3D3D3] text-base sm:text-lg text-[#D3D3D3] py-2 focus:outline-none placeholder-[#D3D3D3]"
            />

            <textarea
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-[#D3D3D3] text-base sm:text-lg text-[#D3D3D3] py-2 focus:outline-none placeholder-[#D3D3D3] resize-none h-40"
            />

            <div className="w-full flex justify-start">
              <button
                type="submit"
                className="bg-[#E0C7C2] text-black px-6 py-3 text-base sm:text-lg rounded-md shadow-md hover:bg-[#D6B5AF] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
