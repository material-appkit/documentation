import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';


function ComponentPage(props) {
  const { pageContext } = props;

  const { componentName, modulePath } = pageContext;

  return (
    <Layout title={pageContext.modulePath} {...props}>
      <main>
        <header>
          <Typography variant="h1" gutterBottom>
            @material-appkit/core/{modulePath}/{componentName}
          </Typography>
        </header>
      </main>
    </Layout>
  );
}

ComponentPage.propTypes = COMMON_PAGE_PROPS;

export default ComponentPage;

export const query = graphql`
  query componentNodeQuery($modulePath: String) {
    allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {eq: $modulePath}}) {
      nodes {
        ...DocumentationNode
      }
    }  
  }
`;
