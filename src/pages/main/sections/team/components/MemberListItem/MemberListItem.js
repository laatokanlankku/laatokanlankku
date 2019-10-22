import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { PhoneRounded, EmailRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './MemberListItem.style';

const MemberListItem = props => {
  const { classes, data, locale, id } = props;

  const getEmail = email => {
    const domain = /[^@]*$/.exec(email)[0];
    const emailIdentifier = /([^@]+)/.exec(email)[0];
    return (
      <Typography variant="caption" component="p" className={classes.typographyIcon}>
        <EmailRounded className={classes.icon} />
        {emailIdentifier}
        <br />@{domain}
      </Typography>
    );
  };

  return (
    <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
      {/* <Link to={`/member/${id}`} className={classes.link}> */}
      <Card elevation={0} square className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.photo['en-US'].fields.file['en-US'].url}
            title={data.name[locale]}
          >
            <div className={classes.overlay}>
              <Typography
                variant="body1"
                className={clsx(classes.typographyOverlay, classes.typographyHighlight)}
              >
                {data.name[locale]}
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                component="p"
                className={classes.typographyOverlay}
              >
                {data.title[locale]}
              </Typography>
            </div>
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="caption"
              component="p"
              className={classes.typographyIcon}
            >
              <PhoneRounded className={classes.icon} />
              {data.telephone['en-US']}
            </Typography>
            {getEmail(data.email['en-US'])}
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </Link> */}
    </Grid>
  );
};

export default withStyles(styles)(MemberListItem);
