import { themeTimber } from '../../../../constants/colors';

export default theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
    },
  },
  heading: {
    fontWeight: 400,
    color: 'white',
  },
  description: {
    color: 'white',
  },
});
