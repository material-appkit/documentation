import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import ModuleHeader from './ModuleHeader';

import ClassListItem from './ClassListItem';
import FunctionListItem from './FunctionListItem';

const LIST_ITEM_TYPE_MAP = {
  "class":  ClassListItem,
  "function": FunctionListItem,
};

const styles = makeStyles((theme) => ({
  moduleList: {
    padding: 0,
  },

  moduleListItem: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    padding: 0,
  },

  moduleHeading: {
    borderBottom: `1px double ${theme.palette.divider}`,
    padding: theme.spacing(1, 0),
  },

  memberList: {
    width: '100%',
  },
}));

function ModuleListView({ moduleMap }) {
  const classes = styles();

  const modulePaths = Object.keys(moduleMap).sort();

  return (
    <List
      className={classes.moduleList}
      component="section"
    >
      {modulePaths.map((modulePath) => (
        <ListItem
          className={classes.moduleListItem}
          component="article"
          key={modulePath}
        >
          <ModuleHeader
            headingProps={{
              className: classes.moduleHeading,
              variant: 'h3',
            }}
            path={modulePath}
          />

          <List className={classes.memberList}>
            {moduleMap[modulePath].members.map((member) => {
              const ListItemComponent = LIST_ITEM_TYPE_MAP[member.kind];
              if (!ListItemComponent) {
                return null;
              }

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
  moduleMap: PropTypes.object.isRequired,
};

export default ModuleListView;
