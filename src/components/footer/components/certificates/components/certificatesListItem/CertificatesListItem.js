import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './CertificatesListItem.style';

const CertificatesListItem = props => {
  const { classes, data, locale } = props;
  return (
    <a
      href={data.certificate['en-US'].fields.file['en-US'].url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          <AssignmentTurnedIn />
        </ListItemIcon>
        <ListItemText disableTypography className={classes.listItemText}>
          {data.name[locale]}
        </ListItemText>
      </ListItem>
    </a>
  );
};

export default withStyles(styles)(CertificatesListItem);
