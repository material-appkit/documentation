import React from 'react';

import List from '@material-ui/core/List';

import Layout from 'layout/Layout';

import QuickstartItem from 'components/QuickstartItem';

import {
  ContentSection,
  PageTitle,
} from 'components/typography';

import { COMMON_PAGE_PROPS } from 'variables';

function ProjectsPage(props) {
  return (
    <Layout title="Project Templates" {...props}>
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

ProjectsPage.propTypes = COMMON_PAGE_PROPS;

export default ProjectsPage;

