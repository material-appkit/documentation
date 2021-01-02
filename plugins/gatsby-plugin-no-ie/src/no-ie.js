import React from 'react';

import NoIE from './no-ie.png';
import FirefoxIcon from './firefox.png';
import GoogleChromeIcon from './google-chrome.png';
import MicrosoftEdgeIcon from './microsoft-edge.png';
import SafariIcon from './safari.png';

export default function NoIETemplate(props) {
  const containerStyle = {
    maxWidth: 500,
    margin: 'auto',
    paddingTop: 32,
    width: '90%',
  };

  const imageStyle = {
    width: '100%',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: 500,
    textAlign: 'center',
  };

  const browserListStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const browserListItemStyle = {
    display: 'inline-block',
    width: '25%',
    padding: 8,
  };

  const browserIconStyle = {
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <img
        alt="No IE Logo"
        src={NoIE}
        style={imageStyle}
      />

      <h2 style={headingStyle}>
        The use of Internet Explorer is strictly prohibited. Please use one of the following supported browsers:
      </h2>

      <ul style={browserListStyle}>
        <li style={browserListItemStyle}>
          <a href="https://www.google.com/chrome/">
            <img
              alt="Google Chrome Icon"
              src={GoogleChromeIcon}
              style={browserIconStyle}
            />
          </a>
        </li>

        <li style={browserListItemStyle}>
          <a href="https://www.mozilla.org/firefox/">
            <img
              alt="Firefox Icon"
              src={FirefoxIcon}
              style={browserIconStyle}
            />
          </a>
        </li>

        <li style={browserListItemStyle}>
          <a href="https://www.apple.com/ca/safari/">
            <img
              alt="Safari Icon"
              src={SafariIcon}
              style={browserIconStyle}
            />
          </a>
        </li>

        <li style={browserListItemStyle}>
          <a href="http://www.microsoft.com/edge">
            <img
              alt="Microsoft Edge Icon"
              src={MicrosoftEdgeIcon}
              style={browserIconStyle}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
