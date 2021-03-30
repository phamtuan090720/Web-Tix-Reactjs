import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Tabcontent from './TabContent';
import MenuInfoUser from '../AppBar/MenuInfoUser';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DataTable from './DataTable';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        // fontFamily: 'Catamaran,sans-serif',
        minHeight: 500,
        width: '85%',
        margin: '0 auto',
        [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
            width: '100%',
        },
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            position: 'relative',
        },
        // '& .MuiTabs-indicator':{
        //     color:"white"
        // }
    },
    appBAr: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: '5px',
        display: "flex",
        position: 'relative',
    },
    TabItem: {
        fontFamily: 'Catamaran,sans-serif',
        padding: "20px",
        fontSize: "15px",
        fontWeight: "500"
    },
    TabPanel: {
        width: '100%',
        position: 'relative',
        // overflowX: 'scroll',
        [theme.breakpoints.down(theme.breakpoints.values.sm+100)]: {
            overflowX: 'scroll',
        },
    },
    Grid: {
        width: '100%'
    },
    MenuInfoUser: {
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            display: "none"
        },
    },
    Tabcontent: {
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            width: '100%',
            padding: 0
        },
    },
    ButtonMenu: {
        position: 'absolute',
        top: '50%',
        right: 10,
        margin: theme.spacing(1),
        width: 60,
        transform: 'translateY(-60%)',
        color: "white",
        // display: "block",
        display: "none",
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            display: "block"
        },
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [toggleTab, setToggleTab] = React.useState(1)
    const OpenTabPane = (index) => {
        setToggleTab(index);
    }
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isMenuShow, setIsMenuShow] = React.useState(true);
    const handleCloseMenu =  ()=>{
        setIsOpenMenu(false);
    };
    const handleOpenMenu =  ()=>{
        setIsOpenMenu(!isOpenMenu);
    };
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBAr} position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab onClick={() => {
                        setIsMenuShow(true);
                    }} className={classes.TabItem} label="Thông Tin Tài Khoản" {...a11yProps(0)} />
                    <Tab onClick={() => {
                        setIsMenuShow(false);
                    }}
                        className={classes.TabItem} label="Thông Tin Đặt Vé " {...a11yProps(1)} />
                </Tabs>
                {isMenuShow ? (
                    <IconButton onClick={()=>{
                        handleOpenMenu();
                    }} className={classes.ButtonMenu} aria-label="menu">
                        <MenuIcon style={{ fontSize: 30 }} />
                    </IconButton>
                ) : ""}
            </AppBar>
            <TabPanel className={classes.TabPanel} value={value} index={0}>
                <Grid container className={classes.Grid} spacing={3}>
                    <Grid className={classes.MenuInfoUser} item xs={5} md={4}>
                        <MenuInfoUser toggleTab={toggleTab} OpenTabPane={OpenTabPane} />
                    </Grid>
                    <Grid className={classes.Tabcontent} item xs={12} md={8}>
                        <Tabcontent toggleTab={toggleTab} />
                    </Grid>
                </Grid>
                <MenuInfoUser handleCloseMenu={handleCloseMenu} isOpenMenu={isOpenMenu} toggleTab={toggleTab} OpenTabPane={OpenTabPane} Moblie />
            </TabPanel>
            <TabPanel className={classes.TabPanel} value={value} index={1}>
                <DataTable/>
            </TabPanel>
            <AppBar />
        </div>
    );
}