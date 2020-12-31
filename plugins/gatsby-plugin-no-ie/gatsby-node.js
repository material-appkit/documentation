const path = require('path');

const DEFAULT_PATH = '/noie';

exports.createPages = (args, options) => {
  const { actions } = args;
  const { createPage } = actions;

  createPage({
    path: options ? (options.pathname || DEFAULT_PATH) : DEFAULT_PATH,
    component: path.resolve(`${__dirname}/src/no-ie.js`),
  });
};