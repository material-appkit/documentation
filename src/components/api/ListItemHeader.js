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
    padding: theme.spacing(1, 0),
  },

  avatar: {
    marginRight: theme.spacing(1),
    width: 28,
    height: 28,
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
  const headingVariant = (kind === 'module') ? 'h3' : 'h4';

  return (
    <header className={classes.header}>
      <Avatar
        className={clsx([
          classes.avatar,
          classes[`${kind}Avatar`],
        ])}
        component={Link}
        href={`#${url}`}
        underline="none"
        variant="square"
      >
        {kind[0].toUpperCase()}
      </Avatar>

      <Link href={`#${url}`}>
        <Typography id={url} variant={headingVariant}>
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
