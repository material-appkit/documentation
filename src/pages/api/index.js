import React from 'react';

// import Typography from '@material-ui/core/Typography';

import Layout from 'layout/Layout';

import {
  PageTitle,
  ContentHeading,
  ContentSection,
} from 'components/typography';
import { COMMON_PAGE_PROPS } from 'variables';

function ReferencePage(props) {
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

