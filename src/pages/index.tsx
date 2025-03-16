import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/layout";

import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";
import Testimonials from "../components/testimonials";
import ContactUs from "../components/contactUs";

const Homepage: React.FC = () => {
  return (
    <Layout>
      <section className="relative">
        <div className="relative w-full h-[50rem]">
          <StaticImage
            className="w-full h-full object-cover"
            src="../../assets/images/hero.jpg"
            alt={"nikka"}
          />
          <div className="absolute inset-0 flex flex-col justify-end items-end p-20 z-10">
            <div className="text-right">
              <p className="text-[4rem] leading-none font-[Cormorant] font-bold text-white mix-blend-normal opacity-95 drop-shadow-4xl tracking-[0.2em]">
                TIMELESS BEAUTY,
              </p>
              <p className="text-[4rem] leading-none font-[Cormorant] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#C6A79F] drop-shadow-4xl tracking-[0.2em]">
                TAILORED CARE.
              </p>
            </div>
            <a
              href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer mt-6 mr-4 bg-[#DFD2D6] text-black px-6 py-3 text-lg rounded-md shadow-md tracking-wider">
                BOOK NOW
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#C1A3AD] py-[10rem] px-6 text-center">
        <h2 className="text-5xl font-bold text-[#222] font-[Cormorant]">
          EMBRACE YOUR GLOW
        </h2>
        <p className="mt-6 text-lg text-[#444] max-w-3xl mx-auto leading-relaxed">
          At The Skin Etiquette MedSpa, we offer a curated selection of advanced
          aesthetic treatments designed to enhance your natural beauty while
          prioritizing your comfort and care. Explore our luxurious,
          science-backed services below:
        </p>
      </section>

      <section className="bg-[#281D2A] py-20 px-12 text-white text-center">
        <h2 className="text-5xl font-bold font-[Cormorant] text-white">
          WHAT WE OFFER
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Explore some of our options...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto mt-12">
          <div>
            <StaticImage
              src="../../assets/images/Layer-2.png"
              alt="Skin Medica TNS Advanced Serum"
              className="rounded-2xl"
            />
            <p className="mt-4 text-lg text-gray-300">
              Skin Medica TNS Advanced Serum
            </p>
          </div>
          <div>
            <StaticImage
              src="../../assets/images/Layer-3.png"
              alt="Skin Medica HA5"
              className="rounded-2xl"
            />
            <p className="mt-4 text-lg text-gray-300">Skin Medica HA5</p>
          </div>
          <div>
            <StaticImage
              src="../../assets/images/Layer-4.png"
              alt="Benev Regenerative Exosome +"
              className="rounded-2xl"
            />
            <p className="mt-4 text-lg text-gray-300">
              Benev Regenerative Exosome +
            </p>
          </div>
          <div>
            <StaticImage
              src="../../assets/images/Layer-5.png"
              alt="Rejuran Salmon DNA Booster"
              className="rounded-2xl"
            />
            <p className="mt-4 text-lg text-gray-300">
              Rejuran Salmon DNA Booster
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F2]">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="overflow-hidden">
            <StaticImage
              src="../../assets/images/pexels-cottonbro-7583372.jpg"
              alt="Injectables"
              className="w-full h-[50.5rem] object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left pr-14">
            <h2 className="text-6xl font-bold font-[Cormorant] text-[#1C1C1C] tracking-widest py-5">
              INJECTABLES
            </h2>
            <p className="mt-4 text-lg text-[#444] leading-relaxed tracking-wider py-5">
              <b>Sculpt, smooth, and enhance with precision.</b> Our advanced
              injectables are designed to refine and restore your natural beauty
              with precision and care. Whether softening fine lines with
              Neuromodulators (Tox), restoring volume with Dermal Fillers,
              stimulating collagen with Biostimulators, or contouring with
              Liquid Lipo, our expert techniques deliver subtle yet
              transformative results tailored to your unique features.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-[#4C2E4C] text-white px-6 py-3 text-lg rounded-md shadow-md">
                  Book Now
                </Button>
              </a>
              <Button className="border border-gray-500 text-black px-6 py-3 text-lg rounded-md shadow-sm">
                See all services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#26202E]">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white pl-14">
            <h2 className="text-6xl font-bold font-[Cormorant] tracking-widest py-5">
              SKIN AND HAIR <br /> TREATMENTS
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed tracking-wider py-5">
              <b>Radiance starts with healthy skin & hair.</b> Our advanced
              treatments go beyond the surface to rejuvenate, refresh, and
              enhance your natural beauty. From microneedling with advance skin
              boosters to chemical peels, medical-grade facials, and
              energy-based devices, we address concerns like fine lines, uneven
              texture, pigmentation, and dullness to reveal a radiant, youthful
              complexion. With a personalized approach, we ensure your skin and
              scalp receive the expert care they need for long-lasting results.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-[#E0C7C2] text-black px-6 py-3 text-lg rounded-md shadow-md">
                  Book Now
                </Button>
              </a>
              <Button className="border border-gray-400 text-white px-6 py-3 text-lg rounded-md shadow-sm">
                See all services
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="overflow-hidden">
            <StaticImage
              src="../../assets/images/pexels-juanlaurio-2144413.jpg"
              alt="Skin and Hair Treatments"
              className="w-full h-[50.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F2]">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="overflow-hidden">
            <StaticImage
              src="../../assets/images/spanawng.png"
              alt="Wellness Treatment"
              className="w-full h-[50.5rem] object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left pr-14">
            <h2 className="text-6xl font-bold font-[Cormorant] text-[#1C1C1C] tracking-widest py-5">
              WELLNESS
            </h2>
            <p className="mt-4 text-lg text-[#444] leading-relaxed tracking-wider py-5">
              <b>
                Beauty begins from within- Elevate your health, enhance your
                beauty.
              </b>{" "}
              Our wellness treatments are designed to nourish, detoxify, and
              restore balance to your skin and body. Whether you’re looking to
              boost energy, enhance metabolism, support skin health, or manage
              weight, our carefully curated treatments provide integrative care
              to help you look and feel your best.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#4C2E4C] text-white px-6 py-3 text-lg rounded-md shadow-md">
                  Book Now
                </Button>
              </a>
              <Button className="cursor-pointer border border-gray-500 text-black px-6 py-3 text-lg rounded-md shadow-sm">
                See all services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <ContactUs />
      </section>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Home Page</title>;
