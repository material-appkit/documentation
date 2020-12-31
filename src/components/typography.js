import clsx from 'clsx';

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
const CONTENT_HEADING_FONT_SIZES = {
  'h1': 24,
  'h2': 20,
  'h3': 18,
  'h4': 16,
};

export function ContentHeading(props) {
  const {
    children,
    underline,
    variant,
    ...typographyProps
  } = props;
  const _variant = variant || 'h2';

  const style = {
    fontSize: CONTENT_HEADING_FONT_SIZES[_variant],
    marginBottom: 8,
  };

  if (underline) {
    style.borderBottom = `1px solid #424242`;
    style.paddingBottom = 4;
  }

  return (
    <Typography
      style={style}
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
}))((props) => {
  return (
    <Typography
      className={clsx(props.classes.typography, props.className)}
      gutterBottom
    >
      {props.children}
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

