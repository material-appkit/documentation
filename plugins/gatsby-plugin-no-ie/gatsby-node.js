const defaults = require('./defaults');
const path = require('path');

exports.createPages = (args, options) => {
  const { actions } = args;
  const { createPage } = actions;

  createPage({
    path: options ? (options.pathname || defaults.pathname) : defaults.pathname,
    component: path.resolve(`${__dirname}/src/no-ie.js`),
  });
};