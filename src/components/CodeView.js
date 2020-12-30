import Prism from 'prismjs';

import PropTypes from 'prop-types';
import React, { useState } from 'react';


function CodeView({ children, language, singleline }) {
  const [html] = useState(() => {
    return {
      __html: Prism.highlight(children, Prism.languages[language], language)
    };
  });

  const style = {
    lineHeight: singleline ? 1 : 1.3,
  };

  return (
    <pre
      className={`language-${language}`}
      style={style}
    >
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={html}
        style={style}
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
