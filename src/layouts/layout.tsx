import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Promo from "../components/promo";
interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Promo />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
