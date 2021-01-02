import React from 'react';

import List from '@material-ui/core/List';

import Layout from 'layout/Layout';

import QuickstartItem from 'components/QuickstartItem';

import {
  ContentSection,
  PageTitle,
} from 'components/typography';

import { COMMON_PAGE_PROPS } from 'variables';

function ExamplesPage(props) {
  return (
    <Layout title="Examples" {...props}>
      <main>
        <PageTitle>
          Project Templates
        </PageTitle>

        <ContentSection>
          <List disablePadding>
            <QuickstartItem type="CRA" />
          </List>
        </ContentSection>

        <ContentSection>
          <List disablePadding>
            <QuickstartItem type="Gatsby" />
          </List>
        </ContentSection>
      </main>
    </Layout>
  );
}

ExamplesPage.propTypes = COMMON_PAGE_PROPS;

export default ExamplesPage;

