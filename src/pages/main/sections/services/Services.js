import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Services.style';
import ServiceList from './components/serviceList/ServicesList';

const Services = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === '1ELdpGt6Fj7ZL2slHeT5LB');

  const forwardProps = {
    contentful,
    locale,
  };
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h6">{content.fields.title[locale]}</Typography>
          <Typography variant="h5">{content.fields.heading[locale]}</Typography>
          <Typography variant="body1">{content.fields.description[locale]}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.overflow}>
          <ServiceList {...forwardProps} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Services);
