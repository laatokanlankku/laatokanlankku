import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Videos.style';
import useAxios from '../../../../utils/hooks/useAxios';
import VideoList from './components/videoList/VideoList';

// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCoTopEVeisTkHkrIJxFHPqw&order=date&type=video&videoSyndicated=true&key=AIzaSyCOqpTpeyiULFufL7Wx5StuG87DeRbCGgM

const Videos = props => {
  const { classes } = props;

  const [response, isLoading, isError, request] = useAxios();

  useEffect(() => {
    request({
      method: 'get',
      baseURL: 'https://www.googleapis.com/youtube/v3/search?',
      params: {
        part: 'snippet',
        order: 'date',
        channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID,
        type: 'video',
        videoSyndicated: true,
        maxResults: 3,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }, []);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      {!response ? null : (
        <Container maxWidth="lg" className={classes.container}>
          <VideoList youtube={response} />
        </Container>
      )}
    </>
  );
};

export default withStyles(styles)(Videos);
