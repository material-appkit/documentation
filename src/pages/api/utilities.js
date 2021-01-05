import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import UtilityModuleList from 'components/api/UtilityModuleList';


function UtilitiesPage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Utilities" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components" underline>
            Utilities
          </ContentHeading>
          <UtilityModuleList
            modules={filterAndGroupNodes(data.utils.nodes)}
          />
        </ContentSection>
      </main>
    </Layout>
  );
}

UtilitiesPage.propTypes = COMMON_PAGE_PROPS;

export default UtilitiesPage;

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
