module.exports = {
  siteMetadata: {
    title: `Neferka Design`,
    description: `Neferka Design`,
    author: `@burak`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/Amblem.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              downloadLocal: true,
            },
          },
        ],
      },
    },
    'gatsby-remark-embed-video',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3t2zpgt8m628`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `Q1GdL9lNWcelt8WeX6OVEFFIrjpaza9Glg2UyWf_u4k`,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-stripe`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
