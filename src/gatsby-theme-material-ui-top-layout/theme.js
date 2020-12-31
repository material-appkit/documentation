import { createMuiTheme } from '@material-ui/core/styles';

const APP_BAR_HEIGHT = 56;
const NAVBAR_WIDTH = 220;
const SIDEBAR_WIDTH = 260;

const baseTheme = createMuiTheme();

const theme = createMuiTheme({
  //----------------------------------------------------------------------------
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
    },

    h2: {
      fontSize: baseTheme.typography.pxToRem(24),
    },

    h3: {
      fontSize: baseTheme.typography.pxToRem(20),
    },

    h4: {
      fontSize: baseTheme.typography.pxToRem(16),
    },

    body1: {
      lineHeight: 1.7,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
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
