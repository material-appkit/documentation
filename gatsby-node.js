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


const utilityModulesQuery = `
  query utilityModulesQuery {
    allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^util/"}}) {
      nodes {
        relativeDirectory
      }
    }        
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const utilityModuleTemplate = path.resolve('src/templates/UtilityModulePage.js');

  graphql(utilityModulesQuery).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const modulePaths = new Set(result.data.allFile.nodes.map(
      (node) => node.relativeDirectory
    ));

    modulePaths.forEach((modulePath) => {
      createPage({
        path: `/api/${modulePath}/`,
        component: utilityModuleTemplate,
        context: {
          modulePath
        }
      });
    });
  });
};
