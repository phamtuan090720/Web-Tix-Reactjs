import axios from "axios";
const createConnector = () => {
  let config = {};
  return axios.create(config);
};
const connector = createConnector();
export default connector;
