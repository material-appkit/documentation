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
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `if (${(false || !!document.documentMode)} && window.location.pathname !== "${pathname}") window.location = "${pathname}";`,
      }}
    />,
  ])
};