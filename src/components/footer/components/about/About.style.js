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
  typography: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '600',
    color: themeTimber,
  },
  description: {
    color: 'white',
  },
  img: {
    float: 'left',
    width: 'auto',
    height: '128px',
    margin: '6px 16px 0 0',
  },
});
