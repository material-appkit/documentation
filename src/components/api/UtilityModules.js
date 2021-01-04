import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { ContentHeading } from 'components/typography';

//------------------------------------------------------------------------------
const utilityModuleStyles = makeStyles((theme) => ({
  article: {
    marginBottom: theme.spacing(2),
  }
}));


function UtilityModule({ directory, members }) {
  const classes = utilityModuleStyles();

  return (
    <article className={classes.article}>
      <ContentHeading variant="h3">
        {directory}
      </ContentHeading>

    </article>
  );
}

UtilityModule.propTypes = {
  directory: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};


//------------------------------------------------------------------------------
function UtilityModules({ modules }) {
  const moduleDirectories = Object.keys(modules).sort();
  return moduleDirectories.map((relativeDirectory) => {
    const members = [].concat.apply([], modules[relativeDirectory].map(
      (m) => m.childrenDocumentationJs
    ));

    return (
      <UtilityModule
        key={relativeDirectory}
        directory={relativeDirectory}
        members={members}
      />
    );
  });
}

UtilityModules.propTypes = {
  modules: PropTypes.object.isRequired,
};

export default UtilityModules;
