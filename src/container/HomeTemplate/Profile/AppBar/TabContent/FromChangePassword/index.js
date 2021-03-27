import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import DialogContent from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import * as Action from '../../../modules/action';
const ButtonSuccess = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}))(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  },
  DialogContent: {
    width: "50%"
  },
  row: {
    display: 'flex',
  },
  subContent: {

  }
}));
function FromChangePassword(props) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  const { user, findUser } = props;
  const onSubmit = data => {
    if (user&&findUser) {
      let dataUser = {
        taiKhoan:user.taiKhoan,
        matKhau:data.confirmPassword,
        email: user.email,
        soDt: user.soDT,
        maNhom:user.maNhom ,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        hoTen: user.hoTen,
      }
      props.changePassword(dataUser);
      console.log("dataUser",dataUser)
    }
  };

  console.log("data", user, "userFind", findUser);
  const [valuesPassword, setValuesPassword] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    isErr: false,
    messErr: "",
  });
  const [valuesNewPassword, setValuesNewPassword] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    isErr: false,
    messErr: "",
  });
  const [valuesConfirm, setValuesConfirm] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    isErr: false,
    messErr: "",
  });
  const [stateCheckErr, setStateCheckErr] = React.useState({
    errors: {
      password: '',
      newPassword: '',
      confirmPassword: ''
    },
    values: {
      password: '',
      newPassword: '',
      confirmPassword: ''
    },
    passwordValid: false,
    newPasswordValid: false,
    confirmPasswordValid: false,
    formValid: false,
  });
  const handleChangePassword = (prop) => (event) => {
    setValuesPassword({ ...valuesPassword, [prop]: event.target.value });
    const { name, value } = event.target;
    setStateCheckErr({
      ...stateCheckErr,
      values: { ...stateCheckErr.values, [name]: value },
    });
  };
  const handleClickShowPassword = () => {
    setValuesPassword({ ...valuesPassword, showPassword: !valuesPassword.showPassword });
  };
  const handleChangeConfirmPassword = (prop) => (event) => {
    setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
    const { name, value } = event.target;
    setStateCheckErr({
      ...stateCheckErr,
      values: { ...stateCheckErr.values, [name]: value },
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValuesConfirm({ ...valuesConfirm, showPassword: !valuesConfirm.showPassword });
  };
  const handleChangeNewPassword = (prop) => (event) => {
    setValuesNewPassword({ ...valuesNewPassword, [prop]: event.target.value });
    const { name, value } = event.target;
    setStateCheckErr({
      ...stateCheckErr,
      values: { ...stateCheckErr.values, [name]: value },
    });
  };

  const handleClickShowNewPassword = () => {
    setValuesNewPassword({ ...valuesNewPassword, showPassword: !valuesNewPassword.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const handleCheckErr = (e) => {
    const { name, value } = e.target;
    let mess = value === "" ? "Vui lòng nhập đầy đủ thông tin" : "";
    let { passwordValid, newPasswordValid, confirmPasswordValid } = stateCheckErr;
    switch (name) {
      case 'password':
        passwordValid = mess !== "" ? false : true;
        if (value && value !== findUser?.matKhau) {
          passwordValid = false;
          mess = 'Mật Khẩu Không Đúng'
        }
        break;
      case 'newPassword':
        newPasswordValid = mess !== "" ? false : true;
        if (value && value.length < 6) {
          newPasswordValid = false;
          mess = 'độ dài mật khẩu phải trên 6 kí tự'
        }
        break;
      case 'confirmPassword':
        confirmPasswordValid = mess !== "" ? false : true;
        if (stateCheckErr.values.newPassword !== stateCheckErr.values.confirmPassword) {
          mess = "Mật khẩu xác nhận không trùng khớp";
        }
        if (value && value.length < 6) {
          confirmPasswordValid = false;
          mess = 'độ dài mật khẩu phải trên 6 kí tự'
        }
        break;
    }
    setStateCheckErr(
      {
        ...stateCheckErr,
        errors: { ...stateCheckErr.errors, [name]: mess },
        passwordValid,
        newPasswordValid,
        confirmPasswordValid,
        formValid: passwordValid && newPasswordValid && confirmPasswordValid,
      }
    );
  }
  React.useEffect(()=>{
    if(!props.isErr){
      setValuesConfirm({ ...valuesConfirm, password:""});
      setValuesPassword({ ...valuesPassword, password:""});
      setValuesNewPassword({ ...valuesNewPassword, password:"" });
    }
  },[props.isErr]);
  console.log(stateCheckErr);

  return (
    <Paper className={classes.root}>
      <div className={classes.title}>Xác nhận mật khẩu</div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.row} >
        <div className="row  m-0">
          <div className='col-12 m-0 p-0 row align-items-center'>
            <div className='row m-0 p-0 col-6'>
              <div className="col-12 mt-3 d-flex justify-content-center">
                <FormControl variant="outlined" error={stateCheckErr?.errors?.password ? true : false} size="small">
                  <InputLabel htmlFor="outlined-adornment-password">Mật Khẩu Hiện Tại</InputLabel>
                  <OutlinedInput
                    inputRef={register({ required: true })}
                    name="password"
                    type={valuesPassword.showPassword ? 'text' : 'password'}
                    value={valuesPassword.password}
                    onChange={handleChangePassword('password')}
                    onBlur={handleCheckErr}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {valuesPassword.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={135}
                  />
                </FormControl>
              </div>
              <div className="col-12 mt-1">
                {errors?.matKhau?.type === 'required' && (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                {stateCheckErr?.errors?.password ? (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">{stateCheckErr?.errors.password}</Alert>) : ""}
              </div>

              <div className="col-12 mt-3 d-flex justify-content-center">
                <FormControl variant="outlined" size="small" error={stateCheckErr?.errors?.newPassword ? true : false}>
                  <InputLabel htmlFor="outlined-adornment-password">Mật Khẩu Mới</InputLabel>
                  <OutlinedInput
                    inputRef={register({ required: true })}
                    name="newPassword"
                    type={valuesNewPassword.showPassword ? 'text' : 'password'}
                    value={valuesNewPassword.password}
                    onBlur={handleCheckErr}
                    onChange={handleChangeNewPassword('password')
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownNewPassword}
                          edge="end"
                        >
                          {valuesNewPassword.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={100}
                  />
                </FormControl>
              </div>
              <div className="col-12 mt-1">
                {errors?.newPassword?.type === 'required' && (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                {stateCheckErr?.errors?.newPassword ? (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">{stateCheckErr?.errors.newPassword}</Alert>) : ""}
              </div>
              <div className="col-12 mt-3 d-flex justify-content-center">
                <FormControl variant="outlined" size="small" error={stateCheckErr?.errors?.confirmPassword ? true : false}>
                  <InputLabel htmlFor="outlined-adornment-password">Xác Nhận Lại Mật Khẩu</InputLabel>
                  <OutlinedInput
                    inputRef={register({ required: true })}
                    name="confirmPassword"
                    onBlur={handleCheckErr}
                    type={valuesConfirm.showPassword ? 'text' : 'password'}
                    value={valuesConfirm.password}
                    onChange={handleChangeConfirmPassword('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                        >
                          {valuesConfirm.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={170}
                  />
                </FormControl>
              </div>
              <div className="col-12 mt-1">

                {errors?.confirmPassword?.type === 'required' && (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                {stateCheckErr?.errors?.confirmPassword ? (
                  <Alert style={{ backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">{stateCheckErr?.errors.confirmPassword}</Alert>) : ""}
              </div>
            </div>
            <div className="col-6 p-0">
              <p style={{ color: "#8a9cb7" }}>- <b>Chú ý:</b> Thực hiện bước này để bảo vệ tài khoản của bạn</p>
              <p style={{ color: "#8a9cb7" }}>- <b>Gợi Ý:</b> Nên đặt mật khẩu từ 6 ký tự trở lên</p>
            </div>
          </div>
          <div style={{ justifyContent: "flex-end" }} className='col-12 d-flex'>
            <ButtonSuccess type="submit" disabled={!stateCheckErr.formValid} color="primary">Xác Nhận</ButtonSuccess>
          </div>
        </div>

      </form>
    </Paper>
  );
}
const mapStateToProp = (state) => {
  return {
    user: state.AuthReducer.data,
    findUser: state.FindUserReuder.data,
    isErr:state.AlerUpdateInfoReducer.isErr,
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
      changePassword:(data)=>{
          dispatch(Action.actUpdateInfoUser(data));
      }
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(FromChangePassword);