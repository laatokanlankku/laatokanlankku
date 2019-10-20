import { themeGray } from '../../../../../../constants/colors';

export default theme => ({
  container: {
    backgroundColor: themeGray,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
});
