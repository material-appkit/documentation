import groupBy from 'lodash.groupby';

import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';

import ModuleListItem from './ModuleListItem';

function ModuleList({ moduleHeadingProps, nodes }) {
  const filteredNodes = nodes.filter((node) => {
    return node.childrenDocumentationJs.length > 0;
  });

  const nodesGroupedByPath = groupBy(filteredNodes, 'relativeDirectory');
  const modulePaths = Object.keys(nodesGroupedByPath).sort();

  const membersMap = {};
  modulePaths.forEach((directory) => {
    const moduleList = nodesGroupedByPath[directory].map(
      (m) => m.childrenDocumentationJs
    );
    membersMap[directory] = [].concat.apply([], moduleList)
      .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase());
  });

  return (
    <List component="section" disablePadding style={{ width: '100%' }}>
      {modulePaths.map((path) => (
        <ModuleListItem
          modulePath={path}
          key={path}
          members={membersMap[path]}
          moduleHeadingProps={moduleHeadingProps}
        />
      ))}
    </List>
  );
}

ModuleList.propTypes = {
  moduleHeadingProps: PropTypes.object,
  nodes: PropTypes.array.isRequired,
};

export default ModuleList;
