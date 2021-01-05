import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';


function ComponentsPage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Components" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components" underline>
            Components
          </ContentHeading>

        </ContentSection>
      </main>
    </Layout>
  );
}

ComponentsPage.propTypes = COMMON_PAGE_PROPS;

export default ComponentsPage;

export const query = graphql`
  query {
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^components/"}}) {
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
