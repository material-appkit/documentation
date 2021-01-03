import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

const styles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },

  emoji: {
    fontSize: theme.typography.pxToRem(200),
  },
}));

function ErrorPage(props) {
  const classes = styles();

  return (
    <Layout title="Critical Error" {...props}>
      <main>
        <div className={classes.contentContainer}>
          <span
            aria-label="Exploding Head Emoji"
            className={classes.emoji}
            role="img"
          >
             🤯
          </span>
        </div>
      </main>
    </Layout>
  );
}

ErrorPage.propTypes = COMMON_PAGE_PROPS;

export default ErrorPage;
