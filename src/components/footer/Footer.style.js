import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default theme => ({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    zIndex: 2,
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
    },
  },
});

export const StyledGrid = styled(Grid).attrs({
  container: true,
})`
  position: relative;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 32px;
  padding-bottom: 32px;
`;
