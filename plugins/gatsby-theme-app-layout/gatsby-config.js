const defaultWebFontsConfig = {
  fonts: {
    google: [
      {
        family: 'Open Sans',
        variants: ['400', '600'],
      },
    ],
  },
};

module.exports = (themeOptions) => {
  const {
    webFontsConfig = defaultWebFontsConfig,
  } = themeOptions;

  return {
    plugins: [
      //--------------------------------------------------------------------------
      'gatsby-plugin-material-ui',

      //--------------------------------------------------------------------------
      'gatsby-plugin-react-helmet-async',

      //--------------------------------------------------------------------------
      {
        resolve: 'gatsby-plugin-webfonts',
        options: {
          ...webFontsConfig,
        },
      },
    ],
  };
};
