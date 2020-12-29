import React from 'react';
import { graphql } from 'gatsby';

// import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';
import { COMMON_PAGE_PROPS } from 'variables';

function ReferencePage(props) {
  return (
    <Layout
      showBackButton={false}
      title="API Reference"
      {...props}
    >
      <main>
        <ContentSection>
          <ContentHeading>
            Components
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Managers
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Utilities
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

ReferencePage.propTypes = COMMON_PAGE_PROPS;

export default ReferencePage;


export const query = graphql`
  query {
    utils: allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {regex: "/^util/"}}) {
      nodes {
        childrenDocumentationJs {
          description {
            childMarkdownRemark {
              html
            }
          }
          name
          params {
            name
            type {
              name
            }
          }
        }
        relativePath
      }
    }  
  }
`;

