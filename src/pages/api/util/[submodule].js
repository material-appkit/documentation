import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import ModuleDetailView from 'components/api/ModuleDetailView';

function UtilitySubmodulePage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Util" {...rest}>
      <main>
        <ModuleDetailView />
      </main>
    </Layout>
  );
}

UtilitySubmodulePage.propTypes = COMMON_PAGE_PROPS;

export default UtilitySubmodulePage;

export const query = graphql`
  query {
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^util/"}}) {
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
