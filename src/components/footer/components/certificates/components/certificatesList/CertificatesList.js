import React from 'react';
import { List } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './CertificatesList.style';
import CertificatesListItem from '../certificatesListItem/CertificatesListItem';

const CertificatesList = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.filter(item => item.sys.contentType.sys.id === 'certificate');

  return (
    <List>
      {content.map(item => (
        <CertificatesListItem key={item.sys.id} data={item.fields} locale={locale} />
      ))}
    </List>
  );
};

export default withStyles(styles)(CertificatesList);
