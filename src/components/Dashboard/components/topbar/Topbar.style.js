import { themeCarelia, themeTimber } from '../../../../constants/colors';

const drawerWidth = 256;

export default theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: 'black',
    backgroundColor: themeCarelia,
    transition: 'background-color 1s',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarVisibility: {
    backgroundColor: 'transparent',
    transition: 'background-color 1s',
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '-24px',
  },
  title: {
    color: themeTimber,
  },
  subtitle: {
    color: themeTimber,
  },
});
