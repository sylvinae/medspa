import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../layouts/layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";
import services from "../api/services.json";

type Service = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  indications?: string[];
  benefits?: string[];
  mechanism?: string;
  candidate?: string[];
  comingSoon?: boolean;
  cta?: string;
};

const ServicesPage: React.FC = () => {
  const availableServices = services.filter((s) => !s.comingSoon);
  const [selectedId, setSelectedId] = React.useState<string | null>(
    availableServices.length > 0 ? availableServices[0].id : null
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const element = document.getElementById("service-details");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedService = services.find(
    (service) => service.id === selectedId && !service.comingSoon
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="relative w-full h-[50rem] sm:h-[55rem]">
          <StaticImage
            src="../../assets/images/services-hero.png"
            alt="Services Hero"
            className="w-full h-full object-cover"
            placeholder="blurred"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-black text-5xl sm:text-6xl md:text-7xl font-[Cormorant] font-bold tracking-wide">
              SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-[#1C1C1C]">
          {/* Injectables */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Injectables
            </h3>
            <ul className="space-y-3">
              {services
                .filter((s) =>
                  [
                    "neuromodulator",
                    "dermal-fillers",
                    "skinvive",
                    "liquid-lipo",
                  ].includes(s.id)
                )
                .map((s) => (
                  <li
                    key={s.id}
                    className={`p-3 rounded-lg transition hover:shadow-md cursor-pointer ${
                      s.comingSoon ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !s.comingSoon && handleSelect(s.id)}
                  >
                    <span className="hover:underline underline-offset-4">
                      {s.title}
                    </span>
                    {s.comingSoon && (
                      <span className="ml-2 text-xs text-red-500">
                        (coming soon)
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Skin & Hair */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Skin & Hair
            </h3>
            <ul className="space-y-3">
              {services
                .filter((s) =>
                  [
                    "microneedling",
                    "rf-microneedling",
                    "chemical-peels",
                    "microneedling-prf",
                    "microneedling-exosome",
                    "microneedling-rejuran",
                    "skin-growth-removal",
                    "hair-regrowth-prf",
                    "pico-laser",
                    "aquafacial",
                  ].includes(s.id)
                )
                .map((s) => (
                  <li
                    key={s.id}
                    className={`p-3 rounded-lg transition hover:shadow-md cursor-pointer ${
                      s.comingSoon ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !s.comingSoon && handleSelect(s.id)}
                  >
                    <span className="hover:underline underline-offset-4">
                      {s.title}
                    </span>
                    {s.comingSoon && (
                      <span className="ml-2 text-xs text-red-500">
                        (coming soon)
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Health & Wellness */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Health & Wellness
            </h3>
            <ul className="space-y-3">
              {services
                .filter((s) =>
                  [
                    "weight-management",
                    "vitamin-injections",
                    "virtual-consultation",
                    "in-office-consultation",
                  ].includes(s.id)
                )
                .map((s) => (
                  <li
                    key={s.id}
                    className={`p-3 rounded-lg transition hover:shadow-md cursor-pointer ${
                      s.comingSoon ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !s.comingSoon && handleSelect(s.id)}
                  >
                    <span className="hover:underline underline-offset-4">
                      {s.title}
                    </span>
                    {s.comingSoon && (
                      <span className="ml-2 text-xs text-red-500">
                        (coming soon)
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Service Section */}
      {selectedService && (
        <section id="service-details" className="bg-[#2D222D] scroll-mt-28">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0 py-10 lg:py-0 items-center">
            <div className="overflow-hidden">
              <StaticImage
                src="../../assets/images/pexels-polina-tankilevitch-3738344.png"
                alt={selectedService.title}
                className="w-full h-[24rem] sm:h-[35rem] lg:h-[50.5rem] object-cover"
              />
            </div>
            <div className="text-left px-4 sm:px-6 lg:pr-14">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[Cormorant] text-white tracking-widest py-4 lg:py-5">
                {selectedService.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-base text-gray-200 leading-relaxed tracking-wider py-4 lg:py-5">
                {selectedService.description}
              </p>
              {selectedService.cta && (
                <div className="mt-6">
                  <a
                    href="https://theskinetiquettemedspa.myaestheticrecord.com/online-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#CBB3B3] text-black hover:bg-[#bca3a3] px-6 py-3 text-base sm:text-lg rounded-md shadow-md">
                      {selectedService.cta}
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left text-[#1C1C1C] text-base sm:text-lg leading-relaxed">
              {selectedService.indications && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 tracking-wide">
                    Indications:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedService.indications.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedService.benefits && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 tracking-wide">
                    Benefits:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedService.benefits.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedService.candidate && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 tracking-wide">
                    Who's a Good Candidate?
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedService.candidate.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {selectedService.mechanism && (
              <p className="text-center text-sm sm:text-base text-gray-500 italic mt-12 max-w-4xl mx-auto leading-relaxed">
                {selectedService.mechanism}
              </p>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ServicesPage;
export const Head: HeadFC = () => <title>Services</title>;
