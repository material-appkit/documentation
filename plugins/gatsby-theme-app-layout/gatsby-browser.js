import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { ErrorBoundary } from 'react-error-boundary';
import { SnackbarProvider } from 'notistack';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import AppThemeProvider from './AppThemeProvider';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export const wrapRootElement = ({ element }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, info) => {
      navigate('/500');
    }}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
      console.log('Somehow reset the application');
    }}
  >
    <SnackbarProvider
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      autoHideDuration={3000}
    >
      <SnackbarManager />
      <AppThemeProvider>
        {element}
      </AppThemeProvider>
    </SnackbarProvider>
  </ErrorBoundary>
);

wrapRootElement.propTypes = {
	element: PropTypes.node
};
