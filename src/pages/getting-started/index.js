import React from 'react';

import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import CodeView from 'components/CodeView';
import QuickstartItem from 'components/QuickstartItem';

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

const MuiCoreLink = <Link href="https://www.npmjs.com/package/@material-ui/core" variant="button">@material-ui/core</Link>;
const MuiIconsLink = <Link href="https://www.npmjs.com/package/@material-ui/icons" variant="button">@material-ui/icons</Link>;
const MuiLablLink = <Link href="https://www.npmjs.com/package/@material-ui/lab" variant="button">@material-ui/lab</Link>;
const MuiSnackbarLink = <Link href="https://material-ui.com/components/snackbars/#snackbar" variant="button">Snackbar</Link>
const NotistackLink = <Link href="https://iamhosseindhv.com/notistack/demos" variant="button">notistack</Link>

const styles = makeStyles((theme) => ({
  quickstartList: {
    padding: 0,

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  }
}));

function GettingStartedPage(props) {
  const classes = styles();

  return (
    <Layout title="Getting Started" {...props}>
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
          <ContentHeading id="quickstart" underline>
            Quickstart
          </ContentHeading>
          <Paragraph>
            Those who prefer to shoot first and ask questions later can get straight to business
            using one the following pre-configured project templates.
            The <strong>"Command"</strong> link below may be used to generate a one-off command
            to retrieve, install, and run a new project.
            To learn more about the default configuration of each of these templates, visit
            the {TemplatesLink} page.
          </Paragraph>
          <List className={classes.quickstartList}>
            <QuickstartItem type="CRA" />
            <QuickstartItem type="Gatsby" />
          </List>
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
          <Paragraph>
            If you're already familiar with Material-UI you should hit the ground running with
            Material-AppKit. It follows the same general paradigm in terms of the way components
            are imported, instantiated, and styled. Consult the {APIReferenceLink} pages for detailed
            information on the available properties, styling hooks, function arguments, etc.
          </Paragraph>

          <Paragraph>
            The majority of available components and utilities are prepared for use straight out of
            the box. Those that require bootstrapping (ex: NavManager, SnackbarManager) include
            a detailed description of these requirements on their associated documentation pages.
          </Paragraph>

        </ContentSection>
      </main>
    </Layout>
  );
}

GettingStartedPage.propTypes = COMMON_PAGE_PROPS;

export default GettingStartedPage;

