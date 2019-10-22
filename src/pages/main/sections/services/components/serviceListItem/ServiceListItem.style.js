import { themeCarelia, themeTimber } from '../../../../../../constants/colors';

export default theme => ({
  card: {
    backgroundColor: 'transparent',
  },
  avatar: {
    color: themeTimber,
    backgroundColor: themeCarelia,
  },
  typography: {
    textTransform: 'uppercase',
    color: themeCarelia,
  },
});
