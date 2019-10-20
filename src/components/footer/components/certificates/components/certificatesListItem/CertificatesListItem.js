import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './CertificatesListItem.style';

const CertificatesListItem = props => {
  const { classes, data, locale } = props;
  return (
    <List>
      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          <AssignmentTurnedIn />
        </ListItemIcon>
        <ListItemText className={classes.listItemText}>{data.name[locale]}</ListItemText>
      </ListItem>
    </List>
  );
};

export default withStyles(styles)(CertificatesListItem);
