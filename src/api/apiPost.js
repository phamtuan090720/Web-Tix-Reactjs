import axios from "axios";
const createConnector = () => {
  let config = {};
  // if(JSON.parse(sessionStorage.getItem("USER"))){
  //   config.headers={
  //      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("USER")).accessToken}`
  //   }
  // }
  // console.log("APIPOSt",config);
  return axios.create(config);
};
const connector = createConnector();
export default connector;
