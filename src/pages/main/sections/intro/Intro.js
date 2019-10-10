import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import styles from './Intro.style';
import Signature from './components/Signature';

const Intro = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === 'XeWNVVScswYoEwi8yFhjy');
  return (
    <Grid container direction="column" className={classes.container}>
      <Typography variant="h6">{content.fields.title[locale]}</Typography>
      <Typography variant="h5">{content.fields.heading[locale]}</Typography>
      <Typography variant="body1">{content.fields.body[locale]}</Typography>
      <Grid item>
        <Signature />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Intro);
