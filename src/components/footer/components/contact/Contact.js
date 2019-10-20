import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import {
  MyLocation,
  AccessTime,
  Email,
  LocalPhone,
  Print,
  BusinessCenter,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './Contact.style';

const Contact = props => {
  const { classes, content, locale } = props;
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Typography variant="h6" gutterBottom className={classes.typography}>
        {content.fields.heading2[locale]}
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <MyLocation />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.address[locale]}
            <br />
            {content.fields.zipcode[locale]}
            <br />
            {content.fields.country[locale]}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <AccessTime />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.office[locale]}
            <br />
            {content.fields.presence[locale]}
            <br />
            {content.fields.time[locale]}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Email />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.email[locale]}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <LocalPhone />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.telephone[locale]}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Print />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.fax[locale]}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {content.fields.businessid[locale]}
          </ListItemText>
        </ListItem>
      </List>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
