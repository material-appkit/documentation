import { createMuiTheme } from '@material-ui/core/styles';

import OpenSansLightWoff from './font/open-sans-v18-latin-300.woff';
import OpenSansLightWoff2 from './font/open-sans-v18-latin-300.woff2';

import OpenSansRegularWoff from './font/open-sans-v18-latin-regular.woff';
import OpenSansRegularWoff2 from './font/open-sans-v18-latin-regular.woff2';

import OpenSansItalicWoff from './font/open-sans-v18-latin-italic.woff';
import OpenSansItalicWoff2 from './font/open-sans-v18-latin-italic.woff2';

import OpenSansDarkWoff from './font/open-sans-v18-latin-600.woff';
import OpenSansDarkWoff2 from './font/open-sans-v18-latin-600.woff2';

import OpenSansBoldWoff from './font/open-sans-v18-latin-700.woff';
import OpenSansBoldWoff2 from './font/open-sans-v18-latin-700.woff2';

const APP_BAR_HEIGHT = 56;
const NAVBAR_WIDTH = 220;
const SIDEBAR_WIDTH = 260;

const baseTheme = createMuiTheme();

/* open-sans-300 - latin */
const openSansLightFontFace = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `
    local(''),
    url(${OpenSansLightWoff2}) format('woff2'), 
    url(${OpenSansLightWoff}) format('woff')
  `,
};

/* open-sans-regular - latin */
const openSansRegularFontFace = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local(''),
    url(${OpenSansRegularWoff2}) format('woff2'), 
    url(${OpenSansRegularWoff}) format('woff') 
  `,
};

/* open-sans-italic - latin */
const openSansItalicFontFace = {
  fontFamily: 'Open Sans',
  fontStyle: 'italic',
  fontWeight: 400,
  src: `
    local(''),
    url(${OpenSansItalicWoff2}) format('woff2'), 
    url(${OpenSansItalicWoff}) format('woff')
  `,
};

/* open-sans-600 - latin */
const openSansDarkFontFace = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  src: ` 
    local(''),
    url(${OpenSansDarkWoff2}) format('woff2'), 
    url(${OpenSansDarkWoff}) format('woff')
  `
};

/* open-sans-700 - latin */
const openSansBoldFontFace = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `
    local(''),
    url(${OpenSansBoldWoff2}) format('woff2'), 
    url(${OpenSansBoldWoff}) format('woff')
  `
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#3C3B6E',
    },
    secondary: {
      main: '#B22234',
    },
  },

  typography: {
    fontFamily: [
        'Open Sans',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),

    h1: {
      fontSize: baseTheme.typography.pxToRem(40),
      fontWeight: 400,
    },

    h2: {
      fontSize: baseTheme.typography.pxToRem(24),
      fontWeight: 400,
    },

    h3: {
      fontSize: baseTheme.typography.pxToRem(20),
      fontWeight: 400,
    },

    h4: {
      fontSize: baseTheme.typography.pxToRem(16),
      fontWeight: 400,
    },

    body1: {
      lineHeight: 1.7,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          openSansLightFontFace,
          openSansRegularFontFace,
          openSansItalicFontFace,
          openSansDarkFontFace,
          openSansBoldFontFace,
        ],

        'html, body, #___gatsby, #gatsby-focus-wrapper': {
          [baseTheme.breakpoints.up('md')]: {
            height: '100vh',
          },
        },
      },
    },

    MuiTypography: {
      gutterBottom: {
        marginBottom: baseTheme.spacing(2),
      },
    }
  },

  //----------------------------------------------------------------------------
  // Application Theme
  appbar: {
    height: APP_BAR_HEIGHT,
  },

  navbar: {
    width: NAVBAR_WIDTH,
  },

  sidebar: {
    width: SIDEBAR_WIDTH,
  },


  // PROPERTY LIST
  propertyList: {
    root: {
      padding: 0,
    },

    listItem: {
      listItemRoot: {
        alignItems: 'baseline',
        display: 'flex',
        fontSize: baseTheme.typography.pxToRem(14),
        padding: '1px 0',
      },

      listItemIconRoot: {
        marginRight: 5,
        minWidth: 20,
      },

      listItemIcon: {
        height: 18,
        width: 18,
      },

      listItemTextRoot: {
        margin: 0,
        padding: 0,
      },

      label: {
        fontWeight: 500,
        marginRight: baseTheme.spacing(.5),
        "&:after": {
          content: '":"',
        },
      },

      inlineNestedList: {
        display: 'inline-flex',

        '& > *:not(:last-child)': {
          marginRight: baseTheme.spacing(.5),
          '&:after': {
            content: '","',
          },
        },
      },

      nestedListItem: {
        padding: 0,
        width: 'initial',
      }
    },
  },
});

export default theme;
