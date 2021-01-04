import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { ContentHeading } from 'components/typography';

//------------------------------------------------------------------------------
const utilityModuleStyles = makeStyles((theme) => ({
  article: {
    marginBottom: theme.spacing(2),
  }
}));


function MemberList({ directory, members }) {
  const classes = utilityModuleStyles();

  return (
    <List disablePadding>
      {members.map((member, i) => (
        <ListItem
          disableGutters
          key={i}
        >
          <ListItemText
            primary={member.name}
            primaryTypographyProps={{ variant: 'h4' }}
          />
        </ListItem>
      ))}
    </List>
  )
}

MemberList.propTypes = {
  directory: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};


//------------------------------------------------------------------------------
const styles = makeStyles((theme) => ({
  listItemIcon: {
    alignSelf: 'flex-start',
  },

  moduleHeading: {
    padding: theme.spacing(0.5, 0),
  },
}));

function UtilityModules({ modules }) {
  const classes = styles();

  const moduleDirectories = Object.keys(modules).sort();
  
  const membersMap = {};

  moduleDirectories.forEach((directory) => {
    membersMap[directory] = [].concat.apply([], modules[directory].map(
      (m) => m.childrenDocumentationJs
    ));
  });

  return (
    <List component="section" disablePadding>
      {moduleDirectories.map((directory) => (
        <ListItem
          component="article"
          disableGutters
          divider
          key={directory}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <IconButton
              color="primary"
              href={`#${directory}`}
            >
              <BookmarkIcon />
            </IconButton>
          </ListItemIcon>

          <ListItemText
            disableTypography
            primary={
              <Link href={`#${directory}`}>
                <ContentHeading
                  className={classes.moduleHeading}
                  id={directory}
                  variant="h3"
                >
                  {directory}
                </ContentHeading>
              </Link>
            }
            secondary={
              <MemberList
                directory={directory}
                members={membersMap[directory]}
              />
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

UtilityModules.propTypes = {
  modules: PropTypes.object.isRequired,
};

export default UtilityModules;
