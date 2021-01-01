import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import CodeView from 'components/CodeView';
import Quickstart from 'components/Quickstart';

import {
  ContentHeading,
  ContentSection,
  Link,
  PageTitle,
  Paragraph,
} from 'components/typography';

import { COMMON_PAGE_PROPS } from 'variables';
import paths from 'paths';

const MUIDocumentationLink = <Link href="https://material-ui.com/getting-started/learn/" variant="button">documentation pages</Link>;
const APIReferenceLink = <Link to={paths.api.index} variant="button">API Reference</Link>;
const TemplatesLink = <Link to={paths.templates.index} variant="button">project templates</Link>;
const ExamplesLink = <Link to={paths.templates.index} variant="button">examples</Link>;

const MuiCoreLink = <Link href="https://www.npmjs.com/package/@material-ui/core" variant="button">@material-ui/core</Link>;
const MuiIconsLink = <Link href="https://www.npmjs.com/package/@material-ui/icons" variant="button">@material-ui/icons</Link>;
const MuiLablLink = <Link href="https://www.npmjs.com/package/@material-ui/lab" variant="button">@material-ui/lab</Link>;
const MuiSnackbarLink = <Link href="https://material-ui.com/components/snackbars/#snackbar" variant="button">Snackbar</Link>
const NotistackLink = <Link href="https://iamhosseindhv.com/notistack/demos" variant="button">notistack</Link>

const styles = makeStyles((theme) => ({
  quickstartList: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  }
}));

function GettingStartedPage(props) {
  const classes = styles();

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
          <Paragraph>
            When considering the adoption of a third-party toolkit, it is helpful to begin with
            a cursory review of the {APIReferenceLink} which details all of the available components
            and utilities. If you're new to the Material-UI community you should first head over to
            their own {MUIDocumentationLink} to find out what it has to offer, then come back here
            and see what Material-AppKit provides above and beyond that solid foundation.
          </Paragraph>

          <Paragraph>
            To get an even better idea of all the goodness in store, review the {TemplatesLink} to
            see how the various AppKit components may be used in concert.
            Once you've completed your evaluation and are ready to take the plunge, fire up your
            favorite editor and let's get started!
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="installation" underline>
            Quickstart
          </ContentHeading>
          <Paragraph>
            Those who prefer to shoot first and ask questions later can get straight to business
            using one the following pre-configured project templates. Visit the {ExamplesLink} page to
            learn more about the base configuration of each of these templates.
          </Paragraph>
          <Quickstart listClassName={classes.quickstartList} />
        </ContentSection>

        <ContentSection>
          <ContentHeading id="installation" underline>
            Installation
          </ContentHeading>
          <Paragraph>
            Material-AppKit is distributed via NPM. To integrate it with your existing Material-UI
            project, install it as you would any other npm package:
          </Paragraph>
          <CodeView language="bash" singleline>
            $ npm install @material-appkit/core
          </CodeView>
        </ContentSection>

        <ContentSection>
          <ContentHeading variant="h3">
            Peer Dependencies
          </ContentHeading>
          <Paragraph>
            Naturally, {MuiCoreLink} must be installed as a peer dependency.
            In addition, {MuiIconsLink} and {MuiLablLink} are relied upon by a number of components
            and so they too should be installed. Finally, if you wish to use the
            SnackbarManager to coveniently present {MuiSnackbarLink} notifications you must also
            include the excellent {NotistackLink} library.
          </Paragraph>

          <CodeView language="bash" singleline>
            $ npm install @material-ui/core @material-ui/icons @material-ui/lab notistack
          </CodeView>
        </ContentSection>

        <ContentSection>
          <ContentHeading id="usage" underline>
            Usage
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

GettingStartedPage.propTypes = COMMON_PAGE_PROPS;

export default GettingStartedPage;

