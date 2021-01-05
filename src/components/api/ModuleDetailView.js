import PropTypes from 'prop-types';
import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  view: {
    padding: theme.spacing(1),
  },
}));

function ModuleDetailView(props) {
  const classes = styles();

  return (
    <Box component="main" className={classes.view}>
      <Typography>ModuleDetailView</Typography>
    </Box>
  );
}


ModuleDetailView.propTypes = {
  module: PropTypes.object,
};

export default ModuleDetailView;
