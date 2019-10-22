import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Links.style';

const Links = props => {
  const { classes, contentful, locale, content } = props;

  const forwardProps = {
    contentful,
    locale,
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom className={classes.typography}>
        {content.fields.heading4[locale]}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Links);
