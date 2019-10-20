import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, ClickAwayListener } from '@material-ui/core';
import styles from './Dashboard.style';
import useScrollPosition from '../../utils/hooks/useScrollPosition';
import TopBar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

const Dashboard = props => {
  const { classes, children, contentful, locale } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [position, isScroll] = useScrollPosition();

  const useProps = {
    isOpen,
    setIsOpen,
    contentful,
    locale,
    isScroll,
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
