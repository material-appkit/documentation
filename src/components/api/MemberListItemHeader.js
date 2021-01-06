import clsx from 'clsx';

import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ReactLogo from 'media/react-logo.svg';

const AVATAR_SRC_MAP = {
  "component": ReactLogo,
};

const HEADING_VARIANT_MAP = {
  "component": 'h4',
  "class":  'h4',
  "function": 'h5',
};

const styles = makeStyles((theme) => ({
  header: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: theme.spacing(1, 0, 0),
  },

  codeHeading: {
    fontFamily: "'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    lineHeight: 1.7,
  },

  avatar: {
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
  


  const headingProps = {
    className: classes.codeHeading,
    id: url,
    variant: HEADING_VARIANT_MAP[kind],
    ...(moduleHeadingProps || {})
  };

  return (
    <header className={classes.header}>
      <Avatar
        className={clsx(classes.avatar, classes[`${kind}Avatar`])}
        src={AVATAR_SRC_MAP[kind]}
        variant="square"
      >
        {kind[0].toUpperCase()}
      </Avatar>

      <Link href={url}>
        <Typography {...headingProps}>
          {heading}
        </Typography>
      </Link>
    </header>

  );
}

MemberListItemHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['component', 'class', 'function']).isRequired,
  moduleHeadingProps: PropTypes.object,
  url: PropTypes.string.isRequired,
};

export default MemberListItemHeader;
