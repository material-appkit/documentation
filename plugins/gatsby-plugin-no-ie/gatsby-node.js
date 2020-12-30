const path = require('path');

const DEFAULT_PATH = '/noie';

exports.createPages = (args, options) => {
  const { actions } = args;
  const { createPage } = actions;

  createPage({
    path: options ? (options.pathname || DEFAULT_PATH) : DEFAULT_PATH,
    component: path.resolve(`${__dirname}/templates/no-ie.js`),
    context: {
      // Add optional context data to be inserted
      // as props into the page component..
      //
      // The context data can also be used as
      // arguments to the page GraphQL query.
      //
      // The page "path" is always available as a GraphQL
      // argument.
    },
  });
};