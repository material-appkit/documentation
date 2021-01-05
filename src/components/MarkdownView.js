import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Showdown from 'react-showdown';

const DEFAULT_OPTIONS = {
  openLinksInNewWindow: false,
  simplifiedAutoLink: true,
  simpleLineBreaks: false,
};

const styles = makeStyles((theme) => ({
  markdownView: {
    '& h2': {
      margin: theme.spacing(1, 0),
      fontWeight: 400,
    },

    '& h3': {
      margin: theme.spacing(1, 0),
      fontWeight: 400,
    },

    '& p': {
      ...theme.typography.body1,
      margin: 0,

      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },

    '& ul': {
      margin: theme.spacing(1, 0, 2),
    },
  },
}));

function MarkdownView(props) {
  const classes = styles();

  return (
    <Showdown
      className={classes.markdownView}
      markdown={props.markdown}
      options={{
        ...DEFAULT_OPTIONS
      }}
    />
  );
}

MarkdownView.propTypes = {
  markdown: PropTypes.string.isRequired,
  options: PropTypes.object,
};

MarkdownView.defaultProps = {
  options: {},
};

export default MarkdownView;
