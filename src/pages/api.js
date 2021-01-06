import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';
import { Link } from 'components/typography';

import { COMMON_PAGE_PROPS } from 'variables';
import { extractComponentsAndMembers } from 'util/shortcuts';

import ClassListItem from 'components/api/ClassListItem';
import FunctionListItem from 'components/api/FunctionListItem';
import ModuleListView from 'components/api/ModuleListView';


const moduleHeaderStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
  },

  heading: {
    borderBottom: `1px double ${theme.palette.divider}`,
    padding: theme.spacing(1, 0),
  },

}));

function ModuleHeader({ path }) {
  const classes = moduleHeaderStyles();

  return (
    <header className={classes.header}>
      <Link to={`/api/${path}`}>
        <Typography variant="h3" className={classes.heading}>
          @material-appkit/core/{path}
        </Typography>
      </Link>
    </header>
  );
}


function APIReferencePage(props) {
  const moduleMap = extractComponentsAndMembers(props.data.allFile.nodes);

  return (
    <Layout title="API Reference" {...props}>
      <main>
        <ModuleListView
          ModuleHeaderComponent={ModuleHeader}
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
