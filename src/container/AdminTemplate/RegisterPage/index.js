import React, { useEffect, useState } from "react";
import bgLogin from "../../../img/backGround/bgLogin.jpg";
import lgLogin from "../../../img/logo/group@2x.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { MiniLoading } from "../../../components/AdminComponent/MiniLoading";
import { connect } from "react-redux";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import * as act from "./modules/actions";
import { NavLink } from "react-router-dom";

function RegisterPage(props) {
  const useStyle = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${bgLogin})`,
      backgroundSize: "cover",
      // backgroundPosition: '50% 50%',
      alignItems:"center",
      display: 'flex',
      padding:40,
      justifyContent: 'center',
      // position: "relative;",
    },
    wrapperForm: {
      // maxWidth: "600px",
      // width:'150%',
      margin:"0 auto",
      padding: "40px 32px 30px",
      // position: "absolute",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%,-50%)",
      height:'100%',
      backgroundImage:
        "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
      boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
      textAlign: "center",
      color: "#fff",
      borderRadius: "6px",
    },
    logoTitle: {
      width: "209px",
      marginBottom: "50px",
      cursor: "pointer",
    },
  }));
  const classes = useStyle();
  const { register, handleSubmit, errors } = useForm({
    mode:'onBlur'
  });
  const onSubmit = (data) => {
    let temp = { ...data, maLoaiNguoiDung: "KhachHang", maNhom: "GP03" };
    console.log(temp);
    props.RegisterUser(temp);
  };
  const [userRegister, setUserRegister] = useState({
    loading: false,
    data: null,
    err: null,
    isAler:false
  });
  useEffect(() => {
    const { loading, data, err,isAler } = props;
    setUserRegister({ ...userRegister, loading, data, err,isAler });
  }, [props.loading, props.data, props.err,props.isAler]);
    const RenderAlert = React.useCallback(()=>{
    return<>
      {
        userRegister.isAler?<Alert severity="success">Đăng Kí Thành Công!</Alert>:""
      }
    </>
  },[userRegister.isAler]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} classes={{ root: classes.root }}>
        <Typography component="div" style={{width:400}}>
          <div className={classes.wrapperForm}>
            <img src={lgLogin} alt="logo Login" className={classes.logoTitle} />
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <MyTxt
                name="taiKhoan"
                label="Tài khoản"
                ref={register({ required: true })}
              />
              <div>
                {errors.taiKhoan && <Alert severity="error">This field is required</Alert>}
              </div>
              <MyTxt
                name="matKhau"
                label="Mật khẩu"
                type="password"
                ref={register({ required: true })}
              />
              <div>
              {errors.matKhau && <Alert severity="error">This field is required</Alert>
              }
              </div>
             
              <MyTxt
                name="email"
                label="Email"
                ref={register({ required: true })}
              />
              <div>
              {errors.email && <Alert  severity="error">This field is required</Alert>}
              </div>
              <MyTxt
                name="soDt"
                label="Số điện thoại"
                ref={register({ required: true })}
              />
              <div>
              {errors.soDt && <Alert  severity="error">This field is required</Alert>}
              </div>
              <MyTxt
                name="hoTen"
                label="Họ tên"
                ref={register({ required: true })}
              />
              <div>
                {errors.hoTen && <Alert severity="error">This field is required</Alert>}
              </div>
              <DefaultButton fullWidth color="default" type="submit">
                Register
                {userRegister.loading ? <MiniLoading /> : ""}
              </DefaultButton>
                {RenderAlert()}
               {userRegister.err?<Alert severity="error">{userRegister.err}</Alert>:""}
              <NavLink to="/login">
                <DefaultButton fullWidth>
                  Login
                </DefaultButton>
              </NavLink>
            </FormControl>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.RegisterUserReducer.loading,
    data: state.RegisterUserReducer.data,
    err: state.RegisterUserReducer.err,
    isAler:state.RegisterUserReducer.isAler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RegisterUser: (data) => {
      dispatch(act.RegisterUserCallapi(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
