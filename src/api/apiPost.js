// import React,{useEffect} from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// function Api(props) {
//   const {user}=props;
//   useEffect(() => {
//     if (sessionStorage.getItem("USER")) {
//       const accessToken = JSON.parse(sessionStorage.getItem("USER")).accessToken;
//       config = {
//         baseURL: "https://movie0706.cybersoft.edu.vn/api",
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     }
//     else {
//       config = {
//         baseURL: "https://movie0706.cybersoft.edu.vn/api",
//       }
//     }
//   }, [user]);
//   let config = {};
//   console.log(user);
//  return axios.create(config);
// }
// const mapStateToProp = (state)=>{
//   return {
//     user:state.AuthReducer.data,
//   }
// }
// export default connect(mapStateToProp,null)(Api);
// import Axios from "axios";

// const createConnector = () => {
//   const config = {};

//   if (JSON.parse(sessionStorage.getItem("USER"))) {
//     config.headers = {
//       Authorization:
//         "Bearer " + JSON.parse(sessionStorage.getItem("USER")).accessToken,
//     };
//   }

//   return Axios.create(config);
// };

// const connector = createConnector();

// export default connector;
import axios from "axios";
const createConnector = () => {
  let config={};
  // if(JSON.parse(sessionStorage.getItem("USER"))){
  //   config.headers={
  //      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("USER")).accessToken}` 
  //   }
  // }
  // console.log("APIPOSt",config);
  return axios.create(config);
}
const connector = createConnector();
export default connector;