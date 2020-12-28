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

function NotFoundPage(props) {
  const classes = styles();

  return (
    <Layout title="Page Not Found" {...props}>
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

NotFoundPage.propTypes = COMMON_PAGE_PROPS;

export default NotFoundPage;
