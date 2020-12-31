import React from 'react';

const defaults = require('./defaults');

export const onRenderBody = (args, options) => {
  const { setHeadComponents } = args;

  const allOptions = {
    ...defaults,
    ...(options || {})
  };

  const pathname = allOptions.pathname;

  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `if ((false || !!document.documentMode) && window.location.pathname !== "${pathname}") window.location = "${pathname}";`,
      }}
      key="gatsby-plugin-no-ie"
      type="text/javascript"
    />,
  ])
};