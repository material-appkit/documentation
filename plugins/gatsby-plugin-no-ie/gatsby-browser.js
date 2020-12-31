const defaults = require('./defaults');

export const onClientEntry = (_, options) => {
  const isIE = false || !!document.documentMode;
  const pathname = options ? (options.pathname || defaults.pathname) : defaults.pathname;

  if (isIE && window.location.pathname !== pathname) {
    window.location = pathname;
  }
};
