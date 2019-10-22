import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './MemberList.style';
import MemberListItem from '../MemberListItem/MemberListItem';

const MemberList = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.filter(item => item.sys.contentType.sys.id === 'member');

  return (
    <Grid container justify="center" spacing={4} className={classes.container}>
      {content.map(item => (
        <MemberListItem key={item.sys.id} data={item.fields} locale={locale} id={item.sys.id} />
      ))}
    </Grid>
  );
};

export default withStyles(styles)(MemberList);
