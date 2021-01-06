import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import { extractMembers } from 'util/shortcuts';
import { COMMON_PAGE_PROPS } from 'variables';

import ClassListItem from 'components/api/ClassListItem';
import FunctionListItem from 'components/api/FunctionListItem';
import MemberListView from 'components/api/MemberListView';


const moduleHeaderStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
  },

  heading: {
    marginBottom: theme.spacing(2),
  },
}));

function ModuleHeader({ path }) {
  const classes = moduleHeaderStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h1" className={classes.heading}>
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
