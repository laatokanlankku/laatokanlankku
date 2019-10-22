import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import styles, { StyledGrid } from './Footer.style';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Certificates from './components/certificates/Certificates';
import Links from './components/links/Links';

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
        <Grid container spacing={4}>
          <About {...forwardProps} content={content} />
          <Contact {...forwardProps} content={content} />
          <Certificates {...forwardProps} content={content} />
          <Links {...forwardProps} content={content} />
        </Grid>
      </Container>
    </StyledGrid>
  );
};

export default withStyles(styles)(Footer);
