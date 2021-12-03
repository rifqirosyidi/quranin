module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "quranin",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
