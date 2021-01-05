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


function APIReferencePage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="API Reference" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components">
            Components
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="managers">
            Managers
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="utilities">
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

APIReferencePage.propTypes = COMMON_PAGE_PROPS;

export default APIReferencePage;

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
