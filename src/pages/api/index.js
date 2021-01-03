import React from 'react';
import { graphql } from 'gatsby';


import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import UtilitiesList from 'components/api/UtilitiesList';

import { COMMON_PAGE_PROPS } from 'variables';

function APIReferencePage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="API Reference" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components" underline>
            Components
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="managers" underline>
            Managers
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="utilities" underline>
            Utilities
          </ContentHeading>
          <UtilitiesList
            source={data.utils.nodes}
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
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^util/"}, name: {eq: "NotificationCenter"}}) {
      nodes {
        childrenDocumentationJs {
          ...DocumentationJsFragment,
          childrenDocumentationJs {
            ...DocumentationJsFragment,
          }
        }
        relativeDirectory
        name
      }
    }  
  }
`;
