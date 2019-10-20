import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Certificates.style';
import CertificatesList from './components/certificatesList/CertificatesList';

const Certificates = props => {
  const { classes, contentful, locale } = props;

  const forwardProps = {
    contentful,
    locale,
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Typography variant="h6" gutterBottom>
        {/* {content.fields.heading3[locale]} */}
        Serifikaatit
      </Typography>
      <CertificatesList {...forwardProps} />
    </Grid>
  );
};

export default withStyles(styles)(Certificates);
