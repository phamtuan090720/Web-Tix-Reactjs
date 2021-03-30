import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    },
  },
  Moblie: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    right: 10,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      zIndex:10,
    },
  },
  OpenMenu:{
    height:'auto',
  },
  CloseMenu:{
    height:0,
    overflow:"hidden",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  tabActive: {
    borderRight: ' 2px solid #1876f2',
  },
  tab: {
    border: "unset",
    transition: 'all .5s',
  },
}));
export default function SimpleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { toggleTab, OpenTabPane, Moblie ,isOpenMenu,handleCloseMenu } = props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {Moblie ? (
        <div className={classes.Moblie}>
          <Paper style={{transition:"height 2s"}} className={isOpenMenu?classes.OpenMenu:classes.CloseMenu} elevation={3}>
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader>Menu</ListSubheader>
              <ListItem button onClick={() => {
                OpenTabPane(1);
                handleCloseMenu();
              }} className={toggleTab === 1 ? classes.tabActive : classes.tab} >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Thông Tin Cá Nhân" />
              </ListItem>
              <ListItem button onClick={() => {
                OpenTabPane(2);
                handleCloseMenu();
              }} className={toggleTab === 2 ? classes.tabActive : classes.tab}>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary="Thay Đổi Thông Tin" />
              </ListItem>
              <ListItem button button onClick={() => {
                OpenTabPane(3);
                handleCloseMenu();
              }} className={toggleTab === 3 ? classes.tabActive : classes.tab}>
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary="Thay Đổi Mật Khẩu" />
              </ListItem>
            </List>
          </Paper>
        </div>
      ) : (
        <div className={classes.root}>
          <Paper elevation={3}>
            <List component="nav" aria-label="main mailbox folders">
            <ListSubheader>Menu</ListSubheader>
              <ListItem button onClick={() => {
                OpenTabPane(1);
              }} className={toggleTab === 1 ? classes.tabActive : classes.tab} >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Thông Tin Cá Nhân" />
              </ListItem>
              <ListItem button onClick={() => {
                OpenTabPane(2);
              }} className={toggleTab === 2 ? classes.tabActive : classes.tab}>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary="Thay Đổi Thông Tin" />
              </ListItem>
              <ListItem button button onClick={() => {
                OpenTabPane(3);
              }} className={toggleTab === 3 ? classes.tabActive : classes.tab}>
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary="Thay Đổi Mật Khẩu" />
              </ListItem>
            </List>
          </Paper>
        </div>
      )}
    </>



  );
}