import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'components/typography';

import CRALogo from 'media/cra-logo.svg';
import GatsbyLogo from 'media/gatsby-logo.svg';

const styles = makeStyles((theme) => ({
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

  return (
    <List className={props.listClassName}>
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
            </div>
          )}
        />
      </ListItem>
    </List>
  );
}

Quickstart.propTypes = {
  listClassName: PropTypes.string,
};

export default Quickstart;
