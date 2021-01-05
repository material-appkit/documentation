import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';
import { valueForKeyPath } from '@material-appkit/core/util/object';

import MarkdownView from 'components/MarkdownView';

import ListItemHeader from './ListItemHeader';
import FunctionListItem from './FunctionListItem';

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

function ClassListItem({ modulePath, representedObject, urlPrefix }) {
  const classes = styles();

  const url = urlPrefix + representedObject.name;

  const tags = arrayToObject(representedObject.tags, 'title');
  const summary = valueForKeyPath(tags, 'summary.description');

  const methodNodes = representedObject.childrenDocumentationJs.filter(
    (node) => node.kind === 'function'
  );

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

        {methodNodes.length > 0 &&
          <List disablePadding>
            {methodNodes.map((node) => {
               return (
                <FunctionListItem
                  key={`${url}/${node.name}`}
                  modulePath={modulePath}
                  representedObject={node}
                  urlPrefix={`${url}/`}
                />
              );
            })}
          </List>
        }
      </div>
    </ListItem>
  );
}

ClassListItem.propTypes = {
  modulePath: PropTypes.string.isRequired,
  representedObject: PropTypes.object.isRequired,
  urlPrefix: PropTypes.string.isRequired,
};

export default ClassListItem;
