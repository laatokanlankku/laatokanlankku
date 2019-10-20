import { themeGray } from '../../../../../../constants/colors';

export default theme => ({
  gridItem: {
    maxWidth: '250px',
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9,
    paddingTop: '100%',
    marginTop: '30',
  },
  cardContent: {
    backgroundColor: themeGray,
  },
});
