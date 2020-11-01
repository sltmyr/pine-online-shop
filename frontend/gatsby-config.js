module.exports = {
  siteMetadata: {
    title: `PINE coat online shop`,
    description: `Creating outerwear from premium materials with exceptional craftsmanship.`,
    author: `Jan Sültemeyer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        // set to theme.headerHeight
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "PINE coat online shop",
        short_name: "PINE",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#1c441c",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
