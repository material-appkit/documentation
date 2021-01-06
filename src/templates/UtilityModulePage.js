import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

function ModulePage(props) {
  return (
    <Layout title={props.pageContext.modulePath} {...props}>
      <main>

      </main>
    </Layout>
  );
}

ModulePage.propTypes = COMMON_PAGE_PROPS;

export default ModulePage;

export const query = graphql`
  query utilityModuleNodes($modulePath: String) {
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {eq: $modulePath}}) {
      nodes {
        childrenDocumentationJs {
          ...DocumentationJsFragment,
          childrenDocumentationJs {
            ...DocumentationJsFragment,
          }
        }
        relativeDirectory
      }
    }  
  }
`;
