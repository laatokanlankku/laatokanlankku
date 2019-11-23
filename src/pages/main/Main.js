import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './Main.style';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';

// sections
import Hero from './sections/hero/Hero';
import Intro from './sections/intro/Intro';
// import Statistics from './sections/statistics/Statistics';
import Services from './sections/services/Services';
import Team from './sections/team/Team';
import Videos from './sections/videos/Videos';

const Main = props => {
  const { classes, contentful, locale } = props;

  const sharedProps = {
    contentful,
    locale,
  };

  return (
    <Grid container>
      <Hero {...sharedProps} />
      <Intro {...sharedProps} />
      {/* <Statistics /> */}
      <Services {...sharedProps} />
      <Team {...sharedProps} />
      <Map />
      <Videos />
      <Footer {...sharedProps} />
    </Grid>
  );
};

export default withStyles(styles)(Main);
