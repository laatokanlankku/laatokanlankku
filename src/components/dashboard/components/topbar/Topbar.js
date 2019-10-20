import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import styles from './Topbar.style';

const TopBar = props => {
  const { classes, isOpen, setIsOpen, contentful, isScroll } = props;

  const content = contentful.items.find(item => item.sys.id === 'BKailNTsl6XpTUuKrMbp4');
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
        [classes.appBarVisibility]: !isScroll,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsOpen(!isOpen)}
          edge="start"
          className={clsx(isOpen && classes.hide)}
        >
          <Menu />
        </IconButton>
        <div className={classes.toolbar}>
          <Typography variant="h6" noWrap className={classes.title}>
            {content.fields.title['en-US']}
          </Typography>
          <Typography variant="caption" className={classes.subtitle}>
            {content.fields.subtitle['en-US']}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);

TopBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
