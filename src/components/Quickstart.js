import clsx from 'clsx';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CodeView from 'components/CodeView';
import WizardDialog from 'components/WizardDialog';

import { Link } from 'components/typography';

import CRALogo from 'media/cra-logo.svg';
import GatsbyLogo from 'media/gatsby-logo.svg';

const command = `curl -L https://github.com/material-appkit/quickstart-create-react-app/archive/main.zip --output material-appkit-cra.zip &&\\
unzip material-appkit-cra.zip &&\\
rm material-appkit-cra.zip &&\\
mv quickstart-create-react-app-main my-app &&\\
cd my-app &&\\
npm install &&\\
npm start
`;

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

function Quickstart(props) {
  const classes = styles();

  const [wizardConfig, setWizardConfig] = useState(null);

  const handleWizardDialogDismiss = (result) => {
    console.log(result);
    setWizardConfig(null);
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
                  href="https://github.com/material-appkit/quickstart-create-react-app"
                >
                  Source
                </Link>

                <Link
                  className={classes.link}
                  href="https://cra.quickstart.material-appkit.com/"
                >
                  Demo
                </Link>

                <Link onClick={() => {
                  setWizardConfig({
                    title: "Grab n' Go",
                    steps: [{
                      title: 'Choose Project Name',
                      nextButton: null,
                      dialogProps: {
                        maxWidth: "xs",
                        fullWidth: true,
                      }
                    }, {
                      title: 'Command',
                      nextButton: null,
                    }]
                  })
                }}>
                  Wizard
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
                  href="https://github.com/material-appkit/quickstart-gatsby"
                  className={classes.link}>
                  Source
                </Link>

                <Link
                  href="https://gatsby.quickstart.material-appkit.com"
                  className={classes.link}
                >
                  Demo
                </Link>

                <Link onClick={() => {
                  setWizardConfig({
                    title: "Grab n' Go",
                  })
                }}>
                  Wizard
                </Link>
              </div>
            )}
          />
        </ListItem>
      </List>

      {wizardConfig &&
        <WizardDialog
          maxWidth="md"
          onDismiss={handleWizardDialogDismiss}
          open
          {...wizardConfig}
        >
          <CodeView language="bash">{command}</CodeView>
        </WizardDialog>
      }
    </>
  );
}

Quickstart.propTypes = {
  listClassName: PropTypes.string,
};

export default Quickstart;
