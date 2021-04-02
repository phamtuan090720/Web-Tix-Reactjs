import React, { useCallback } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import { Box, TableFooter, TablePagination, Typography, useTheme } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { connect } from 'react-redux';
import {CallApiGetInfoAccount} from '../../modules/action';
import Loading from '../Backdrop';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:"#d32f2f",
    color: theme.palette.common.white,
    // width: '25%'
  },
  body: {
    fontSize: 14,
    textAlign: "center"
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});
function Row(props) {
  const { item } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return <>
    <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      <TableCell component="th" scope="row">
        {item.tenPhim}
      </TableCell>
      <TableCell align="left">{item.thoiLuongPhim}</TableCell>
      <TableCell align="left">{`${new Date(item.ngayDat).toLocaleTimeString()}-${new Date(item.ngayDat).toLocaleDateString()}`}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={2}>
            <Typography variant="h7" gutterBottom component="div">
              Danh Sach  Ghế
              </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <StyledTableRow>
                  <TableCell>Tên Ghế</TableCell>
                  <TableCell>Hệ thống Rạp</TableCell>
                  <TableCell align="right">Rạp</TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {item.danhSachGhe.map((Ghe) => {
                  return <TableRow key={Ghe.maGhe}>
                    <TableCell align="left">{Ghe.tenGhe}</TableCell>
                    <TableCell align="left">{Ghe.tenHeThongRap}</TableCell>
                    <TableCell align="left">{Ghe.tenRap}</TableCell>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </>
}

function TablePaginationActions(props) {
  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  const classes1 = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes1.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function CustomizedTables(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {userLogin,getInfoAcount,isLoading,DataVeUser}=props;
  const [DataVe,setDataVe]=React.useState(null);
  React.useEffect(()=>{
    let Account = {
      taiKhoan: userLogin.taiKhoan
    }
    getInfoAcount(Account);
  },[]); 
  React.useEffect(()=>{
    setDataVe(DataVeUser?.thongTinDatVe.sort(function sortFunction(a,b){  
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA > dateB ? 1 : -1;  
  }));
  },[DataVeUser]);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, DataVe?.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const RenderTableBody = React.useCallback(()=>{
    console.log(isLoading)
    if(isLoading){
      return<Loading/>
    }
    else{
      return <>
      <TableBody>
          {(rowsPerPage > 0?DataVe?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage):DataVe?.thongTinDatVe)?.map((item) => (
          <Row key={item.maVe} item={item} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
      </TableBody>
  </>
    }
   
  },[isLoading,DataVe,rowsPerPage,page]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ width: 50 }} />
            <StyledTableCell><b>Tên Phim</b></StyledTableCell>
            <StyledTableCell align="left"><b>Thời Lượng Phim (Phút)</b></StyledTableCell>
            <StyledTableCell align="left"><b>Ngày Đặt</b></StyledTableCell>
          </TableRow>
        </TableHead>
        {RenderTableBody()}
        {/* <TableBody>
            {(rowsPerPage > 0?DataVe?.thongTinDatVe.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage):DataVe?.thongTinDatVe)?.map((item) => (
            <Row key={item.maVe} item={item} />
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
        </TableBody> */}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={DataVe?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
const mapStateToProp = state=>{
  return{
    userLogin: state.AuthReducer.data,
    DataVeUser: state.infoAccountReducer.data,
    isLoading:state.infoAccountReducer.isLoading
  }
}
const mapDispatchToProp=(dispatch)=>{
  return{
    getInfoAcount:(taiKhoan)=>{
      dispatch(CallApiGetInfoAccount(taiKhoan));
    }
  }

}
export default connect(mapStateToProp,mapDispatchToProp)(CustomizedTables);