import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

const styles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

function NotFoundPage(props) {
  const classes = styles();

  return (
    <Layout
      title="Page Not Found"
      {...props}
    >
      <main>
        <div className={classes.contentContainer}>
          <Img fixed={props.data.sadFace.childImageSharp.fixed} />
        </div>
      </main>
    </Layout>
  );
}

NotFoundPage.propTypes = COMMON_PAGE_PROPS;

export default NotFoundPage;

export const query = graphql`
  query {
    sadFace: file(relativePath: { eq: "images/sad-face.png" }) {
      childImageSharp {
        fixed(width: 192, height: 192) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
