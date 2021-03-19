// import axios from 'axios';

// let user = 'null';
// if(sessionStorage.getItem("USER")){
//   user = JSON.parse(sessionStorage.getItem("USER"));
// }
// export default axios.create({
//   baseURL: "https://movie0706.cybersoft.edu.vn/api",
//   headers: { Authorization: `Bearer ${user.accessToken}` },
// });
// export default axios.create({
//     baseURL:"https://movie0706.cybersoft.edu.vn/api"
// })
// let config = {};
// if(sessionStorage.getItem("USER")){
//     const accessToken = JSON.parse(sessionStorage.getItem("USER")).accessToken;
//     config = {
//         baseURL: "https://movie0706.cybersoft.edu.vn/api",
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//   }
//   else{
//     config = {
//         baseURL: "https://movie0706.cybersoft.edu.vn/api",
//       }
//   }
//   export default axios.create(config);
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("USER"));
export default axios.create({
	baseURL: "https://movie0706.cybersoft.edu.vn/api",
  headers: { Authorization: `Bearer ${user?.accessToken}` }
});