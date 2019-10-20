import { themeAmber } from '../../../../../../constants/colors';

export default theme => ({
  listItem: {
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  listItemIcon: {
    color: themeAmber,
    minWidth: 0,
    paddingRight: theme.spacing(1),
  },
  listItemText: {
    margin: 0,
  },
});
