require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Leon Brown`,
    description: `My developer portfolio.`,
    siteUrl: `https://leonbrown.dev`,
    author: `Leon Brown`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leon Brown`,
        short_name: `Leon Brown`,
        start_url: `/`,
        background_color: `#f6f4f1`,
        theme_color: `#1d1d1d`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        lang: `en`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    `gatsby-plugin-layout`,
  ],
}
