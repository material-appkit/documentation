import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import ModuleList from 'components/api/ModuleList';

function ModulePage(props) {
  return (
    <Layout title={props.pageContext.modulePath} {...props}>
      <main>
        <ModuleList
          modules={filterAndGroupNodes(props.data.utils.nodes)}
        />
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
