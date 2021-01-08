import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { useWidth } from '@material-appkit/core/util/hooks';

import AppContext from 'AppContext';

import Sitemap from 'sitemap';

// See file sitemap.js for static set of top-level sitemap nodes
const API_REFERENCE_NODE_INDEX = 2;

function buildSiteMap(modulePaths) {
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


  const apiReferenceNode = sitemap.children[API_REFERENCE_NODE_INDEX];
  Array.from(modulePaths).sort().forEach((modulePath, i) => {
    apiReferenceNode.children.push({
      id: `${API_REFERENCE_NODE_INDEX}.${i}`,
      name: modulePath,
      path: modulePath,
      url: `/api/core/${modulePath}/`,
    })
  });

  return sitemap;
}


function Application(props) {
  const data = useStaticQuery(graphql`
    query ModuleIndexQuery {
      allFile(filter: {sourceInstanceName: {eq: "source"}}) {
        nodes {
          relativeDirectory
        }
      }
    }
  `);

  const [appContext, setAppContext] = useState(() => {
    const modulePaths = new Set(data.allFile.nodes.map(
      (node) => node.relativeDirectory
    ));

    return {
      sitemap: buildSiteMap(modulePaths),
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
