import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import styles from './Hero.style';

const Hero = props => {
  const { classes, contentful } = props;

  const content = contentful.items.find(item => item.sys.id === '7BUc3DDSVYk5fJOtsjjC9F');
  return (
    <div className={classes.root}>
      <video
        autoPlay
        loop
        muted
        poster={content.fields.poster['en-US'].fields.file['en-US'].url}
        className={classes.video}
      >
        <source src={content.fields.trailer['en-US'].fields.file['en-US'].url} type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom className={classes.heading}>
                {content.fields.heading['en-US']}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {content.fields.description['en-US']}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default withStyles(styles)(Hero);
