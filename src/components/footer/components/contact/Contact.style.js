import { themeTimber } from '../../../../constants/colors';

export default theme => ({
  listItem: {
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  listItemIcon: {
    color: themeTimber,
    minWidth: 0,
    paddingRight: theme.spacing(1),
  },
  listItemText: {
    color: 'white',
    margin: 0,
  },
  typography: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '600',
    color: themeTimber,
  },
});
