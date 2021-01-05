import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import ListItemHeader from './ListItemHeader';

import { valueForKeyPath } from '@material-appkit/core/util/object';

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

  let paramList = [];
  if (representedObject.params) {
    paramList = representedObject.params.map((param) => (
      `${param.name}:${valueForKeyPath(param, 'type.name') || '*'}`
    ));
  }

  const returnType = valueForKeyPath(representedObject, 'returns.type.name') || '*';

  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={`${representedObject.name}(${paramList.join(', ')}):${returnType}`}
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
