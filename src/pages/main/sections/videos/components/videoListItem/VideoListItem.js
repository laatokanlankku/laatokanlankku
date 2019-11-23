import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './VideoListItem.style';

const VideoListItem = props => {
  const { classes, video } = props;

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  return (
    <Grid item xs={12} sm={4}>
      <Card elevation={0} square>
        <CardMedia
          className={classes.media}
          component="iframe"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="Paella dish"
        />
        {/* <iframe
          width="1440"
          height="762"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        /> */}
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(VideoListItem);
