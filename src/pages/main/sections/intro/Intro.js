import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Intro.style';

const Intro = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === 'XeWNVVScswYoEwi8yFhjy');
  console.log(content);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        {/* <Grid item xs={12} sm={4}>
          <img
            src={content.fields.photo['en-US'].fields.file['en-US'].url}
            alt={content.fields.photo['en-US'].fields.title[locale]}
          />
          <Typography variant="body2">
            {content.fields.photo['en-US'].fields.description[locale]}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.typographyHighlight}>
            {content.fields.photo['en-US'].fields.title[locale]}
          </Typography>
        </Grid> */}
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
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Intro);
