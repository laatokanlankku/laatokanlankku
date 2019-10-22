import styled from 'styled-components';
import { Container } from '@material-ui/core';

export default theme => ({});

export const StyledContainer = styled(Container).attrs({})`
  position: relative;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 32px;
  padding-bottom: 32px;
`;
