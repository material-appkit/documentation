import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

// import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import {
  PageTitle,
  ContentHeading,
  ContentSection,
} from 'components/typography';
import { COMMON_PAGE_PROPS } from 'variables';

function ReferencePage(props) {
  useEffect(() => {
    const sources = props.data.sources.nodes;
    console.log(sources);


  }, []);
  return (
    <Layout
      showBackButton={false}
      title="API Reference"
      {...props}
    >
      <main>
        <PageTitle>
          API Reference
        </PageTitle>

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
    sources: allFile(filter: {sourceInstanceName: {eq: "source"}}) {
      nodes {
        childrenComponentMetadata {
          doclets
          methods {
            name
            params {
              name
              type
            }
            description
          }
          displayName
          props {
            name
            defaultValue {
              value
              computed
            }
            description {
              text
            }
            required
            parentType {
              name
            }
            type {
              name
            }
          }
          description {
            text
          }
        }
        name
        relativeDirectory
      }
    }  
  }
`;

