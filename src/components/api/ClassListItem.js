import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';

import ListItemHeader from './ListItemHeader';

const styles = makeStyles((theme) => ({
  listItem: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: theme.spacing(1, 0),
  },

  listItemContent: {
    paddingLeft: theme.spacing(4),
  },
}));

function ClassListItem({ modulePath, representedObject }) {
  const classes = styles();

  const tags = arrayToObject(representedObject.tags, 'title');


  let summary = null;
  if (tags.summary) {
    summary = (
      <Typography variant="body2">
        {tags.summary.description}
      </Typography>
    );
  }


  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={representedObject.name}
        kind="class"
        url={`${modulePath}/${representedObject.name}`}
      />
      <div className={classes.listItemContent}>
        {summary}
      </div>
    </ListItem>
  );
}

ClassListItem.propTypes = {
  modulePath: PropTypes.string.isRequired,
  representedObject: PropTypes.object.isRequired,
};

export default ClassListItem;
