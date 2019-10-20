import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import Icon from '@material-ui/core/Icon';
import { Mail, Inbox, ChevronLeft } from '@material-ui/icons';
import styles from './Sidebar.style';

const Sidebar = props => {
  const { classes, isOpen, setIsOpen, contentful, locale } = props;

  const content = contentful.items.filter(item => item.sys.contentType.sys.id === 'mainmenu');

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
        {content.map(item => (
          <Link to="/" key={item.sys.id} className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon className={classes.icon}>{item.fields.icon['en-US']}</Icon>
              </ListItemIcon>
              <ListItemText>{item.fields.option[locale]}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
