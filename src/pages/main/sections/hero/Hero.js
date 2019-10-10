import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styles from './Hero.style';

const Hero = props => {
  const { classes, contentful } = props;

  const content = contentful.items.find(item => item.sys.id === '7BUc3DDSVYk5fJOtsjjC9F');
  return (
    <div className={classes.root}>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        poster={content.fields.poster['en-US'].fields.file['en-US'].url}
        className={classes.video}
      >
        <source src={content.fields.trailer['en-US'].fields.file['en-US'].url} type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <Typography variant="h4">{content.fields.heading['en-US']}</Typography>
        <Typography variant="body1">{content.fields.description['en-US']}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Hero);
