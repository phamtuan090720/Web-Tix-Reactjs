import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import  Styled from 'styled-components';
export default function AlertDialog(isOpen=false,handleSCloseModal) {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const Green = green['600'];
    const Red = red['700'];
    const Icon = Styled.div`
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 8em;
    height: 8em;
    margin: 1.25em auto 1.875em;
    border: .25em solid transparent;
    border-radius: 50%;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
   React.useEffect(()=>{
       setOpen(isOpen);
   },[isOpen]);
    const Render = React.useCallback(()=>{
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleSCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Icon><HelpOutlineIcon style={{width:'100%',height:'100%',color: '#87adbd'}}/></Icon>
                    <DialogTitle id="alert-dialog-title" style={{textAlign:'center',fontSize:20}}>
                       <h1 style={{fontWeight: 700}}>Xác Nhận?</h1>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Bạn xác nhận muốn đặt vé, bạn có muốn đặt thêm vé hay không?
              </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                       
                        <Button
                            style={{backgroundColor:`${Red}`,color:'white'}}
                            variant="contained"
                            size="large"
                            className={classes.button}
                            startIcon={<CancelIcon />}
                            onClick={handleSCloseModal}
                            
                        >
                            Trở Lại
          </Button>
          <Button
                            variant="contained"
                            size="large"
                            variant="contained"
                            style={{backgroundColor:`${Green}`,color:'white'}}
                            className={classes.button}
                            startIcon={<CheckCircleOutlineIcon />}
                            onClick={handleSCloseModal}
                        >
                            Tiếp Tục
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
      },[handleSCloseModal,open]);
      return <>
        {Render()}
      </>
     
   
}