import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'components/typography';

const styles = makeStyles((theme) => ({
  header: {
    width: '100%',
  },

}));

function ModuleHeader({ headingProps, path }) {
  const classes = styles();

  return (
    <header className={classes.header}>
      <Link to={`/api/${path}`}>
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
