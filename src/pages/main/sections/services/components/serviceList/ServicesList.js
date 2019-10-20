import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './ServicesList.style';
import ServiceListItem from '../serviceListItem/ServiceListItem';

const ServiceList = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.filter(item => item.sys.contentType.sys.id === 'service');
  return (
    <Grid container justify="center" spacing={4} className={classes.container}>
      {content.map(item => (
        <ServiceListItem key={item.sys.id} data={item.fields} locale={locale} />
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ServiceList);
