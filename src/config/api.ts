import axios from "axios";
import { LINK_SHARING_SERVICE_URL } from "../constants";

export default axios.create({
  baseURL: LINK_SHARING_SERVICE_URL,
});
