import clsx from 'clsx';

import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const HEADING_VARIANT_MAP = {
  "class":  'h4',
  "function": 'h5',
};

const styles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(1, 0, 0),
    width: '100%',
  },

  headingLink: {
    width: '100%',
  },

  codeHeading: {
    fontFamily: "'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    lineHeight: 1.7,
  },

  avatar: {
    float: 'left',
    fontSize: theme.typography.pxToRem(16),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: theme.spacing(3),
  },

  classAvatar: {
    backgroundColor: 'orange',
  },

  functionAvatar: {
    backgroundColor: 'green',
  },
}));

function MemberListItemHeader(props) {
  const classes = styles();

  const {
    kind,
    heading,
    moduleHeadingProps,
    url
  } = props;
  

  let headingProps = {
    id: url,

    variant: HEADING_VARIANT_MAP[kind],
    ...(moduleHeadingProps || {})
  };

  headingProps.className = classes.codeHeading;


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

      <Link href={url} className={classes.headingLink}>
        <Typography {...headingProps}>
          {heading}
        </Typography>
      </Link>
    </header>

  );
}

MemberListItemHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['module', 'class', 'function']).isRequired,
  moduleHeadingProps: PropTypes.object,
  url: PropTypes.string.isRequired,
};

export default MemberListItemHeader;