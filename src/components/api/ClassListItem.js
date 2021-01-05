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

function ClassListItem({ url, representedObject }) {
  const classes = styles();

  const tags = arrayToObject(representedObject.tags, 'title');
  const summary = valueForKeyPath(tags, 'summary.description');

  return (
    <ListItem className={classes.listItem}>
      <ListItemHeader
        heading={representedObject.name}
        kind="class"
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

ClassListItem.propTypes = {
  representedObject: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default ClassListItem;
