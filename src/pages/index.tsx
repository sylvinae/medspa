import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/layout";

import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";

const Homepage: React.FC = () => {
  return (
    <Layout>
      <section>
        <div>
          <StaticImage
            className="h-[50rem]"
            src={"../images/hero.jpg"}
            alt={"nikka"}
          />
          <div className="justify-items-end relative top-[-300px] right-[100px] z-10 text-white">
            TIMELESS BEAUTY,
            <p className="justify-end font-[Cormorant] text-7xl font-bold">
              TAILORED CARE.
            </p>
            <Button variant="pinkish">Book Now</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Home Page</title>;
