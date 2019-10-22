import { themeGray, themeCarelia } from '../../../../../../constants/colors';

export default theme => ({
  gridItem: {
    maxWidth: '250px',
  },
  media: {
    position: 'relative',
    height: 0,
    // paddingTop: '56.25%', // 16:9,
    paddingTop: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  typographyOverlay: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  cardContent: {
    backgroundColor: themeGray,
    paddingLeft: theme.spacing(1),
    borderTop: `4px solid ${themeCarelia}`,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  typographyIcon: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: '1rem',
    color: themeCarelia,
    marginTop: '2px',
    marginRight: theme.spacing(1),
  },
  typographyHighlight: {
    fontSize: '0.875rem',
    fontWeight: 600,
    paddingTop: '4px',
  },
});
