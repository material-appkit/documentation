import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import { arrayToObject } from '@material-appkit/core/util/array';
import { valueForKeyPath } from '@material-appkit/core/util/object';

import MarkdownView from 'components/MarkdownView';

import MemberListItemHeader from './MemberListItemHeader';

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

function FunctionListItem({ modulePath, representedObject, urlPrefix }) {
  const classes = styles();

  const url = urlPrefix + representedObject.name;

  const tags = arrayToObject(representedObject.tags, 'title');
  const summary = valueForKeyPath(tags, 'summary.description');

  let paramList = [];
  if (representedObject.params) {
    paramList = representedObject.params.map((param) => (
      `${param.name}:${valueForKeyPath(param, 'type.name') || '*'}`
    ));
  }

  let returnType = 'void';
  if (representedObject.returns) {
    returnType = representedObject.returns[0].type.name || '*';
  }
  const signature = `${representedObject.name}(${paramList.join(', ')}):${returnType}`;

  return (
    <ListItem className={classes.listItem}>
      <MemberListItemHeader
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
  urlPrefix: PropTypes.string.isRequired,
};

export default FunctionListItem;
