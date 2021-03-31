import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import DataGroup from '../../../../../../components/NavbarHome/location.json';
import InputBase from '@material-ui/core/InputBase';
import Alert from '@material-ui/lab/Alert';
import * as Action from '../../../modules/action';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
        width: '100%',
        padding:'20px',
    },
    row: {
        display: 'flex',
        maxWidth: 500,
        alignItems: "center",
        marginBottom: 10,
        margin: "0 auto",
    },
    avatar: {
        backgroundColor: '#FF4633',
    },
    Input: {
        width: '100%',
    },
    buttonGroup: {
        display: "flex",
        padding: 20,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        padding: "20px 0",
        fontWeight: "500"
    },
    TextFieldErr: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #f44336',
        borderRadius: 4,
        '&:focus': {
            borderRadius: 4,
            borderColor: '#e53935',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    }
}));
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
const ButtonCancel = withStyles((theme) => ({
    root: {
        padding: "10px 20px",
        marginRight: 10,
        color: "white",
        backgroundColor: "#9e9e9e",
        '&:hover': {
            backgroundColor: "#757575",
        },
    }
}))(Button);
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        color:"#000",
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
function FromChangeInfoUser(props) {
    const classes = useStyles();
    const { register, handleSubmit, errors, control } = useForm({
        mode: 'onBlur'
    });
    // const [openModalCF, setOpenModalCF] = React.useState(false);
    // const [dataUpdate,setdataUpdate] = React.useState({

    // })
    const { user,findUser,updateUser } = props;
    const RenderGroupItem = () => {
        if (DataGroup) {
            return DataGroup.map((item) => {
                return <MenuItem value={item.group}>{item.city}</MenuItem>
            })
        }
    }
    const onSubmit = data => {
        let dataUser = {
            matKhau:findUser.matKhau,
            ...data,
        }
        console.log("user",dataUser);
        updateUser(dataUser,"ChangeInfo");   
    };
    React.useEffect(() => {
    }, [user]);
    return (
        <Paper style={{width:"100%"}}>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.title}>Thay Đổi Thông Tin</div>
                <div className={classes.row}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <AccountBoxIcon />
                    </Avatar>
                    <TextField
                        error={errors.taiKhoan ? true : false}
                        inputRef={register({ required: true })}
                        label="Tài Khoản"
                        variant="outlined"
                        size="small"
                        name="taiKhoan"
                        defaultValue={user?.taiKhoan}
                    />
                </div>
                <div className={classes.row}>
                    {errors?.taiKhoan?.type === 'required' && (
                        <Alert style={{ width: "100%", backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                </div>
                <div className={classes.row}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P
                                </Avatar>
                    <TextField
                        error={errors.hoTen ? true : false}
                        inputRef={register({ required: true })}
                        label="Họ Tên"
                        variant="outlined"
                        size="small"
                        name="hoTen"
                        defaultValue={user?.hoTen}
                    />
                </div>
                <div className={classes.row}>
                        {errors?.hoTen?.type === 'required' && (
                        <Alert style={{ width: "100%", backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                </div>
                <div className={classes.row}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <MailOutlineIcon />
                    </Avatar>
                    <TextField
                        error={errors.email ? true : false}  
                        inputRef={register({ required: true })}
                        label="email"
                        variant="outlined"
                        size="small"
                        name="email"
                        defaultValue={user?.email}
                    />
                </div>
                <div className={classes.row}>
                    {errors?.email?.type === 'required' && (
                        <Alert style={{ width: "100%", backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                </div>
                <div className={classes.row}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <PhoneIcon />
                    </Avatar>
                    <TextField
                        error={errors.soDienThoai ? true : false}
                        inputRef={register({ required: true })}
                        label="Số Điện Thoại"
                        variant="outlined"
                        size="small"
                        name="soDT"
                        defaultValue={user?.soDT}
                    />
                </div>
                <div className={classes.row}>
                        {errors?.soDienThoai?.type === 'required' && (
                        <Alert style={{ width: "100%", backgroundColor: "white", color: "red", marginLeft: 30, padding: 0 }} severity="error">Không Được Bỏ Trống!</Alert>)}
                </div>
                < div className={classes.row}>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <div className='col-2 p-0'>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <PersonPinIcon />
                                </Avatar>
                            </div>
                            <div className='col-10'>
                                <FormControl name="maNhom">
                                    <InputLabel id="group">Nhóm</InputLabel>
                                    <Controller
                                        as={
                                            <Select
                                                labelId="group"
                                                variant="outlined"
                                                input={<BootstrapInput />}
                                            >
                                                {RenderGroupItem()}
                                            </Select>
                                        }
                                        control={control}
                                        name="maNhom"
                                        defaultValue={user ? user.maNhom : ""}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className='col'>
                                <FormControl>
                                    <InputLabel style={{width:200}} id="maLoai">Mã Loại Người Dùng</InputLabel>
                                    <Controller
                                        as={
                                            <Select
                                                disabled
                                                labelId="maLoai"
                                                variant="outlined"
                                                input={<BootstrapInput />}
                                            >
                                                <MenuItem value={"QuanTri"} >Quản Trị Viên</MenuItem>
                                                <MenuItem value={"KhachHang"} >Khách Hàng</MenuItem>
                                            </Select>
                                        }
                                        control={control}
                                        name="maLoaiNguoiDung"
                                        defaultValue={user ? user?.maLoaiNguoiDung : ""}
                                    />
                                    {user?.maLoaiNguoiDung==="KhachHang"?( <FormHelperText>Bạn Không Thể Thay Đổi</FormHelperText>):""}
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttonGroup}>
                    <ButtonSuccess type="submit">Cập Nhật</ButtonSuccess>
                </div>
            </form>
        </Paper>

    );
}
const mapStateToProp = (state) => {
    return {
        user:state.AuthReducer.data,
        findUser:state.FindUserReuder.data,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        updateUser:(data,type)=>{
            dispatch(Action.actUpdateInfoUser(data,type));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(FromChangeInfoUser);