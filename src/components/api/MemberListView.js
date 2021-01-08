import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  list: {
    padding: 0,
  },

  moduleListItem: {
    display: 'block',
    marginBottom: theme.spacing(4),
    padding: 0,
  },
}));

function MemberListView(props) {
  const classes = styles();

  const {
    listItemComponents,
    ModuleHeaderComponent,
    memberMap,
  } = props;

  return (
    <List
      className={classes.list}
      component="section"
    >
      {Object.keys(memberMap).sort().map((modulePath) => (
        <ListItem
          className={classes.moduleListItem}
          component="article"
          key={modulePath}
        >
          <ModuleHeaderComponent path={modulePath} />

          <List className={classes.list}>
            {memberMap[modulePath].components.map((component) => (
              <listItemComponents.component
                key={`${modulePath}/${component.displayName}`}
                modulePath={modulePath}
                representedObject={component}
                urlPrefix={`/api/core/${modulePath}/`}
              />
            ))}
          </List>

          <List className={classes.list}>
            {memberMap[modulePath].classes.map((member) => (
              <listItemComponents.class
                key={`${modulePath}/${member.name}`}
                modulePath={modulePath}
                representedObject={member}
                urlPrefix={`/api/core/${modulePath}/#`}
              />
            ))}

            {memberMap[modulePath].functions.map((member) => (
              <listItemComponents.function
                key={`${modulePath}/${member.name}`}
                modulePath={modulePath}
                representedObject={member}
                urlPrefix={`/api/core/${modulePath}/#`}
              />
            ))}
          </List>
        </ListItem>
      ))}
    </List>
  );
}

MemberListView.propTypes = {
  listItemComponents: PropTypes.object.isRequired,
  ModuleHeaderComponent: PropTypes.elementType,
  memberMap: PropTypes.object.isRequired,
};

export default MemberListView;
