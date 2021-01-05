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


const utilityModulesQuery = `
  query loadUtilityModulesQuery {
    allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^util/"}}) {
      nodes {
        id
        name
        relativeDirectory
      }
    }        
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const utilityModuleTemplate = path.resolve('src/templates/UtilityModulePage.js');

  return graphql(utilityModulesQuery).then((result) => {
    if (result.errors) {
      console.log('WTF!!!', result.errors);
      throw result.errors;
    }

    const modulePaths = new Set(result.data.allFile.nodes.map(
      (node) => node.relativeDirectory
    ));

    modulePaths.forEach((modulePath) => {
      console.log(modulePath);

      createPage({
        path: `/api/${modulePath}/`,
        component: utilityModuleTemplate,
      });
    });

    // // Create blog post pages.
    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   createPage({
    //     // Path for this page — required
    //     path: `${edge.node.frontmatter.slug}`,
    //     component: blogPostTemplate,
    //     context: {
    //       // Add optional context data to be inserted
    //       // as props into the page component..
    //       //
    //       // The context data can also be used as
    //       // arguments to the page GraphQL query.
    //       //
    //       // The page "path" is always available as a GraphQL
    //       // argument.
    //     },
    //   })
    // })
  });
};
