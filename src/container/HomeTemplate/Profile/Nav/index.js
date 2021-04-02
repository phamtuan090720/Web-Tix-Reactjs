import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../img/logo/web-logo.png';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import PanoramaIcon from '@material-ui/icons/Panorama';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Collapse from '@material-ui/core/Collapse';
import SettingsIcon from '@material-ui/icons/Settings';
import DarkMode from './Switches';
import { List } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { actUserLogot } from '../../../AdminTemplate/AuthPage/modules/actions';
import { connect } from 'react-redux';
import AvataUser from '../../../../img/AvataUser.jpg';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    list: {
        width:300,
    },
    fullList: {
        width: 'auto',
        maxWidth:"30%",
    },
    nested: {
        paddingLeft: '60px',
    },
    Img: {
        width: '35px',
        height: '36px',
        borderRadius: '50%',
        marginRight: '10px'
    }
});
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
function Nav(props) {
    const { user } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickCaiDatt = () => {
        setOpenCallapeCaiDat(!openCallapeCaiDat);
    }
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };
    const Loggout = () => {
        props.logOut(props.history);
    }
    const [openCallapeCaiDat, setOpenCallapeCaiDat] = React.useState(true);
    const [openCallapeUser, setOpenCallapeUser] = React.useState(true);
    const handleClickUser = () => {
        setOpenCallapeUser(!openCallapeUser);
    }
    const renderDangNhap = React.useCallback(() => {
        if (user) {
            if (user.maLoaiNguoiDung === "QuanTri") {
                return <>
                    <ListItem button onClick={handleClickUser}>
                        <ListItemText>
                            <img className={classes.Img} src={AvataUser} alt="avatar" />
                            <span>{user.taiKhoan}</span>
                        </ListItemText>

                        {openCallapeUser ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCallapeUser} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: "none" }} to={`/profile/${user.taiKhoan}`}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Thông Tin Người Dùng" />
                                </ListItem>
                            </Link>

                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trang Dashboard" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }
            else {
                return <>
                    <ListItem button onClick={handleClickUser}>
                        <ListItemText>
                            <img className={classes.Img} src={AvataUser} alt="avatar" />
                            <span>{user.taiKhoan}</span>
                        </ListItemText>
                        {openCallapeUser ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCallapeUser} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: "none",color:"black" }} to={`/profile/${user.taiKhoan}`}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Thông Tin Người Dùng" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                </>
            }

        }
        else {
            return <>
                <ListItemLink href="/login" button>
                    <ListItemText primary="Đăng Nhập" />
                </ListItemLink>
            </>
        }
    }, [user, openCallapeUser]);
    return (

        <>
            <div className="nav-header">
                <div className="header-logo">
                    <Link to="/">
                        <img src={Logo} alt='logo'></img>
                    </Link>
                </div>
                <div className="header-menu" onClick={toggleDrawer(true)}>
                    <IconButton aria-label="menu">
                        <ListIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <SwipeableDrawer
                anchor={'right'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <List>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemIcon>
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Đóng" />
                        </ListItem>
                        {renderDangNhap()}
                        <ListItem button onClick={handleClickCaiDatt}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cài Đặt" />
                            {openCallapeCaiDat ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openCallapeCaiDat} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <PanoramaIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đổi BackGround" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <DarkMode />
                                </ListItem>
                                <ListItem button onClick={Loggout} className={classes.nested}>
                                    <ListItemText primary="Đăng Xuất" />
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>
            </SwipeableDrawer>
        </>
    )
}
const mapStateToProp = (state) => {
    return {
        user: state.AuthReducer.data,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        logOut: (history) => {
            dispatch(actUserLogot(history));
        },
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Nav);