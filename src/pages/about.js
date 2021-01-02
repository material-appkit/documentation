import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import {
  ContentHeading,
  ContentSection,
  PageTitle,
  Paragraph,
} from 'components/typography';


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
          <Paragraph disableGutterBottom>
            Each and every exceptional piece of software has a number of traits in common. Listed
            below are some of the essential ones Material-AppKit strives to facilitate:
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
                primary="Consistency"
                secondary="
                  When performing a new task it is human nature to identify patterns which, once
                  recognized, enable them to repeat that task and others like it with an increasing
                  sense of ease. Uniformity of appearance and behavior will aid new users in
                  acquainting themselves with an application's available feature set, and also
                  reduce the time and effort required to achieve proficiency.
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
            Motivation
          </ContentHeading>
        </ContentSection>

        <ContentSection>
          <ContentHeading underline>
            Design Philosophy
          </ContentHeading>
          <Paragraph>
            Material-AppKit aims to strike a fair balance between convention and configuration.
          </Paragraph>
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

