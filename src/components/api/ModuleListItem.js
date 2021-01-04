import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';

//------------------------------------------------------------------------------
const utilityModuleStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: theme.spacing(2),
    padding: 0,
  },
}));


function MemberList({ directory, members }) {
  const classes = utilityModuleStyles();


  return (
    <List disablePadding>
      {members.map((member) => {
        const headingId = `${directory}/${member.name}`;

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
  directory: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};


const styles = makeStyles((theme) => ({
  listItem: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  header: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },

}));

function ModuleListItem({ directory, members }) {
  const classes = styles();

  return (
    <ListItem
      className={classes.listItem}
      component="article"
      disableGutters
      divider
    >
      <header className={classes.header}>
        <Avatar
          className={classes.avatar}
          component={Link}
          href={`#${directory}`}
          underline="none"
          variant="square"
        >
          M
        </Avatar>

        <Link href={`#${directory}`}>
          <Typography
            id={directory}
            variant="h3"
          >
            {directory}
          </Typography>
        </Link>
      </header>

      <MemberList
        directory={directory}
        members={members}
      />
    </ListItem>
  );
}

ModuleListItem.propTypes = {
  directory: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

export default ModuleListItem;
