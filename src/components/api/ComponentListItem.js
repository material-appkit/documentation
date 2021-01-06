import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({

}));

function ComponentListItem(props) {
  const classes = styles();

  const { component, modulePath, urlPrefix } = props;
  return (
    <ListItem>
      {component.displayName}
    </ListItem>
  );
}

ComponentListItem.propTypes = {
  component: PropTypes.object.isRequired,
  modulePath: PropTypes.string.isRequired,
  urlPrefix: PropTypes.string.isRequired,
};

export default ComponentListItem;
