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
 When considering the adoption of a third-party toolkit into your workflow, the first thing
 you should ask yourself is, _"Will my dependence on these tools ultimately help or hinder 
 the long-term growth of my application?"_. It is a heavyweight decision that will impact you, your 
 team, and your company for years to come and should hence be made with a certain degree of caution.
 
 A good way to begin this evaluation is with a cursory review of the [API Reference](/api) which 
 outlines all of the available components and utilities. Try out the examples to see things in 
 action, then fire up one of the [example applications](/getting-started/examples/) to get an idea 
 of how it all works in concert. 
 
 Once you've completed this evaluation and are ready to take the plunge, fire your favorite editor 
 and let's get started!
`;

const INSTALLATION = `
Yoooo
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
          <PageTitle>Getting started</PageTitle>
          <MarkdownView markdown={INTRODUCTION} />
        </ContentSection>

        <ContentSection>
          <ContentHeading>
            Installation
          </ContentHeading>
          <MarkdownView markdown={INSTALLATION} />
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

