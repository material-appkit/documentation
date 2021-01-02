import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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

const PROJECT_INFO_MAP = {
  CRA: {
    repo: 'quickstart-create-react-app',
    title: 'Create React App',
    logoProps: {
      src: CRALogo,
      width: '90',
      height: '100%',
    },
    demoUrl: 'https://cra.quickstart.material-appkit.com',
    sourceUrl: 'https://github.com/material-appkit/quickstart-create-react-app/',
  },

  Gatsby: {
    repo: 'quickstart-gatsby',
    title: 'Gatsby',
    listItemIconStyle: { padding: 6 },
    logoProps: {
      src: GatsbyLogo,
      width: '78',
      height: '100%',
    },
    demoUrl: 'https://gatsby.quickstart.material-appkit.com',
    sourceUrl: 'https://github.com/material-appkit/quickstart-gatsby/',
  },
};

const generateCommand = (type, title) => {
  const repoName = PROJECT_INFO_MAP[type].repo;
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


const styles = makeStyles((theme) => ({
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

function QuickstartItem({ type }) {
  const classes = styles();

  const projectInfo = PROJECT_INFO_MAP[type];
  const {
    demoUrl,
    listItemIconStyle,
    logoProps,
    sourceUrl,
    title,
  } = projectInfo;

  const [wizardOpen, setWizardOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');

  const [command, setCommand] = useState(null);

  useEffect(() => {
    if ((type && projectTitle)) {
      setCommand(generateCommand(type, projectTitle));
    } else {
      setCommand(null);
    }
  }, [type, projectTitle]);


  const handleWizardDialogDismiss = (flag) => {
    setWizardOpen(false);
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
    <ListItem disableGutters>
      <ListItemIcon
        className={classes.listItemIcon}
        style={listItemIconStyle || {}}
      >
        <img alt={`${title} Logo`} {...logoProps} />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={<Typography variant="h3">{projectInfo.title}</Typography>}
        secondary={(
          <div className={classes.quickstartLinkContainer}>
            <Link
              className={classes.link}
              href={demoUrl}
            >
              Demo
            </Link>
            <Link
              className={classes.link}
              onClick={() => setWizardOpen(true)}
            >
              Command
            </Link>
            <Link
              className={classes.link}
              href={sourceUrl}
            >
              Source
            </Link>
          </div>
        )}
      />

      {wizardOpen &&
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
              title: 'Get Command',
              commitButtonTitle: 'Copy to Clipboard',
              content: command ? (
                <CodeView language="bash">
                  {command}
                </CodeView>
              ) : null,
            },
          ]}
          title={`${type} Quickstart`}
        />
      }
    </ListItem>

  );
}

QuickstartItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default QuickstartItem;
