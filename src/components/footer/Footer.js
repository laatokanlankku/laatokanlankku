import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import styles, { StyledGrid } from './Footer.style';
import image from '../../assets/images/logo.jpg';
import Contact from './components/contact/Contact';
import Certificates from './components/certificates/Certificates';

const Footer = props => {
  const { classes, contentful, locale } = props;

  const content = contentful.items.find(item => item.sys.id === '4Dlx26VtImnLDlaOZa7g7Y');

  const forwardProps = {
    contentful,
    locale,
  };

  return (
    <StyledGrid background={content.fields.background['en-US'].fields.file['en-US'].url}>
      <div className={classes.overlay} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h6" gutterBottom>
              {content.fields.heading[locale]}
            </Typography>
            <img src={image} alt="" className={classes.img} />
            <Typography variant="body2">{content.fields.description[locale]}</Typography>
          </Grid>
          <Contact {...forwardProps} content={content} />
          <Certificates {...forwardProps} />
        </Grid>
      </Container>
    </StyledGrid>
  );
};

export default withStyles(styles)(Footer);
