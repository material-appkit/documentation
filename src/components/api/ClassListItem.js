import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';

import ListItemHeader from './ListItemHeader';

const styles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
  }
}));

function ClassListItem({ modulePath, representedObject }) {
  const classes = styles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={representedObject.name}
        kind="class"
        url={`${modulePath}/${representedObject.name}`}
      />
    </ListItem>
  );
}

ClassListItem.propTypes = {
  modulePath: PropTypes.string.isRequired,
  representedObject: PropTypes.object.isRequired,
};

export default ClassListItem;
