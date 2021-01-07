import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import { extractMembers } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import ClassListItem from 'components/api/ClassListItem';
import ComponentListItem from 'components/api/ComponentListItem';
import FunctionListItem from 'components/api/FunctionListItem';
import MemberListView from 'components/api/MemberListView';



function ModuleHeader({ path }) {
  return (
    <header>
      <Typography variant="h1" gutterBottom>
        @material-appkit/core/{path}
      </Typography>
    </header>
  );
}

function ModulePage(props) {
  const memberMap = extractMembers(props.data.allFile.nodes);

  return (
    <Layout title={props.pageContext.modulePath} {...props}>
      <main>
        <MemberListView
          ModuleHeaderComponent={ModuleHeader}
          memberMap={memberMap}
          listItemComponents={{
            "component": ComponentListItem,
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
  query moduleNodesQuery($modulePath: String) {
    allFile(filter: {sourceInstanceName: {eq: "source"}, relativeDirectory: {eq: $modulePath}}) {
      nodes {
        ...DocumentationNode
      }
    }  
  }
`;
