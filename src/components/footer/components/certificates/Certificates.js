import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Certificates.style';
import CertificatesList from './components/certificatesList/CertificatesList';

const Certificates = props => {
  const { classes, contentful, locale, content } = props;

  const forwardProps = {
    contentful,
    locale,
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" gutterBottom className={classes.typography}>
        {content.fields.heading3[locale]}
      </Typography>
      <CertificatesList {...forwardProps} />
    </Grid>
  );
};

export default withStyles(styles)(Certificates);
