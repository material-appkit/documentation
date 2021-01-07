import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import { extractMembers } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';


function ComponentPage(props) {
  const { data, pageContext } = props;

  const memberMap = extractMembers(data.allFile.nodes);
  console.log(memberMap);

  return (
    <Layout title={pageContext.modulePath} {...props}>
      <main>
        <Typography variant="h1">
          {pageContext.displayName}
        </Typography>
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
