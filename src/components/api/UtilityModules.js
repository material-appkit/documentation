import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';

import ModuleListItem from './ModuleListItem';

function UtilityModules({ modules }) {
  const moduleDirectories = Object.keys(modules).sort();
  
  const membersMap = {};

  moduleDirectories.forEach((directory) => {
    membersMap[directory] = [].concat.apply([], modules[directory].map(
      (m) => m.childrenDocumentationJs
    )).sort((a, b) => (
      a.name.toLowerCase() < b.name.toLowerCase()
    ));
  });

  return (
    <List component="section" disablePadding>
      {moduleDirectories.map((directory) => (
        <ModuleListItem
          directory={directory}
          key={directory}
          members={membersMap[directory]}
        />
      ))}
    </List>
  );
}

UtilityModules.propTypes = {
  modules: PropTypes.object.isRequired,
};

export default UtilityModules;
