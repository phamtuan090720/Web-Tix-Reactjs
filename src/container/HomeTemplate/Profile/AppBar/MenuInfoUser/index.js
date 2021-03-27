import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DarkMode from './Switches';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  tabActive:{
    borderRight:' 2px solid #1876f2',
  },
  tab:{
    border:"unset",
    transition: 'all .5s',
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {toggleTab,OpenTabPane}=props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={()=>{
          OpenTabPane(1);
        }} className={toggleTab===1 ? classes.tabActive : classes.tab} >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Thông Tin Cá Nhân" />
        </ListItem>
        <ListItem button onClick={()=>{
          OpenTabPane(2);
        }} className={toggleTab===2 ? classes.tabActive : classes.tab}>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="Thay Đổi Thông Tin" />
        </ListItem>
        <ListItem button button onClick={()=>{
          OpenTabPane(3);
        }} className={toggleTab===3 ? classes.tabActive : classes.tab}>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Thay Đổi Mật Khẩu" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Cài Đặt" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Đổi BackGround" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <DarkMode/>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Đăng Xuất" />
              <ListItemIcon>
                <ExitToAppIcon/>
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}