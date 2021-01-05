import React from 'react';

import Application from './src/Application';

export const wrapRootElement = ({ element }) => {
  return (
    <Application>
      {element}
    </Application>
  );
};
