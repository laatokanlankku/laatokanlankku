import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Intro.style';
import Signature from './components/Signature';

const Intro = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === 'XeWNVVScswYoEwi8yFhjy');
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.typography}>
            {content.fields.title[locale]}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {content.fields.heading[locale]}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {content.fields.body[locale]}
          </Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Signature />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Intro);
