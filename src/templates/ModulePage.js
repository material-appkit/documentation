import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'layout/Layout';

import { extractComponentsAndMembers } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import ClassListItem from 'components/api/ClassListItem';
import FunctionListItem from 'components/api/FunctionListItem';
import ModuleListView from 'components/api/ModuleListView';

function ModulePage(props) {
  const moduleMap = extractComponentsAndMembers(props.data.allFile.nodes);

  return (
    <Layout title={props.pageContext.modulePath} {...props}>
      <main>
        <ModuleListView
          moduleMap={moduleMap}
          listItemComponents={{
            "class":  ClassListItem,
            "function": FunctionListItem,
          }}
        />
      </main>
    </Layout>
  );
}

ModulePage.propTypes = COMMON_PAGE_PROPS;

export default ModulePage;

export const query = graphql`
  query moduleNodes($modulePath: String) {
    allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {eq: $modulePath}}) {
      nodes {
        ...DocumentationNode
      }
    }  
  }
`;
