import * as React from "react";
import Button from "./button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="w-1/4">da skin etik logo</div>
        <div className="flex justify-end w-3/4 space-x-4">
          <Button variant="text">SERVICES</Button>
          <Button variant="text">SHOP</Button>
          <Button variant="text">ABOUT US</Button>
          <Button variant="text">PATIENT RESOURCES</Button>
          <Button variant="black">Book Now</Button>
          <Button variant="white">Join</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
