import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, ClickAwayListener } from '@material-ui/core';
import styles from './Dashboard.style';
import TopBar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

const Dashboard = props => {
  const { classes, children, contentful } = props;
  const [isOpen, setIsOpen] = useState(false);

  const useProps = {
    isOpen,
    setIsOpen,
    contentful,
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar {...useProps} />
        <Sidebar {...useProps} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: isOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(Dashboard);
