import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Style from 'styled-components';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { DialogActions } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
export default function AlertDialog(isOpen = false, mess = "", isErr = false, handleClose, handleOpenBill,props) {
    const {malichChieu} = props;
    console.log(malichChieu);
    const [open, setOpen] = React.useState(isOpen);
    const [err, setErr] = React.useState(isErr);
    useEffect(() => {
        setOpen(isOpen);
        setErr(isErr);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    }, [isErr, isOpen, mess]);
    useEffect(() => {
        setTimeout(() => {
            if (isErr === false) {
                handleOpenBill();
            }
        }, 3000);
    }, [isErr]);
    if (isErr === true) {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Grid container style={{ alignItems: "center", color: "#f50057" }}   >
                        <Grid item xs={3}>
                            <DialogTitle id="alert-dialog-title">{<ErrorOutlineIcon style={{ fontSize: '4rem' }} />}</DialogTitle>
                        </Grid>
                        <Grid item xs={9}>
                            <DialogContent>
                                <DialogContentText style={{ color: "#f50057" }} id="alert-dialog-description">{mess ? (mess) : ("Đang Xảy Ra Vấn Đề Vui Lòng Đặt Vé Lại")}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                               <Link to={`/booking-ticket/${malichChieu}`}><Button style={{backgroundColor:"#f50057",color:"white"}} onClick={handleClose}>Trở Về</Button></Link> 
                            </DialogActions>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        );
    }
    else {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Grid container style={{ alignItems: "center", color: "#a6e22e" }}   >
                        <Grid item xs={3}>
                            <DialogTitle id="alert-dialog-title">{<CheckCircleOutlineIcon style={{ fontSize: '4rem' }} />}</DialogTitle>
                        </Grid>
                        <Grid item xs={9}>
                            <DialogContent>
                                <DialogContentText style={{ color: "#a6e22e" }} id="alert-dialog-description">{mess}</DialogContentText>
                            </DialogContent>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        );
    }

}