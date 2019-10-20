import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './MemberListItem.style';

const MemberListItem = props => {
  const { classes, data, locale } = props;
  return (
    <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
      <Card elevation={0} square={true} className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.photo['en-US'].fields.file['en-US'].url}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle1" align="center">
              {data.name[locale]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              {data.title[locale]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MemberListItem);
