import PropTypes from 'prop-types';
import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({

}));

function UtilitiesList({ source }) {
  const classes = styles();
  console.log(source);
    
  return (
    <Box>Utilities list</Box>
  );
}

UtilitiesList.propTypes = {
  source: PropTypes.array.isRequired,
};

export default UtilitiesList;
