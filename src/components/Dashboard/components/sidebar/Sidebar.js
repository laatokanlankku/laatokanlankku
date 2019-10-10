import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { Mail, Inbox, ChevronLeft } from '@material-ui/icons';
import styles from './Sidebar.style';
import useAxios from '../../../../services/hooks/useAxios';

const Sidebar = props => {
  const { classes, isOpen, setIsOpen } = props;

  // const [response, isLoading, isError, request] = useAxios();
  // useEffect(() => {
  //   request({ 'sys.id[in]': '6c9HZWlN2VUpUHfak2OA1v' });
  // }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      elevation={0}
      PaperProps={{ elevation: 0 }}
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        {/* {!response
          ? null
          : Object.keys(response.items[0].fields).map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
