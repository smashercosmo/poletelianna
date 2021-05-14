/* eslint-env node */

module.exports = {
  siteMetadata: {
    title: 'poletelianna',
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    /* 'gatsby-plugin-sitemap', */
    'gatsby-transformer-remark',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
        manualInit: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `albums`,
        path: `${__dirname}/content/albums`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
  ],
}
