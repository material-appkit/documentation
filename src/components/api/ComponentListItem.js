import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import MemberListItemHeader from './MemberListItemHeader';

const styles = makeStyles((theme) => ({
  listItem: {
    display: 'block',
    padding: theme.spacing(1, 0),
  },
}));

function ComponentListItem({ modulePath, representedObject, urlPrefix }) {
  const classes = styles();

  const url = urlPrefix + representedObject.displayName;

  return (
    <ListItem className={classes.listItem}>
      <MemberListItemHeader
        heading={representedObject.displayName}
        kind="component"
        url={url}
      />
    </ListItem>
  );
}

ComponentListItem.propTypes = {
  representedObject: PropTypes.object.isRequired,
  modulePath: PropTypes.string.isRequired,
  urlPrefix: PropTypes.string.isRequired,
};

export default ComponentListItem;
