import React from 'react';
import { graphql } from 'gatsby';
import groupBy from 'lodash.groupby';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import UtilityModules from 'components/api/UtilityModules';

import { COMMON_PAGE_PROPS } from 'variables';


function filterAndGroupNodes(nodes) {
  const filteredNodes = nodes.filter((node) => (
    node.childrenDocumentationJs.length > 0
  ));

  return groupBy(filteredNodes, 'relativeDirectory');
}


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
          <UtilityModules
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
