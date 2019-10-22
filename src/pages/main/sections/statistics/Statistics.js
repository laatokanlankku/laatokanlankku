import React from 'react';
import CountUp from 'react-countup';
import { Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Fade from 'react-reveal/Fade';
import styles, { StyledContainer } from './Statistics.style';

const Statistics = props => {
  const { classes } = props;
  return (
    <Container>
      <Grid>
        <Fade bottom>
          <Grid item xs={12} sm={3}>
            <CountUp
              start={0}
              end={160527.012}
              delay={0}
              duration={2.75}
              separator=" "
              decimals={4}
              decimal=","
              prefix="EUR "
              suffix=" left"
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  {/* <button onClick={() => start()}>Start</button> */}
                </div>
              )}
            </CountUp>
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Statistics);
