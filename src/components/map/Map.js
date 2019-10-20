import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './Map.style';

const Map = props => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <iframe
          title="Google Maps"
          src="https://maps.google.com/maps?q=laatokan%20lankku&t=&z=7&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          className={classes.iframe}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Map);
