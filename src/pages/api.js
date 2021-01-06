import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';
import { extractComponentsAndMembers } from 'util/shortcuts';

import ModuleListView from 'components/api/ModuleListView';

function APIReferencePage(props) {
  const moduleMap = extractComponentsAndMembers(props.data.allFile.nodes);

  return (
    <Layout title="API Reference" {...props}>
      <main>
        <ModuleListView moduleMap={moduleMap} />
      </main>
    </Layout>
  );
}

APIReferencePage.propTypes = COMMON_PAGE_PROPS;

export default APIReferencePage;

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "source"}}) {
      nodes {
        ...DocumentationNode
      }
    }  
  }
`;
