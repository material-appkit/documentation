import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  list: {
    padding: 0,
  },

  moduleListItem: {
    display: 'block',
    marginBottom: theme.spacing(4),
    padding: 0,
  },
}));

function ModuleListView(props) {
  const classes = styles();

  const {
    listItemComponents,
    ModuleHeaderComponent,
    moduleMap,
  } = props;

  const modulePaths = Object.keys(moduleMap).sort();

  return (
    <List
      className={classes.list}
      component="section"
    >
      {modulePaths.map((modulePath) => (
        <ListItem
          className={classes.moduleListItem}
          component="article"
          key={modulePath}
        >
          <ModuleHeaderComponent path={modulePath} />

          <List className={classes.list}>
            {moduleMap[modulePath].components.map((component) => {
              const ComponentListItem = listItemComponents.component;

              return (
                <ComponentListItem
                  component={component}
                  key={`${modulePath}/${component.displayName}`}
                  urlPrefix={`/api/${modulePath}/#`}
                  modulePath={modulePath}
                />
              );
            })}
          </List>

          <List className={classes.list}>
            {moduleMap[modulePath].members.map((member) => {
              const ListItemComponent = listItemComponents[member.kind];

              return (
                <ListItemComponent
                  key={`${modulePath}/${member.name}`}
                  urlPrefix={`/api/${modulePath}/#`}
                  modulePath={modulePath}
                  representedObject={member}
                />
              );
            })}
          </List>
        </ListItem>
      ))}
    </List>
  );
}

ModuleListView.propTypes = {
  listItemComponents: PropTypes.object.isRequired,
  ModuleHeaderComponent: PropTypes.elementType,
  moduleMap: PropTypes.object.isRequired,
};

export default ModuleListView;
