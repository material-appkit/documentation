import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import ClassListItem from './ClassListItem';
import FunctionListItem from './FunctionListItem';
import ListItemHeader from './ListItemHeader';

const LIST_ITEM_TYPE_MAP = {
  "class":  ClassListItem,
  "function": FunctionListItem,
};


const styles = makeStyles((theme) => ({
  listItem: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 0,

    '&:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
}));

function ModuleListItem({ moduleHeadingProps, modulePath, members }) {
  const classes = styles();

  return (
    <ListItem
      className={classes.listItem}
      component="article"
    >
      <ListItemHeader
        kind="module"
        heading={`@material-appkit/core/${modulePath}`}
        url={`/api/${modulePath}`}
        moduleHeadingProps={moduleHeadingProps}
      />

      <List disablePadding style={{ width: '100%' }}>
        {members.map((member) => {
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
  );
}

ModuleListItem.propTypes = {
  moduleHeadingProps: PropTypes.object.isRequired,
  modulePath: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

export default ModuleListItem;
