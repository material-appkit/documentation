import React from 'react';
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import CodeView from 'components/CodeView';

import { ContentHeading } from 'components/typography';
import { COMMON_PAGE_PROPS } from 'variables';
import { fileContent } from 'util/shortcuts';

import ApplicationLogo from 'media/application-logo.svg';
import CRALogo from 'media/cra-logo.svg';
import GatsbyLogo from 'media/gatsby-logo.svg';

//------------------------------------------------------------------------------
const quickstartStyles = makeStyles((theme) => ({
  listItemIcon: {
    marginRight: theme.spacing(1),
  },

  link: {
    marginRight: theme.spacing(1),
  }
}));

function Quickstart() {
  const classes = quickstartStyles();

  return (
    <>
      <ContentHeading gutterBottom>
        Quickstart
      </ContentHeading>
      <Typography>
        Start coding immediately using one of the following project templates:
      </Typography>

      <List>
        <ListItem disableGutters>
          <ListItemIcon className={classes.listItemIcon}>
            <img alt="Create-React-App Logo" src={CRALogo} width="90" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h3" gutterBottom>Create React App</Typography>}
            secondary={(
              <div>
                <Link
                  className={classes.link}
                  href="#"
                >
                  Source
                </Link>
                <Link
                  className={classes.link}
                  href="https://material-appkit.github.io/quickstart-create-react-app/"
                >
                  Demo
                </Link>
              </div>
            )}
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemIcon
            className={classes.listItemIcon}
            style={{ padding: 6 }}
          >
            <img alt="Gatsby Logo" src={GatsbyLogo} width="78" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={(<Typography variant="h3" gutterBottom>Gatsby</Typography>)}
            secondary={(
              <div>
                <Link href="#" className={classes.link}>Source</Link>
                <Link href="#" className={classes.link}>Demo</Link>
              </div>
            )}
          />
        </ListItem>
      </List>
    </>
  );
}

//------------------------------------------------------------------------------
const styles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    padding: theme.spacing(6, 2, 2),
  },

  header: {
    marginBottom: 32,
    textAlign: 'center',
  },

  title: {
    fontSize: theme.typography.pxToRem(28),
    letterSpacing: '0.45rem',
    marginTop: theme.spacing(2),
    textTransform: 'uppercase',
  },

  version: {
    fontSize: theme.typography.pxToRem(20),
    letterSpacing: '0.2rem',
  },

  instructionSection: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    padding: theme.spacing(0, 2),
  },

  instructionArticle: {
    padding: theme.spacing(2, 0, 1),
  }
}));


function HomePage(props) {
  const classes = styles();

  const samples = props.data.samples.nodes;

  return (
    <Layout
      contentContainerClassName={classes.contentContainer}
      showBackButton={false}
      title="Introduction"
      {...props}
    >
      <main className={classes.main}>
        <header className={classes.header}>
          <img alt="Material-AppKit Logo" src={ApplicationLogo} width="300" />

          <Typography component="h1" color="primary" className={classes.title}>
            {process.env.GATSBY_APP_TITLE}
          </Typography>

          <Typography component="h2" className={classes.version}>
            v{process.env.GATSBY_APP_VERSION}
          </Typography>
        </header>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <section className={classes.instructionSection}>
              <article className={classes.instructionArticle}>
                <ContentHeading gutterBottom>
                  Installation
                </ContentHeading>
                <Typography>
                  Install Material-AppKit via npm:
                </Typography>
                <CodeView language="bash">
                  $ npm install @material-appkit/core
                </CodeView>
              </article>

              <article className={classes.instructionArticle}>
                <Quickstart />
              </article>
            </section>
          </Grid>

          <Grid item xs={12} md={6}>
            <section className={classes.instructionSection}>
              <article className={classes.instructionArticle}>
                <ContentHeading gutterBottom>
                  Usage
                </ContentHeading>
                <Typography>
                  Import components and utilities as you would any other
                  Material-UI component or function.
                </Typography>
                <CodeView language="jsx">
                  {fileContent(samples, 'usage-example.jsx')}
                </CodeView>
              </article>
            </section>
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
}

HomePage.propTypes = COMMON_PAGE_PROPS;

export default HomePage;


export const query = graphql`
  query {
    samples: allFile(filter: {relativeDirectory: {eq: "samples/index"}}) {
      nodes {
        base
        internal {
          content
        }
      }
    }  
  }
`;
