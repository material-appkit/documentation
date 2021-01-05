import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

// import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

function UtilitiesModulePage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Utilities" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components" underline>
            Utilities Module
          </ContentHeading>

        </ContentSection>
      </main>
    </Layout>
  );
}

UtilitiesModulePage.propTypes = COMMON_PAGE_PROPS;

export default UtilitiesModulePage;

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
