/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const extraWebpackConfig = {
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
      symlinks: false,
    },
    target: 'web',
  };

  // Disable sourcemaps in production environment
  // See: http://blog.marcnuri.com/gatsby-disable-source-maps-production/
  if (getConfig().mode === 'production') {
    extraWebpackConfig.devtool = false;
  }

  actions.setWebpackConfig(extraWebpackConfig);
};
