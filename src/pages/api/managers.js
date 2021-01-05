import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';


function ManagersPage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Managers" {...rest}>
      <main>
        <ContentSection>
          <ContentHeading id="components" underline>
            Managers
          </ContentHeading>

        </ContentSection>
      </main>
    </Layout>
  );
}

ManagersPage.propTypes = COMMON_PAGE_PROPS;

export default ManagersPage;

export const query = graphql`
  query {
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^managers/"}}) {
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
