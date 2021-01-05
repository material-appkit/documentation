import clsx from 'clsx';

import Prism from 'prismjs';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  code: {
    '&[class*="language-"]': {
      fontFamily: "'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    }
  },

  singleline: {
    '&[class*="language-"]': {
      lineHeight: 1,
    }
  },
}));

function CodeView({ children, language, singleline }) {
  const classes = styles();

  const [html] = useState(() => {
    return {
      __html: Prism.highlight(children, Prism.languages[language], language)
    };
  });

  const preClassNames = [`language-${language}`];
  if (singleline) {
    preClassNames.push(classes.singleline);
  }

  const codeClassNames = [`language-${language}`, classes.code];
  if (singleline) {
    codeClassNames.push(classes.singleline);
  }

  return (
    <pre className={clsx(preClassNames)}>
      <code
        className={clsx(codeClassNames)}
        dangerouslySetInnerHTML={html}
      />
    </pre>
  );
}

CodeView.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  singleline: PropTypes.bool,
};

export default CodeView;
