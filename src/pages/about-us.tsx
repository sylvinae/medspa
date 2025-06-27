import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/layout";

import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";
import Testimonials from "../components/testimonials";
import ContactUs from "../components/contactUs";

const Aboutus: React.FC = () => {
  return (
    <Layout>
      <section className="relative">
        <div className="relative w-full h-[50rem] sm:h-[55rem]">
          <StaticImage
            src="../../assets/images/about-us-bg.jpg"
            alt="Services Hero"
            className="w-full h-full object-cover"
            placeholder="blurred"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-[Cormorant] font-bold tracking-wide">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#c6b7b4] py-[10rem] px-6 text-center">
        <h2 className="text-6xl font-bold text-[#222] font-[Cormorant] uppercase">
          "Your Skin, Your Story, Perfectly Polished”
        </h2>
        <p className="mt-6 text-xl text-[#444] max-w-3xl mx-auto leading-relaxed">
          At The Skin Etiquette MedSpa, our mission is to enhance timeless
          beauty through tailored, luxurious treatment. We believe every client
          has a story, and we aim to help them tell it confidently with
          perfectly polished, personalized treatments. Through advanced
          techniques, professionalism, and an unwavering commitment to safety,
          we inspire beauty from the inside out.
        </p>
      </section>

      <section className="bg-[#281D2A] py-40 px-12 text-white text-center">
        <h2 className="text-5xl font-bold font-[Cormorant] text-white uppercase tracking-wider">
          Discover how The Skin Etiquette MedSpa can help you achieve timeless
          beauty and confidence.
        </h2>
        <a
          href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="cursor-pointer bg-[white] text-black px-6 mt-20 py-3 text-base sm:text-lg rounded-md shadow-md">
            Schedule a Consultation Today!
          </Button>
        </a>
      </section>

      {/* INJECTABLES SECTION */}
      <section className="bg-[#FAF8F2]">
        <h2 className="text-6xl font-bold text-[#222] font-[Cormorant] uppercase text-center pt-10">
          MEET THE TEAM{" "}
        </h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0 py-10 items-center">
          {/* Image Left */}
          <div className="overflow-hidden">
            <StaticImage
              src="../../assets/images/joana-pic.jpg"
              alt="Joanna Magpiong"
              className="w-full h-[40rem] sm:h-[40rem] lg:h-[60.5rem] object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="text-left px-4 sm:px-6 lg:pr-14 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-[Cormorant] text-[#1C1C1C] tracking-widest mb-2">
              Joanna Magpiong, BSN, RN
            </h2>
            <p className="text-lg font-bold font-[Cormorant] tracking-wide mb-6">
              Aesthetic Nurse Specialist, The Skin Etiquette MedSpa
            </p>

            <div className="space-y-5 text-[#444] text-base sm:text-lg leading-relaxed tracking-wide">
              <p>
                Joanna Magpiong, BSN, RN, is a highly skilled and compassionate
                aesthetic nurse who blends clinical precision with an artistic
                eye to help clients embrace their natural beauty with
                confidence.
              </p>
              <p>
                With a deep commitment to enhancing—not altering—your unique
                features, Joanna delivers subtle, harmonious results through
                personalized, non-surgical aesthetic treatments.
              </p>
              <p>
                Her journey into aesthetics began with personal experience.
                Struggling with skin concerns of her own, Joanna developed a
                deep empathy for others on similar paths. This perspective now
                defines her approach: patient-centered, results-driven, and
                rooted in trust.
              </p>
              <p>
                “When you feel good about yourself, you radiate confidence and
                grace—empowering you to face life’s challenges with resilience.”
              </p>
              <p>
                Her professional background spans healthcare giants like Kaiser
                Permanente and Stanford Healthcare. She earned her Bachelor of
                Science in Nursing Magna Cum Laude and pursued extensive
                training in advanced aesthetic procedures, including
                neuromodulators, dermal fillers, biostimulators, and
                energy-based devices like Ulthera, Morpheus, and Fotona.
              </p>
              <p>
                She holds certifications from the American Association of
                Aesthetic Medicine and Surgery (AAAMS) and Aesthetic Medical
                Educator’s Training (AMET).
              </p>
              <p>
                Joanna is proficient in Neuromodulators (Tox), Dermal Fillers,
                Microneedling, Biostimulators, Chemical Peels, and Hair
                Rejuvenation—with plans to expand her offerings to energy-based
                treatments and non-invasive body contouring.
              </p>
              <p>
                Known for her warm and empathetic demeanor, Joanna creates a
                supportive and safe space where open communication is
                encouraged. She takes time to understand each client’s goals and
                concerns, crafting tailored treatment plans that prioritize
                comfort, safety, and satisfaction.
              </p>
              <p>
                Driven by her passion for continued growth, Joanna remains
                committed to staying at the forefront of aesthetic innovation,
                ensuring her clients benefit from the most advanced,
                evidence-based treatments available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#26202E]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0 py-16 items-center">
          <div className="flex flex-col-reverse md:contents">
            {/* Text Left (on large screens) */}
            <div className="text-left text-white px-4 sm:px-6 lg:pl-14 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold font-[Cormorant] text-white tracking-widest mb-2">
                Dr. Lee: Medical Director
              </h2>

              <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed tracking-wide pt-4">
                <p>
                  Michael Lee, MD is a highly skilled, board-certified
                  dermatologist and Mohs micrographic surgeon with extensive
                  experience in both medical and cosmetic dermatology.
                </p>
                <p>
                  Renowned for his expertise, Dr. Lee specializes in injectable
                  neurotoxins, dermal fillers, microneedling, transcutaneous
                  drug delivery, chemical peels, and energy-based treatments.
                </p>
                <p>
                  Dedicated to providing cutting-edge care, he tailors each
                  treatment to the unique needs of his patients. Passionate
                  about optimizing skin health and enhancing natural beauty, Dr.
                  Lee combines his deep clinical knowledge with an artistic
                  approach to help patients achieve their aesthetic goals with
                  confidence.
                </p>
                <p>
                  Known for his meticulous attention to detail and commitment to
                  excellence, he takes pride in delivering natural,
                  transformative results. Dr. Lee’s patient-centered philosophy
                  ensures every treatment plan is both effective and aligned
                  with each individual’s aspirations.
                </p>
                <p>
                  With a dedication to staying at the forefront of
                  dermatological advancements, he provides the highest standard
                  of care in a professional and welcoming environment.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="overflow-hidden">
              <StaticImage
                src="../../assets/images/dr-lee.jpg"
                alt="Dr. Michael Lee"
                className="w-full h-[24rem] sm:h-[35rem] lg:h-[50.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c6b7b4] py-[10rem] px-6 text-center">
        <h2 className="text-6xl font-bold text-[#222] font-[Cormorant] uppercase">
          "Timeless Beauty, Tailored Care"{" "}
        </h2>
        <p className="mt-6 text-xl text-[#444] max-w-3xl mx-auto leading-relaxed">
          To create a sanctuary where timeless beauty and tailored care come
          together, empowering individuals to tell their unique skin stories
          with confidence and grace.
        </p>
      </section>
    </Layout>
  );
};

export default Aboutus;

export const Head: HeadFC = () => <title>About us</title>;
