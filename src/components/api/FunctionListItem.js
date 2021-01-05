import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

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

function FunctionListItem({ url, representedObject }) {
  const classes = styles();

  const heading = `${representedObject.name}(foo, bar)`;
  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={heading}
        kind="function"
        url={url}
      />
    </ListItem>
  );
}

FunctionListItem.propTypes = {
  representedObject: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default FunctionListItem;
