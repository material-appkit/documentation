import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import UtilityModuleList from 'components/api/UtilityModuleList';

function UtilityModulePage(props) {
  return (
    <Layout title={props.pageContext.modulePath} {...props}>
      <main>
        <UtilityModuleList
          modules={filterAndGroupNodes(props.data.utils.nodes)}
        />
      </main>
    </Layout>
  );
}

UtilityModulePage.propTypes = COMMON_PAGE_PROPS;

export default UtilityModulePage;

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
