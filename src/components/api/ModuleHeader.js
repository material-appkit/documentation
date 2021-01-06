import PropTypes from 'prop-types';
import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  header: {
    width: '100%',
  },

}));

function ModuleHeader({ headingProps, path }) {
  const classes = styles();

  const url = `/api/${path}`;

  return (
    <header className={classes.header}>
      <Link href={url}>
        <Typography {...headingProps}>
          @material-appkit/core/{path}
        </Typography>
      </Link>
    </header>
  );
}

ModuleHeader.propTypes = {
  headingProps: PropTypes.object,
  path: PropTypes.string.isRequired,
};

ModuleHeader.defaultProps = {
  headingProps: {
    variant: 'h1',
  },
};

export default ModuleHeader;
