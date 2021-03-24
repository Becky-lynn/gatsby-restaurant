module.exports = {
  siteMetadata: {
    title: "Thanksgiving Family Feast",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "KqzqtcFiRFgQh0Euegd3Zq6MbnC1dAsUj-u8GQoKeQQ",
        spaceId: "l3zyn6qhdua2",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
