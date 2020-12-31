import React from 'react';
import PropTypes from 'prop-types';

import { SnackbarProvider } from 'notistack';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import AppThemeProvider from './AppThemeProvider';

export const wrapRootElement = ({ element }) => (
  <SnackbarProvider
    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    autoHideDuration={3000}
  >
    <SnackbarManager />
    <AppThemeProvider>
      {element}
    </AppThemeProvider>
  </SnackbarProvider>
);

wrapRootElement.propTypes = {
	element: PropTypes.node
};
