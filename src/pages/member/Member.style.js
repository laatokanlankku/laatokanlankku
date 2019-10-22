import styled from 'styled-components';
import { themeTimber } from '../../constants/colors';

export default theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), #FAFAFA)',
  },
  position: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  avatar: {
    height: '250px',
    width: 'auto',
    marginBottom: theme.spacing(2),
  },
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
    fontWeight: 600,
    textTransform: 'uppercase',
    color: themeTimber,
  },
});

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
