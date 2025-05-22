import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `medspa`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MedSpa`,
        short_name: `MedSpa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C6A79F`,
        display: `standalone`,
        icon: `assets/images/logo.png`, // ✅ your favicon path
      },
    },
  ],
};

export default config;
