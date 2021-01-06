import React from 'react';
import { graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import {
  ContentHeading,
  ContentSection,
} from 'components/typography';

import { filterAndGroupNodes } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import UtilityModuleList from 'components/api/UtilityModuleList';

const styles = makeStyles((theme) => ({
  moduleHeading: {
    backgroundColor: theme.palette.grey[200],
    borderBottom: `2px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(1, 0),
  },
}));


function APIReferencePage(props) {
  const classes = styles();

  return (
    <Layout title="API Reference" {...props}>
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
            modules={filterAndGroupNodes(props.data.utils.nodes)}
            moduleHeadingProps={{
              className: classes.moduleHeading,
              variant: 'h3',
            }}
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
