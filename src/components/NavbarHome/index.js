import React, { useState, useEffect } from 'react'
import Logo from '../../img/logo/web-logo.png';
import LocationHeader from '../../img/Icon/location-header.png';
import Avatar from '../../img/Icon/avatar.png';
import MenuIcon from '../../img/Icon/menu-options.png';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Location from './dropdownItem';
import LogoutIcon from '../../img/Icon/logout.png';
import AvataUser from '../../img/AvataUser.jpg';
import { actUserLogot } from '../../container/AdminTemplate/AuthPage/modules/actions';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import Dialog from '@material-ui/core/Dialog';
import DropdowIcon from '../../img/Icon/dropdown-icon.png';
import DialogContent from '@material-ui/core/DialogContent';
import { actSetLocationLogin } from './modules/action';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
const Img = styled.img`
    width: 35px;
    height: 36px;
    border-radius: 50%;
    margin-right:10px;
`;
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
function NavbarHome(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openMoal, setOpenMoal] = React.useState(false);
    const handleClickOpen = () => {
        setOpenMoal(true);
    };

    const handleClose = () => {
        setOpenMoal(false);
    };
    const handleClick = () => {
        setOpen(!open);
    };
    // console.log(open);
    useEffect(() => {
        // console.log(props.user)
    }, [props]);
    const { user, isHome } = props;
    // console.log("isHome", isHome);
    const openNav = () => {
        document.getElementById('mobile_menu_canvas').style.width = '30%';
        document.getElementById("mobile_menu_canvas").style.opacity = "1";
        document.getElementById("moblie_menu").style.right = "0";
    }
    const closeNav = () => {
        document.getElementById("moblie_menu").style.right = "-70%";
        document.getElementById("mobile_menu_canvas").style.opacity = "0";
        document.getElementById("mobile_menu_canvas").style.width = "0";
    }
    const RenderListLocation = () => {
        const { listLocation } = props;
        return listLocation.map((location) => {
            return <Location handleClose={handleClose} key={location.stt} location={location} />
        });
    }

    const Loggout = () => {
        props.logOut(props.history);
    }
    const [Menu, setMenu] = useState("none");

    const openMenuLogin = () => {
        if (Menu === "none") {
            setMenu("block");
        }
        else {
            setMenu("none");
        }
    }
    const renderHeaderLogin = () => {
        if (user) {
            if (user.maLoaiNguoiDung === "KhachHang") {
                return <>
                    <div className="header_login">
                        <img src={AvataUser} alt="avatar" />
                        <span onClick={openMenuLogin}>{user.taiKhoan}</span>
                        <div style={{ display: `${Menu}` }} className="menuLogin dropdown-content">
                            <Link to={`/profile/${user.taiKhoan}`}><div className="Info">Thông Tin Cá Nhân</div></Link>
                            <div className="loggOut" onClick={Loggout}>Đăng Xuất<img src={LogoutIcon}></img></div>
                        </div>
                    </div>
                </>
            }
            else {
                return <>
                    <div className="header_login">
                        <img src={AvataUser} alt="avatar" />
                        <span onClick={openMenuLogin}>{user.taiKhoan}</span>
                        <div style={{ display: `${Menu}` }} className="menuLogin dropdown-content">
                            <Link to={`/profile/${user.taiKhoan}`}><div className="Info">Thông Tin Cá Nhân</div></Link>
                            <Link to='/dashboard'><div className="Info">Trang Dashboard</div></Link>
                            <div className="loggOut" onClick={Loggout}>Đăng Xuất<img src={LogoutIcon}></img></div>
                        </div>
                    </div>
                </>
            }

        }
        else {
            return <Link to='/login'>
                <div className="header_login">
                    <img src={Avatar} alt="avatar" />
                    <span>Đăng Nhập</span>
                </div>
            </Link>
        }
    };
    const renderDangNhap = React.useCallback(() => {
        if (user) {
            if (user.maLoaiNguoiDung === "QuanTri") {
                return <>
                    <ListItem button onClick={handleClick}>
                        <ListItemText>
                            <Img src={AvataUser} alt="avatar" />
                            <span>{user.taiKhoan}</span>
                        </ListItemText>

                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{textDecoration:"none"}} to={`/profile/${user.taiKhoan}`}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Thông Tin Người Dùng" />
                                </ListItem>
                            </Link>

                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trang Dashboard" />
                            </ListItem>
                            <ListItem onClick={Loggout} button className={classes.nested}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Đăng Xuất" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }
            else {
                return <>
                    <ListItem button onClick={handleClick}>
                        <ListItemText>
                            <Img src={AvataUser} alt="avatar" />
                            <span>{user.taiKhoan}</span>
                        </ListItemText>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{textDecoration:"none"}} to={`/profile/${user.taiKhoan}`}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Thông Tin Người Dùng" />
                                </ListItem>
                            </Link>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText onClick={Loggout} primary="Đăng Xuất" />
                            </ListItem>
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
    }, [user, open]);
    return (
        <header>
            <div className="header_nav_bar">
                <nav className="header_menu">
                    <div className="header_logo">
                        <Link to="/home"> <img src={Logo} alt="logo" /></Link>
                    </div>
                    <button className="menu_option" type="menu" onClick={openNav}>
                        <span><img src={MenuIcon} alt="menuIcon" /></span>
                    </button>
                    {isHome === true ? (
                        <div className="header_menu_mid">
                            <ul className="menu_items">
                                <li className="menu_item_link">
                                    <a href="#movie_schedule_tix">Lịch Chiếu</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#cinema_block_tix">Cụm rạp</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#news_tix">Tin Tức</a>
                                </li>
                                <li className="menu_item_link">
                                    <a href="#app_tix">Ứng dụng</a>
                                </li>
                            </ul>
                        </div>
                    ) : ""}
                    <div className="header_menu_right">
                        {renderHeaderLogin()}
                        <div className="dropdown dropdown_place_header">
                            <img className="place-header" src={LocationHeader} alt="Icon" />
                            <div style={{background:`url(${DropdowIcon})`,backgroundRepeat:"no-repeat",backgroundPosition:"100%"}} className="select-menu" data-toggle="dropdown">
                                <span>{props.location.city}</span>
                            </div>
                            <div className="dropdown-menu">
                                {RenderListLocation()}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="mobile_menu_canvas" className="overlay" onClick={closeNav}></div>
            <div id="moblie_menu" className="sidepanel">

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Menu
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    {renderDangNhap()}
                    {isHome === true ? (
                        <>
                            <ListItemLink href="#movie_schedule_tix" button onClick={closeNav}>
                                <ListItemIcon>
                                    <CalendarTodayIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lịch Chiếu" />
                            </ListItemLink>
                            {/* <ListItemLink  button onClick={closeNav}>
                                <ListItemIcon>
                                    <ViewListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cụm Rạp" />
                            </ListItemLink> */}
                            <ListItemLink href="#news_tix" button onClick={closeNav}>
                                <ListItemIcon>
                                    <WebAssetIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tin Tức" />
                            </ListItemLink>
                            <ListItemLink href='#app_tix' button onClick={closeNav}>
                                <ListItemIcon>
                                    <AppsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ứng Dụng" />
                            </ListItemLink>
                        </>
                    ) : ""}


                    {/* <ListItemLink href="#" data-toggle="modal" data-target="#modal-locaition" onClick={openModalLocation}> */}
                    <ListItem button onClick={handleClickOpen}>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={props.location.city} />
                    </ListItem>

                    {/* </ListItemLink> */}
                </List>
            </div>
            <Dialog
                id="modal-locaition"
                open={openMoal}
                onClose={handleClose}
            >
                {RenderListLocation()}
            </Dialog>
        </header>
    )
}
const mapStateToProp = (state) => {
    return {
        listLocation: state.LocationState.listLocation,
        location: state.LocationState.location,
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
export default connect(mapStateToProp, mapDispatchToProp)(NavbarHome);