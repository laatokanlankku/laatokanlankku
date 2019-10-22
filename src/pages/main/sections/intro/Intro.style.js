import { themeTimber } from '../../../../constants/colors';

export default theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
    },
  },
  gridItem: {
    display: 'flex',
  },
  typography: {
    fontWeight: 600,
    textTransform: 'uppercase',
    color: themeTimber,
  },
});
