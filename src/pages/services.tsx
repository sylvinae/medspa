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

      {/* Services List */}
      <section className="bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-[Cormorant] font-bold mb-6 text-[#1C1C1C]">
            SERVICES
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-10">
            Click on a service below to see details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-2 text-left text-[#1C1C1C] font-light tracking-wide">
            {services.map((item, index) => {
              const isSelected = selectedId === item.id;
              return (
                <p
                  key={item.id}
                  className={`text-sm sm:text-base leading-relaxed transition-all duration-200 px-2 py-1 rounded-md ${
                    item.comingSoon
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:bg-[#f4f4f4]"
                  } ${
                    isSelected
                      ? "bg-[#f1e9e6] font-medium border-l-4 border-[#c6a79f]"
                      : ""
                  }`}
                  onClick={() => !item.comingSoon && handleSelect(item.id)}
                >
                  <span className="mr-2 text-gray-500">{index + 1}.</span>
                  <span className="underline underline-offset-4 hover:text-[#c6a79f]">
                    {item.title}
                    {item.comingSoon && (
                      <span className="ml-1 text-xs text-red-500">
                        (coming soon)
                      </span>
                    )}
                  </span>
                </p>
              );
            })}
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
