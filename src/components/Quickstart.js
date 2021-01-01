import clsx from 'clsx';

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';
import WizardDialog from '@material-appkit/core/components/WizardDialog';
import { slugify } from '@material-appkit/core/util/string';

import CodeView from 'components/CodeView';
import { Link } from 'components/typography';

import CRALogo from 'media/cra-logo.svg';
import GatsbyLogo from 'media/gatsby-logo.svg';

const PROJECT_REPO_MAP = {
  CRA: 'quickstart-create-react-app',
  Gatsby: 'quickstart-gatsby',

};

const styles = makeStyles((theme) => ({
  list: {
    padding: 0,
  },

  listItem: {
    padding: 0,
  },

  listItemIcon: {
    marginRight: theme.spacing(1),
  },

  quickstartLinkContainer: {
    margin: theme.spacing(0.5, 0),
  },

  link: {
    marginRight: theme.spacing(1),
  }
}));

const generateCommand = (type, title) => {
  const repoName = PROJECT_REPO_MAP[type];
  const archiveURL = `https://github.com/material-appkit/${repoName}/archive/main.zip`;
  const archiveFilename = `${repoName}.zip`;
  const appSlug = slugify(title);

  return `curl -L ${archiveURL} --output ${archiveFilename} &&\\
  unzip ${archiveFilename} &&\\
  rm ${archiveFilename} &&\\
  mv ${repoName}-main ${appSlug} &&\\
  cd ${appSlug} &&\\
  npm install &&\\
  npm start
  `;
};

function Quickstart(props) {
  const classes = styles();

  const [wizardType, setWizardType] = useState(null);
  const [projectTitle, setProjectTitle] = useState('');

  const [command, setCommand] = useState(null);

  useEffect(() => {
    if ((wizardType && projectTitle)) {
      setCommand(generateCommand(wizardType, projectTitle));
    } else {
      setCommand(null);
    }
  }, [wizardType, projectTitle]);

  const handleWizardDialogDismiss = (flag) => {
    setWizardType(null);
    setProjectTitle('');

    if (flag) {
      navigator.clipboard.writeText(command).then(() => {
        SnackbarManager.info('Command copied to clipboard');
      }).catch(() => {
        SnackbarManager.error('Unable to access clipboard');
      });
    }
  };

  return (
    <>
      <List className={clsx(classes.list, props.listClassName)}>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <img alt="Create-React-App Logo" src={CRALogo} width="90px" height="100%" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h3">Create React App</Typography>}
            secondary={(
              <div className={classes.quickstartLinkContainer}>
                <Link
                  className={classes.link}
                  href="https://cra.quickstart.material-appkit.com/"
                >
                  Demo
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => setWizardType('CRA')}
                >
                  Command
                </Link>
                <Link
                  className={classes.link}
                  href="https://github.com/material-appkit/quickstart-create-react-app"
                >
                  Source
                </Link>
              </div>
            )}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemIcon
            className={classes.listItemIcon}
            style={{ padding: 6 }}
          >
            <img alt="Gatsby Logo" src={GatsbyLogo} width="78" height="100%" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={(<Typography variant="h3">Gatsby</Typography>)}
            secondary={(
              <div className={classes.quickstartLinkContainer}>
                <Link
                  className={classes.link}
                  href="https://gatsby.quickstart.material-appkit.com"
                >
                  Demo
                </Link>
                <Link
                  className={classes.link}

                  onClick={() => setWizardType('Gatsby')}
                >
                  Command
                </Link>
                <Link
                  className={classes.link}
                  href="https://github.com/material-appkit/quickstart-gatsby"
                >
                  Source
                </Link>
              </div>
            )}
          />
        </ListItem>
      </List>

      {wizardType &&
        <WizardDialog
          maxWidth="md"
          onDismiss={handleWizardDialogDismiss}
          open
          steps={[
            {
              title: 'Project Title',
              valid: Boolean(command),
              dialogProps: {
                maxWidth: "xs",
                fullWidth: true,
              },
              content: (
                <TextField
                  helperText={projectTitle ? `Root Directory: ${slugify(projectTitle)}` : null}
                  fullWidth
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="My New Project Title"
                  variant="outlined"
                  value={projectTitle}
                />
              ),
            },
            {
              title: 'Launch Cmd',
              commitButtonTitle: 'Copy to Clipboard',
              content: command ? (
                <CodeView language="bash">
                  {command}
                </CodeView>
              ) : null,
            },
          ]}
          title={`${wizardType} Quickstart`}
        />
      }
    </>
  );
}

Quickstart.propTypes = {
  listClassName: PropTypes.string,
};

export default Quickstart;
