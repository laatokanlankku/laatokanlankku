import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Team.style';
import MemberList from './components/MemberList/MemberList';

const Team = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === '3dW9gWIojubr1UG1n0vyrk');

  const forwardProps = {
    contentful,
    locale,
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="subtitle1" className={classes.typography}>
            {content.fields.title[locale]}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {content.fields.heading[locale]}
          </Typography>
          <Typography variant="body1">{content.fields.description[locale]}</Typography>
        </Grid>
      </Grid> */}
      <MemberList {...forwardProps} />
    </Container>
  );
};

export default withStyles(styles)(Team);
