const drawerWidth = 128;

export default theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  button: {
    color: 'white',
    // backgroundColor: blue.A700,
    textTransform: 'none',
    borderRadius: '20px',
    paddingRight: theme.spacing(1),
    '&:hover': {
      //   backgroundColor: blue.A700,
    },
  },
  divider: {
    // backgroundColor: grey[200],
  },
  text: {
    // color: blue.A700,
  },
});
