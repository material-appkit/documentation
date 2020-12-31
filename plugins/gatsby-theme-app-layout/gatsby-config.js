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

const defaultStylesConfig = {
  stylesProvider: {
    injectFirst: true,
  },
};

module.exports = (themeOptions) => {
  const {
    stylesConfig = defaultStylesConfig,
    webFontsConfig = defaultWebFontsConfig,
  } = themeOptions;

  return {
    plugins: [
      //--------------------------------------------------------------------------
      {
        resolve: 'gatsby-plugin-material-ui',
        options: {
          ...stylesConfig,
        },
      },
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
