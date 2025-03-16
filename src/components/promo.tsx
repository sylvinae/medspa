import * as React from "react";

const Promo: React.FC = () => {
  return (
    <section className="bg-[#573746] py-3 text-white text-center text-lg font-medium">
      Get <span className="font-bold">10% off</span> lorem ipsum! Limited time
      only!{" "}
      <span className="text-[#F8E16C] font-bold cursor-pointer hover:underline">
        LEARN MORE
      </span>
    </section>
  );
};

export default Promo;
