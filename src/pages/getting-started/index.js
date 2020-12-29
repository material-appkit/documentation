import React from 'react';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import MarkdownView from 'components/MarkdownView';
import {
  PageTitle,
  ContentHeading,
  ContentSection,
} from 'components/typography';


const INTRODUCTION = `
  When considering the adoption of a third-party toolkit into your workflow, the number one
  question you should be asking yourself is, _"Do I expect my dependence on these tools
  will help or hinder progress on my application?"_.
  
  The decision can seem a bit daunting at first.  
`;

function GettingStartedPage(props) {
  return (
    <Layout
      showBackButton={false}
      title="Getting Started"
      {...props}
    >
      <main>
        <ContentSection>
          <PageTitle>
            Getting started
          </PageTitle>

          <MarkdownView markdown={INTRODUCTION} />
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Installation
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Usage
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

GettingStartedPage.propTypes = COMMON_PAGE_PROPS;

export default GettingStartedPage;

