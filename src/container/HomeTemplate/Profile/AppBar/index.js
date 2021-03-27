import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabcontent from './TabContent';
import MenuInfoUser from '../AppBar/MenuInfoUser';


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
        fontFamily: 'Catamaran,sans-serif',
        minHeight: 500,
    },
    appBAr: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: '5px',
    },
    TabItem: {
        fontFamily: 'Catamaran,sans-serif',
        padding: "20px",
        fontSize: "15px",
        fontWeight: "500"
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
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBAr} position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab className={classes.TabItem} label="Thông Tin Tài Khoản" {...a11yProps(0)} />
                    <Tab className={classes.TabItem} label="Thông Tin Đặt Vé " {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.root} value={value} index={0}>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={3}>
                        <Paper>
                            <MenuInfoUser toggleTab={toggleTab} OpenTabPane={OpenTabPane} />
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>

                        <Tabcontent toggleTab={toggleTab} />

                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <AppBar />
        </div>
    );
}