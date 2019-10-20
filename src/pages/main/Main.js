import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './Main.style';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';

// sections
import Hero from './sections/hero/Hero';
import Intro from './sections/intro/Intro';
import Services from './sections/services/Services';
import Team from './sections/team/Team';

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
      <Services {...sharedProps} />
      <Team {...sharedProps} />
      <Map />
      <Footer {...sharedProps} />
    </Grid>
  );
};

export default withStyles(styles)(Main);