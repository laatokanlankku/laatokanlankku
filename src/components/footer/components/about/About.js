import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './About.style';

const About = props => {
  const { classes, content, locale } = props;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom className={classes.typography}>
        {content.fields.heading[locale]}
      </Typography>
      <img
        src={content.fields.logo['en-US'].fields.file['en-US'].url}
        alt=""
        className={classes.img}
      />
      <Typography variant="body2" className={classes.description}>
        {content.fields.description[locale]}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(About);
