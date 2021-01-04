const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gaTrackingId = process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID;


module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_APP_TITLE,
    description: 'An app skeleton to kickstart app development with Material-AppKit and Gatsby',
  },
  plugins: [
    //--------------------------------------------------------------------------
    'gatsby-plugin-no-ie',

    //--------------------------------------------------------------------------
    // 'gatsby-plugin-preact',
    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fafafa',
        cache_busting_mode: 'none',
        display: 'standalone',
        icon: 'data/images/favicon.png',
        name: process.env.GATSBY_APP_TITLE,
        theme_color: '#fff',
        short_name: 'MUI AppKit',
        start_url: '/',
      }
    },

    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },

    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source',
        path: `${__dirname}/../core/src/`,
      },
    },

    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-transformer-filecontent',
      options: {
        mediaTypes: ['text/javascript', 'text/jsx'],
      }
    },

    //--------------------------------------------------------------------------
    'gatsby-transformer-react-docgen',

    //--------------------------------------------------------------------------
    'gatsby-transformer-documentationjs',

    //--------------------------------------------------------------------------
    'gatsby-plugin-react-helmet-async',

    //--------------------------------------------------------------------------
    'gatsby-plugin-material-ui',

    //--------------------------------------------------------------------------
    'gatsby-theme-app-layout',

  ],
};
