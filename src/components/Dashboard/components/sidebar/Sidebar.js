import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { ChevronLeft, ExpandLess, ExpandMore, Language, Translate } from '@material-ui/icons';
import { FormattedMessage } from 'react-intl';
import styles from './Sidebar.style';

const Sidebar = props => {
  const { classes, isOpen, setIsOpen, contentful, locale, setLocale } = props;

  const content = contentful.items.filter(item => item.sys.contentType.sys.id === 'mainmenu');

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
    setIsLanguageOpen(false);
  };

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
        <IconButton onClick={() => closeHandler()}>
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
        <ListItem button onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
          <ListItemIcon className={classes.icon}>
            <Language />
          </ListItemIcon>
          <ListItemText>
            {' '}
            <FormattedMessage id="languageSelection" defaultMessage="Kielivalinta" />
          </ListItemText>
          {isLanguageOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isLanguageOpen && isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => setLocale('en-US')} className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <Translate />
              </ListItemIcon>
              <ListItemText>Suomi</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setLocale('ru-RU')} className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <Translate />
              </ListItemIcon>
              <ListItemText>Русский</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
