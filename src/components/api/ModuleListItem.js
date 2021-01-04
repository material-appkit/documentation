import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { arrayToObject } from '@material-appkit/core/util/array';

import { ContentHeading } from 'components/typography';

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
                  <ContentHeading id={headingId} variant="h4">
                    {member.name}
                  </ContentHeading>
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
  listItemIcon: {
    alignSelf: 'flex-start',
    minWidth: 36,
  },

  moduleHeading: {
    marginBottom: theme.spacing(1),
    padding: '5px 0',
  },
}));

function ModuleListItem({ directory, members }) {
  const classes = styles();
    
  return (
    <ListItem
      component="article"
      disableGutters
      divider
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
            members={members}
          />
        }
      />
    </ListItem>
  );
}

ModuleListItem.propTypes = {
  directory: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

export default ModuleListItem;
