import React from 'react';
import { Grid, Card, CardContent, CardHeader, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';
import styles from './ServiceListItem.style';

const ServiceListItem = props => {
  const { classes, data, locale } = props;

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
      <Card elevation={0} square={true} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <Icon>{data.icon['en-US']}</Icon>
            </Avatar>
          }
          title={data.title[locale]}
          classes={{
            title: classes.typography,
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description[locale]}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(ServiceListItem);
