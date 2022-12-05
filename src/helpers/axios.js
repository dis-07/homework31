/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const instance = axios.create({
  baseURL: "https://picsum.photos/v2"
});

instance.interceptors.response.use((response) => response.data);

export default instance;
