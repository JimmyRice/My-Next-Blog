/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Jimmy0w0 neXt",
    description: "嗯哼，是 Jimmy",
    author: "Jimmy & Seamain",
    twitterUsername: "0",
    facebookUsername: "0",
    instagramUsername: "0",
    linkedinUsername: "0",
    image: "/macbook-color.jpg",
    siteUrl: "https://next.jimmy0w0.me",
    developerName: "Morgan Baker Development",
    developerUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Directus",
        fieldName: "directus",
        url: "https://4gsj0ady.directus.app/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jimmy0w0 neXt`,
        short_name: `neXt`,
        start_url: `/`,
        background_color: `#1B1B1B`,
        theme_color: `#1B1B1B`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
