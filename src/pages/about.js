import React from 'react';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import {
  ContentHeading,
  ContentSection,
  PageTitle,
  Paragraph,
} from 'components/typography';


function AboutPage(props) {
  return (
    <Layout title="About" {...props}>
      <main>
        <PageTitle>
          About Material-AppKit
        </PageTitle>

        <ContentSection>
          <ContentHeading>
            Motivation
          </ContentHeading>

        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Design Philosophy
          </ContentHeading>
          <Paragraph>
            Material-AppKit aims to strike a fair balance between convention and configuration.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            The Author
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

AboutPage.propTypes = COMMON_PAGE_PROPS;

export default AboutPage;

