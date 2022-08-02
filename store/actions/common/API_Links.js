import axios from "axios";

export const NODE_URL = "http://api.example.com/api/v1";
export const CMS_URL = "http://cms.example.com/";

// NODE URL
const MIKO = axios.create({baseURL: NODE_URL});

// CMS URL
const MIKO_CMS = axios.create({baseURL: CMS_URL});

// NODE API's
export const signIn = (data) => MIKO.post("/business/login", data);

// export const getEatFullData = () => MIKO_CMS.get(`/eats?`);
