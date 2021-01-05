import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import ListItemHeader from './ListItemHeader';

const styles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
  }
}));

function FunctionListItem({ modulePath, representedObject }) {
  const classes = styles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={representedObject.name}
        kind="function"
        url={`${modulePath}/${representedObject.name}`}
      />
    </ListItem>
  );
}

FunctionListItem.propTypes = {
  modulePath: PropTypes.string.isRequired,
  representedObject: PropTypes.object.isRequired,
};

export default FunctionListItem;
