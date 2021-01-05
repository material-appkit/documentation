import clsx from 'clsx';

import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(1, 0, 0),
  },

  codeHeading: {
    fontFamily: "'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },

  avatar: {
    fontSize: theme.typography.pxToRem(16),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: theme.spacing(3),
  },

  moduleAvatar: {
    backgroundColor: theme.palette.primary.main,
  },

  classAvatar: {
    backgroundColor: 'orange',
  },

  functionAvatar: {
    backgroundColor: 'green',
  },
}));

function ListItemHeader({ kind, heading, url }) {
  const classes = styles();

  let headingVariant = 'h4';
  const headingClassNames = [];
  if (kind === 'module') {
    headingVariant = 'h3';
  } else {
    headingClassNames.push(classes.codeHeading);
  }

  return (
    <header className={classes.header}>
      <Avatar
        className={clsx([
          classes.avatar,
          classes[`${kind}Avatar`],
        ])}
        underline="none"
        variant="square"
      >
        {kind[0].toUpperCase()}
      </Avatar>

      <Link href={url}>
        <Typography
          id={url}
          variant={headingVariant}
          className={clsx(headingClassNames)}
        >
          {heading}
        </Typography>
      </Link>
    </header>

  );
}

ListItemHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['module', 'class', 'function']).isRequired,
  url: PropTypes.string.isRequired,
};

export default ListItemHeader;
