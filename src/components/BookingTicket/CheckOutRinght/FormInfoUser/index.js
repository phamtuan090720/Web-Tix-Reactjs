import { makeStyles, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'scroll',
    maxHeight: '332px',
    overflowX: 'hidden',
   ' &::-webkit-scrollbar': {
      width:'5px',
  },
  '&::-webkit-scrollbar-track':{
      borderRadius: '10px',
      background: 'transparent',    
  },
  '&::-webkit-scrollbar-thumb':{
      backgroundColor: '#03e9f4',
      borderRadius: '10px',
  },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      '& .MuiInputLabel-animated': {
        color: 'white'
      },
      '& .MuiInput-underline:after': {
        borderBottom: '2px solid white',
      },
      '& .MuiInputBase-input': {
        color: 'white',
      }
    },

  },
}));
function FormInfoUser(props) {
  const { user, handleCheckErrListSeatSelector, setSateDataDatVe, setStateInfoCustomer, setIsOpenNoti, malichChieu, danhSachGheChon } = props;
  // console.log("Mã", malichChieu)
  // console.log(user);
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur'
  });
  const [stateCheckErr, setStateCheckErr] = React.useState({
    errors: {
      email: "",
      phone: ""
    },
    values: {
      email: "",
      phone: ""
    },
    emailValid: false,
    phoneValid: false,
    formValid: false,

  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStateCheckErr({
      ...stateCheckErr,
      values: { ...stateCheckErr.values, [name]: value },
    });
  };
  const handleCheckErr = (e) => {
    const { name, value } = e.target;
    let mess = value === "" ? "Vui lòng nhập đầy đủ thông tin" : "";
    let { phoneValid, emailValid } = stateCheckErr;
    switch (name) {
      case "phone":
        emailValid = mess !== "" ? false : true;
        if (value && !value.match(/^\d{10}$/)) {
          mess = 'SĐT Không hợp lệ';
          emailValid = false;
        }
        break;
      case "email":
        phoneValid = mess !== "" ? false : true;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          mess = "Email không đúng định dạng";
          phoneValid = false;
        }
        break;
      default:
        break;
    }
    setStateCheckErr(
      {
        ...stateCheckErr,
        errors: { ...stateCheckErr.errors, [name]: mess },
        phoneValid,
        emailValid,
        formValid: phoneValid && emailValid,
      }
    );
  }
  console.log(stateCheckErr);
  const onSubmit = data => {
    if (data) {
      if (handleCheckErrListSeatSelector() === true) {
        console.log("thông qua");
        setIsOpenNoti(true);
        setSateDataDatVe({
          "maLichChieu": parseInt(malichChieu),
          "danhSachVe": danhSachGheChon(),
          "taiKhoanNguoiDung": user.taiKhoan
        });
        setStateInfoCustomer({
          taiKhoan: user.taiKhoan,
          email: data.email,
          SDT: data.phone,
        });
      }
    }
  }
  console.log(watch("email"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>

      <TextField
        inputRef={register({ required: true })}
        label="Email"
        size="small"
        name="email"
        onChange={handleOnChange}
        onBlur={handleCheckErr}
        defaultValue={user?.email}
      />
      {errors?.email?.type === 'required' && (
        <Alert style={{ width: "100%", backgroundColor: "tran", color: "red", padding: "5px", marginTop: "5px" }} severity="error">Không Được Bỏ Trống!</Alert>)}
      {stateCheckErr?.errors?.email ? (
        <Alert style={{ width: "100%", backgroundColor: "tran", color: "red", padding: "5px", marginTop: "5px" }} severity="error">{stateCheckErr?.errors.email}</Alert>) : ""}
      <TextField
        inputRef={register({ required: true })}
        label="Phone"
        size="small"
        name="phone"
        onChange={handleOnChange}
        onBlur={handleCheckErr}
        defaultValue={user?.soDT}
      />
      {errors?.phone?.type === 'required' && (
        <Alert style={{ width: "100%", backgroundColor: "tran", color: "red", padding: "5px", marginTop: "5px" }} severity="error">Không Được Bỏ Trống!</Alert>)}
      {stateCheckErr?.errors?.phone ? (
        <Alert style={{ width: "100%", backgroundColor: "tran", color: "red", padding: "5px", marginTop: "5px" }} severity="error">{stateCheckErr?.errors.phone}</Alert>) : ""}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="button-group-checkOut">
        <div className="btn back" onClick={() => {
          document.getElementById("CheckOutRight").style.right = '-100%';
        }}>
          <span />
          <span />
          <span />
          <span />
                 Quay Lại
          </div>
        <button className="btn success" type="submit"
        >
          <span />
          <span />
          <span />
          <span />
                Đặt Vé
          </button>
      </div>
    </form>
  );
}
const mapStateToProp = (state) => {
  return {
    user: state.AuthReducer.data
  }
}
export default connect(mapStateToProp, null)(FormInfoUser);