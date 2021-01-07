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


const sourceNodeQuery = `
  query {
    allFile(filter: {sourceInstanceName: {eq: "source"}}) {
      nodes {
        childrenComponentMetadata {
          displayName
          doclets
        }      
        relativeDirectory
      }
    }        
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const ModulePage = path.resolve('src/templates/ModulePage.js');
  const ComponentPage = path.resolve('src/templates/ComponentPage.js');

  return graphql(sourceNodeQuery).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const modulePaths = new Set(result.data.allFile.nodes.map(
      (node) => node.relativeDirectory
    ));

    modulePaths.forEach((modulePath) => {
      createPage({
        path: `/api/${modulePath}/`,
        component: ModulePage,
        context: {
          modulePath
        }
      });
    });

    // Create an individual page for each React component
    result.data.allFile.nodes.forEach((fileNode) => {
      fileNode.childrenComponentMetadata.forEach((componentNode) => {
        componentNode.doclets.forEach((doclet) => {
          if (doclet.tag === 'public' && doclet.value === true) {
            createPage({
              path: `/api/${fileNode.relativeDirectory}/${componentNode.displayName}/`,
              component: ComponentPage,
              context: {
                componentName: componentNode.displayName,
                modulePath: fileNode.relativeDirectory,
              },
            });
          }
        });
      });
    });
  });
};
