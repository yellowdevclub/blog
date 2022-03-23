module.exports = {
  siteMetadata: {
    title: `yellowDev Club`,
    description: `アイデア、テクノロジー、哲学、D.I.Yを用い、経済活動にに頼らず、地球環境を利用した衣食住を開拓。 | Using ideas, technology, philosophy, and DIY, we will develop clothing, food, and shelter that utilizes the global environment without relying on economic activities.`,
    author: `@gatsbyjs`,
    siteUrl: `https://yellowdev.club/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://wpgatsbydemo.wpengine.com/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:100,100i,300,300i,600,600i`,
          `noto sans japanese\:100,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
