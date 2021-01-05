import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';
import { valueForKeyPath } from '@material-appkit/core/util/object';

import MarkdownView from 'components/MarkdownView';

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

function FunctionListItem({ modulePath, representedObject }) {
  const classes = styles();

  const url = `/api/${modulePath}/#${representedObject.name}`;

  const tags = arrayToObject(representedObject.tags, 'title');
  const summary = valueForKeyPath(tags, 'summary.description');

  let paramList = [];
  if (representedObject.params) {
    paramList = representedObject.params.map((param) => (
      `${param.name}:${valueForKeyPath(param, 'type.name') || '*'}`
    ));
  }

  const returnType = valueForKeyPath(representedObject, 'returns.type.name') || '*';
  const signature = `${representedObject.name}(${paramList.join(', ')}):${returnType}`;


  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={signature}
        kind="function"
        url={url}
      />
      <div className={classes.listItemContent}>
        {summary &&
          <MarkdownView markdown={summary} />
        }
      </div>
    </ListItem>
  );
}

FunctionListItem.propTypes = {
  modulePath: PropTypes.string.isRequired,
  representedObject: PropTypes.object.isRequired,
};

export default FunctionListItem;
