import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as GatsbyLink } from 'gatsby';

import Layout from 'layout/Layout';

import CodeView from 'components/CodeView';

import {
  PageTitle,
  ContentHeading,
  ContentSection,
} from 'components/typography';

import { COMMON_PAGE_PROPS } from 'variables';
import paths from 'paths';

const MuiCoreLink = <Link href="https://www.npmjs.com/package/@material-ui/core">@material-ui/core</Link>;
const MuiIconsLink = <Link href="https://www.npmjs.com/package/@material-ui/icons">@material-ui/icons</Link>;
const MuiLablLink = <Link href="https://www.npmjs.com/package/@material-ui/lab">@material-ui/lab</Link>;
const MuiSnackbarLink = <Link href="https://material-ui.com/components/snackbars/#snackbar">Snackbar</Link>
const NotistackLink = <Link href="https://www.npmjs.com/package/notistack">notistack</Link>

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
          <Typography gutterBottom>
            When considering the adoption of a third-party toolkit into your workflow, the first
            thing you should ask yourself is, <em>"Will my dependence on these tools ultimately help or
            hinder the long-term growth of my application?"</em>. It is a heavyweight decision that will
            impact you, your team, and your company for years to come and should hence be made with
            a certain degree of caution.
          </Typography>

          <Typography gutterBottom>
            A good way to begin this evaluation is with a cursory review of
            the <Link component={GatsbyLink} to={paths.api.index}>API Reference</Link> which
            details all of the available components and utilities. Try out the examples to see
            things in action, then fire up one of
            the <Link component={GatsbyLink} to={paths.gettingStarted.examples}>starter applications</Link> to
            get an idea of how it all works in concert.
          </Typography>

          <Typography gutterBottom>
            Once you've completed this evaluation and are ready to take the plunge, fire your
            favorite editor and let's get started!
          </Typography>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="installation">
            Installation
          </ContentHeading>
          <Typography>
            Material-AppKit is distributed via NPM. To integrate it with your existing Material-UI
            project, install it as you would any other npm package:
          </Typography>
          <CodeView language="bash">
            $ npm install @material-appkit/core
          </CodeView>
        </ContentSection>

        <ContentSection>
          <ContentHeading variant="h3">
            Peer Dependencies
          </ContentHeading>
          <Typography>
            Naturally, {MuiCoreLink} must be installed as a peer dependency. Less obvious is the
            fact that Material-AppKit relies on {MuiIconsLink} and {MuiLablLink} for a number of its
            components and so they too should be installed. Finally, if you wish to use the
            SnackbarManager to coveniently present {MuiSnackbarLink} notifications, you must also
            include the very awesome {NotistackLink} library.
          </Typography>

          <CodeView language="bash">
            $ npm install @material-ui/core @material-ui/icons @material-ui/lab notistack
          </CodeView>

        </ContentSection>

        <ContentSection>
          <ContentHeading id="usage">
            Usage
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

GettingStartedPage.propTypes = COMMON_PAGE_PROPS;

export default GettingStartedPage;

