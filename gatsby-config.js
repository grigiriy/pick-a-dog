module.exports = {
  siteMetadata: {
    title: `Pick-a-Dog - Возьми собаку для прогулок в аренду`,
    description: `В карантин разрешено гулять с собакой. Так почему же этим не воспользоваться? На этом сайте вы найдете множество собак, которые хотят гулять.`,
    author: `@grigiriy`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/db/kennels`,
      },
    },
    //   `gatsby-plugin-react-helmet`,
    //   {
    //     resolve: `gatsby-source-filesystem`,
    //     options: {
    //       name: `images`,
    //       path: `${__dirname}/src/images`,
    //     },
    //   },
    //   `gatsby-transformer-sharp`,
    //   `gatsby-plugin-sharp`,
    //   {
    //     resolve: `gatsby-plugin-manifest`,
    //     options: {
    //       name: `gatsby-starter-default`,
    //       short_name: `starter`,
    //       start_url: `/`,
    //       background_color: `#663399`,
    //       theme_color: `#663399`,
    //       display: `minimal-ui`,
    //       icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //     },
    //   },
    //   // this (optional) plugin enables Progressive Web App + Offline functionality
    //   // To learn more, visit: https://gatsby.dev/offline
    //   // `gatsby-plugin-offline`,
  ],
};
