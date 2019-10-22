import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Avatar, Typography } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles, { StyledDiv } from './Member.style';

const Member = props => {
  const { classes, contentful, locale } = props;

  const { id } = useParams();
  const member = /[^/]*$/.exec(id)[0];
  const content = contentful.items.find(item => item.sys.id === member);
  console.log(content);
  console.log(id);
  console.log(member);

  return (
    <>
      <StyledDiv image={content.fields.background['en-US'].fields.file['en-US'].url}>
        <div className={classes.overlay}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.position}
          >
            <Avatar
              alt={content.fields.name[locale]}
              src={content.fields.photo['en-US'].fields.file['en-US'].url}
              className={classes.avatar}
            />
            <Typography variant="h6" gutterBottom>
              {content.fields.name[locale]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content.fields.title[locale]}
            </Typography>
          </Grid>
        </div>
      </StyledDiv>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Typography>
              <Phone />
              {content.fields.telephone ? content.fields.telephone['en-US'] : 'Ei numeroa'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom className={classes.typography}>
              {content.fields.name[locale]}
            </Typography>
            <Typography variant="body1">{content.fields.about['en-US']}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withStyles(styles)(Member);
