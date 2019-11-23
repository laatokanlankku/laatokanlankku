import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './VideoList.style';
import VideoListItem from '../videoListItem/VideoListItem';

const VideoList = props => {
  const { classes, youtube } = props;
  return (
    <Grid container justify="center" spacing={2}>
      {youtube.items.map(video => (
        <VideoListItem video={video} />
      ))}
    </Grid>
  );
};

export default withStyles(styles)(VideoList);
