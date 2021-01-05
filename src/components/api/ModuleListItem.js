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

/*
function MemberList({ modulePath, members }) {
  const classes = utilityModuleStyles();

  return (
    <List disablePadding>
      {members.map((member) => {
        const headingId = `${modulePath}/${member.name}`;
        const tags = arrayToObject(member.tags, 'title');

        let secondary = null;
        if (tags.summary) {
          secondary = (
            <Typography variant="body2">
              {tags.summary.description}
            </Typography>
          );
        }

        return (
          <ListItem
            className={classes.listItem}
            disableGutters
            key={member.name}
          >
            <ListItemText
              primary={
                <Link href={`#${headingId}`}>
                  <Typography id={headingId} variant="h4">
                    {member.name}
                  </Typography>
                </Link>
              }
              secondary={secondary}
            />
          </ListItem>
        );
      })}
    </List>
  )
}

MemberList.propTypes = {
  modulePath: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};
*/

const styles = makeStyles((theme) => ({
  listItem: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 0,

    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingBottom: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

function ModuleListItem({ modulePath, members }) {
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
      />

      <List disablePadding>
        {members.map((member) => {
          const ListItemComponent = LIST_ITEM_TYPE_MAP[member.kind];
          if (!ListItemComponent) {
            return null;
          }

          return (
            <ListItemComponent
              key={`${modulePath}/${member.name}`}
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
  modulePath: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

export default ModuleListItem;
