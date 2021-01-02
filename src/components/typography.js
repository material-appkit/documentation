import clsx from 'clsx';

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

//------------------------------------------------------------------------------
export const PageTitle = withStyles((theme) => ({
  title: {
    fontSize: theme.typography.pxToRem(28),
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}))((props) => {
  return (
    <Typography
      component="h1"
      className={clsx(props.classes.title, props.className)}
    >
      {props.children}
    </Typography>
  );
});


//------------------------------------------------------------------------------
const contentHeadingStyles = makeStyles((theme) => ({
  typography: {
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
      '&::before': {
        content: '" "',
        display: 'block',
        height: theme.appbar.height + theme.spacing(2),
        marginTop: -(theme.appbar.height + theme.spacing(2)),
        pointerEvents: 'none',
        visibility: 'hidden',
      },
    },
  },

  underline: {
    borderBottom: `1px solid #424242`,
    paddingBottom: theme.spacing(0.5),
  },

  h1: { fontSize: theme.typography.pxToRem(24) },
  h2: { fontSize: theme.typography.pxToRem(20) },
  h3: { fontSize: theme.typography.pxToRem(18) },
  h4: { fontSize: theme.typography.pxToRem(16) },
}));


export function ContentHeading(props) {
  const classes = contentHeadingStyles();

  const {
    children,
    underline,
    variant,
    ...typographyProps
  } = props;
  const _variant = variant || 'h2';

  const classNames = [classes.typography, classes[_variant]];

  if (underline) {
    classNames.push(classes.underline);
  }

  return (
    <Typography
      className={clsx(classNames)}
      variant={_variant}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
}


//------------------------------------------------------------------------------
export function ContentSection(props) {
  const { className, children, ...boxProps } = props;
  if (!boxProps.marginBottom) {
    boxProps.marginBottom = 4;
  }
  return (
    <Box
      component="section"
      className={className}
      {...boxProps}
    >
      {children}
    </Box>
  );
}

//------------------------------------------------------------------------------
export const Paragraph = withStyles((theme) => ({
  typography: {
    lineHeight: 1.7,
  }
}))(({ children, classes, className, disableGutterBottom }) => {
  return (
    <Typography
      className={clsx(classes.typography, className)}
      gutterBottom={!disableGutterBottom}
    >
      {children}
    </Typography>
  );
});

//------------------------------------------------------------------------------
export function Link(props) {
  const { children, ...linkProps } = props;

  if (linkProps.onClick) {
    linkProps.component = 'button';
  } else if (linkProps.to) {
    linkProps.component = GatsbyLink;
  } else if (linkProps.target === '_blank') {
    linkProps.rel = 'noopener';
  }
  return (
    <MuiLink {...linkProps}>
      {children}
    </MuiLink>
  );
}

