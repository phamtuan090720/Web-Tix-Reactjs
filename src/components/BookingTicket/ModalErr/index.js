import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import ImgTitle from '../../../img/Icon/Post-notification.png';
import Styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';

export default function AlertDialog(isopenMd = false, mess = "",handleSCloseModal) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(isopenMd);
  }, [isopenMd]);
  const HeaderModal = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  `;
  const Imgtt = Styled.img`
      width: 30%;
      margin:2%;
  `;
  const ButtonGroup = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  `;
  const ConTentGroup = Styled.div`
  padding:20px 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-with:200px;
  `;
  const Render = useCallback(()=>{
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleSCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <HeaderModal>
            <Imgtt src={ImgTitle} />
          </HeaderModal>
          <ConTentGroup>
            <DialogContentText id="alert-dialog-description">
              {mess}
            </DialogContentText>
          </ConTentGroup>
          <DialogActions>
            <ButtonGroup>
              <Button variant="outlined" color="secondary" size="large" onClick={handleSCloseModal}>
                <CancelIcon />
                <span style={{ paddingLeft: 10 }}>OK</span>
              </Button>
            </ButtonGroup>
  
          </DialogActions>
        </Dialog>
      </div>
    );
  },[mess,handleSCloseModal,open]);
  return <>
    {Render()}
  </>
 
}