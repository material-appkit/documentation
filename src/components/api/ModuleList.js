import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';

import ModuleListItem from './ModuleListItem';

function ModuleList({ modules, moduleHeadingProps }) {
  const modulePaths = Object.keys(modules).sort();

  const membersMap = {};

  modulePaths.forEach((directory) => {
    membersMap[directory] = [].concat.apply([], modules[directory].map(
      (m) => m.childrenDocumentationJs
    )).sort((a, b) => (
      a.name.toLowerCase() < b.name.toLowerCase()
    ));
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
  modules: PropTypes.object.isRequired,
  moduleHeadingProps: PropTypes.object,
};

export default ModuleList;
