import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useWidth } from '@material-appkit/core/util/hooks';

import AppContext from 'AppContext';

import Sitemap from 'sitemap';

function Application(props) {
  const [appContext, setAppContext] = useState(() => {
    function processNode(node, indexPathPrefix, urlPrefix) {
      const { anchor, children, path } = node;

      node.id = indexPathPrefix;
      node.url = urlPrefix;

      if (anchor) {
        node.url += `#${anchor}`;
      } else if (path) {
        node.url += `${path}/`;
      }

      if (children) {
        children.forEach((childNode, childNodeIndex) => {
          processNode(childNode, `${indexPathPrefix}.${childNodeIndex}`, node.url);
        })
      }
    }

    const sitemap = Sitemap;
    sitemap.children.forEach((node, rootNodeIndex) => {
      processNode(node, `${rootNodeIndex}`, '/');
    });

    return {
      sitemap,
    };
  });

  return (
    <AppContext.Provider value={{
      ...appContext,
      breakpoint: useWidth(),
      update: (change) => {
        setAppContext({ ...appContext, ...change });
      },
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

Application.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Application;
