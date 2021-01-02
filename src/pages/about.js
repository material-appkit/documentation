import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import {
  ContentHeading,
  ContentSection,
  Link,
  PageTitle,
  Paragraph,
} from 'components/typography';

const DryPrincipleLink = <Link href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" variant="button">DRY Principle</Link>;


const styles = makeStyles((theme) => ({
  dl: {
    margin: 0,
    padding: theme.spacing(1, 2),
  },

  strong: {
    fontWeight: 600,
  },

  checkListItem: {
    padding: '0 4px',
  },

  checklistItemIcon: {
    alignSelf: 'flex-start',
    minWidth: 32,
    paddingTop: theme.spacing(1),
  },
}));


function AboutPage(props) {
  const classes = styles();

  return (
    <Layout title="About" {...props}>
      <main>
        <ContentSection>
          <PageTitle>
            About Material-AppKit
          </PageTitle>
          <Paragraph>
            Times have never been better for front-end web developers. In recent years we have
            witness an influx of languages, frameworks, libraries, toolkits, and sophisticated
            developer tools, all aimed bringing the development process for web apps up to par with
            that which native app developers have enjoyed since long before the world
            was <strike>cursed</strike> graced with smartphones.
          </Paragraph>
          <Paragraph>
            Now in {new Date().getFullYear()}, as users worldwide tend more and more toward the use
            of mobile devices over desktop/laptop computers as their preferred avenue to the
            Internet, the ongoing case of <em>"Web vs. Native"</em> sees mounting evidence
            supporting the claim that users are ready and willing to acknowledge mobile web apps
            as a legitimate (sometimes even preferable) way of creating and consuming content.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <ContentHeading underline>
            Motivation
          </ContentHeading>
          <Paragraph>
            Application developers wish to concern themselves as much as possible with the end goal
            of providing their end users with the means to create and consume content. It just so
            happens that along the way they are often required to produce the necessary gadgetry
            required to achieve this goal.
          </Paragraph>
          <Paragraph>
            Think of the Material-UI components as a giant box of assorted Lego pieces.
            None of them are of particular use individually, but with an inventive mind and some
            amount of ability they can be combined into all sorts of powerful, reusable machines.
          </Paragraph>
          <Paragraph>
            Material-AppKit was born out of one software author's unwavering desire to uphold
            the {DryPrincipleLink}. Years of practice have resulted in the recognition of common
            UI paradigms that are generic in nature and therefore ripe for abstract implementation.
            By gathering these various abstract implementations into a single, neatly packaged
            bundle and making it available to the wider development community, it is the author's
            hope that others will benefit from the ability to dedicate their time and effort toward
            the solving of real-world problems rather than the design and construction of a typical
            mousetrap.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <ContentHeading underline>
            Design Philosophy
          </ContentHeading>
          <Paragraph>
            Material-AppKit aims to strike a fair balance between convention and configuration.
          </Paragraph>
          <List disablePadding>
            <ListItem className={classes.checkListItem}>
              <ListItemIcon className={classes.checklistItemIcon}>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText
                primary="Stability"
                secondary="
                  In order to establish and maintain a sense of trust and confidence in a
                  software system, every effort must be made to ensure that they are repeatedly
                  enabled to accomplish their task without any amount of unanticipated interruption.
                "
              />
            </ListItem>

            <ListItem className={classes.checkListItem}>
              <ListItemIcon className={classes.checklistItemIcon}>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText
                primary="Uniformity"
                secondary="
                  When performing a new task it is human nature to identify patterns which, once
                  recognized, enable them to repeat that task and others like it with an increasing
                  sense of ease. Uniformity of appearance and behavior will aid new users in
                  acquainting themselves with an application's feature set while reducing
                  the time and effort required to achieve proficiency.
                "
              />
            </ListItem>

            <ListItem className={classes.checkListItem}>
              <ListItemIcon className={classes.checklistItemIcon}>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText
                primary="Simplicity"
                secondary="

                "
              />
            </ListItem>

          </List>
        </ContentSection>

        <ContentSection>
          <ContentHeading underline>
            The Author
          </ContentHeading>
        </ContentSection>
      </main>
    </Layout>
  );
}

AboutPage.propTypes = COMMON_PAGE_PROPS;

export default AboutPage;

