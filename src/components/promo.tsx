"use client";

import * as React from "react";

const promos = [
  {
    title: "Let’s Glow!",
    text: "Let’s Glow! Enjoy up to 35% off select skin & hair treatments — this month only!",
  },
  {
    title: "Wrinkle-Free, Worry-Free",
    text: "Wrinkle-Free, Worry-Free: Get $3 off per unit of Botox/Xeomin (minimum 40 units) —this month only! ✨",
  },
  {
    title: "Invest in Timeless Beauty",
    text: "Beauty Bank for Xeomin. Pre-purchase 300 units of Xeomin for $3000. This month only!Gracefully planned. Perfectly priced. ✨",
  },
  {
    title: "Pout Perfection",
    text: "Pout Perfection: Get $100 off Lip Filler — this month only! 💋",
  },
  {
    title: "Sculpt Smarter",
    text: "Sculpt Smarter: Buy 5 Liquid Lipo treatments, get 1 free Body RF. — this month only! ✨",
  },
];

const Promo: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#26202E] py-2 px-4 text-white text-center text-sm sm:text-sm md:text-lg font-medium leading-snug h-[3rem] overflow-hidden">
      <div className="relative h-full">
        {promos.map((promo, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform
              ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              }
            `}
          >
            <span className="font-bold">{promo.title}:</span> {promo.text}{" "}
            <span className="text-[#F8E16C] font-bold cursor-pointer hover:underline">
              LEARN MORE
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promo;
