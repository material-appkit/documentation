import React from 'react';
import { graphql } from 'gatsby';

import Typography from '@material-ui/core/Typography';

import MarkdownView from 'components/MarkdownView';
import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';


function ComponentPage(props) {
  const { data, pageContext } = props;
  const { modulePath } = pageContext;

  const {
    description,
    displayName,
  } = data.componentMetadata;


  return (
    <Layout title={pageContext.modulePath} {...props}>
      <main>
        <header>
          <Typography variant="h1" gutterBottom>
            @material-appkit/core/{modulePath}/{displayName}
          </Typography>
        </header>

        <MarkdownView markdown={description.text} />
      </main>
    </Layout>
  );
}

ComponentPage.propTypes = COMMON_PAGE_PROPS;

export default ComponentPage;

export const query = graphql`
  query componentNodeQuery($displayName: String) {
    componentMetadata(displayName: {eq: $displayName}) {
      description {
        text
      }
      displayName
    }
  }
`;
