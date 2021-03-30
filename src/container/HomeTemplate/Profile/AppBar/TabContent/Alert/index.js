import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { connect } from 'react-redux';
import {actUpdateInfoUserReqest} from './../../../modules/action';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
 function DescriptionAlerts(props) {
    const classes = useStyles();
    const [isOpen,setIsOpen]=React.useState("none");
    const { isErr,isAlert,mess,user,rsAlert} = props;
    // console.log(isAlert);
    React.useEffect(()=>{
        if(isAlert===true){
            setIsOpen("block");
        }
        setTimeout(() => {
            setIsOpen("none");
            rsAlert();
            // console.log("set lại")
        }, 3000);
    },[isAlert,isErr,mess]);
    return (
        <div style={{display:isOpen}} className={classes.root}>
            {
                isErr ? <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Lỗi <strong>{mess}</strong>
                </Alert> : <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                Chúc Mừng Bạn — <strong>{mess}</strong>
                </Alert>
            }


        </div>
    );
}
const mapStateToProp=(state)=>{
    return{
        isErr:state.AlerUpdateInfoReducer.isErr,
        mess:state.AlerUpdateInfoReducer.mess,
        isAlert:state.AlerUpdateInfoReducer.isAler,
        user:state.AuthReducer.data,
    }
}
const mapDispatchToProp = (dispatch) =>{
    return{
        rsAlert:()=>{
            dispatch(actUpdateInfoUserReqest());
        }
    }
}
export default connect (mapStateToProp,mapDispatchToProp)(DescriptionAlerts);