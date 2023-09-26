/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    flags: {
        DEV_SSR: true
        },
  siteMetadata: {
    title: `thegraffbrothersdotcom`,
    siteUrl: `https://www.thegraffbrothers.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-91404736-2",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
