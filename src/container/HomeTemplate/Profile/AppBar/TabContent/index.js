import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { connect } from 'react-redux';
import FromChangeInfoUser from './FromChangeInfo';
import FromChangPassword from './FromChangePassword';
import Alert from './Alert';
const useStyles = makeStyles((theme) => ({
    root: {
    },
    tabContent: {
        display: "none",
        opacity:"0",
        transition:'opacity 0.2s linear',
    },
    tabContentActive: {
        display: "block",
        opacity:"1"
    },
    itemContent: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: '#FF4633',
    },
}));
function TabConent(props) {
    const { toggleTab, user } = props;
    const classes = useStyles();
    const renderInforUser = React.useCallback((toggleTab) => {
        if (user) {
            return <div className={toggleTab === 1 ? classes.tabContentActive : classes.tabContent}>
           
                    <Card className={classes.itemContent}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <AccountBoxIcon />
                                </Avatar>
                            }
                            title={`Tài Khoản: ${user.taiKhoan}`}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {String(user.hoTen).substring(0, 1)}
                                </Avatar>
                            }
                            title={`Tên : ${user.hoTen}`}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <PhoneIcon />
                                </Avatar>
                            }
                            title={`Phone: ${user.soDT}`}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <PersonPinIcon />
                                </Avatar>
                            }
                            title={`Nhóm: ${user.maNhom}`}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <MailOutlineIcon />
                                </Avatar>
                            }
                            title={`Email: ${user.email}`}
                        />
                    </Card>
          


            </div>



        }
    }, [user]);
    return (
        <>
            {renderInforUser(toggleTab)}
            <Alert/>
            <div className={toggleTab === 2 ? classes?.tabContentActive : classes?.tabContent}>
                <FromChangeInfoUser/>
            </div>
            <div className={toggleTab === 3 ? classes?.tabContentActive : classes?.tabContent}>
                <FromChangPassword/>
            </div>
        </>
    )
}
const mapStateToProp = (state) => {
    return {
        user:state.AuthReducer.data,
    }
}
export default connect(mapStateToProp, null)(TabConent);