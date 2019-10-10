import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import video from '../../assets/videos/DJI_0317_480p_24fps_Morpheus_Mavic_Air.mp4';
import styles from './Main.style';

// sections
import Hero from './sections/hero/Hero';

const Main = props => {
  const { classes, contentful } = props;

  return (
    <Grid container>
      <Hero contentful={contentful} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore.
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Main);
