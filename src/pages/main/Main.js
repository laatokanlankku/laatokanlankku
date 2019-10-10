import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './Main.style';

// sections
import Hero from './sections/hero/Hero';
import Intro from './sections/intro/Intro';

const Main = props => {
  const { classes, contentful, locale } = props;

  const sharedProps = {
    contentful,
    locale,
  };

  return (
    <Grid container>
      <Hero contentful={contentful} />
      <Intro {...sharedProps} />
    </Grid>
  );
};

export default withStyles(styles)(Main);
