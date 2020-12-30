const DEFAULT_PATH = '/noie';

export const onClientEntry = (_, options) => {
  const isIE = true || !!document.documentMode;
  const pathname = options ? (options.pathname || DEFAULT_PATH) : DEFAULT_PATH;

  if (isIE && window.location.pathname !== pathname) {
    window.location = pathname;
  }
};
