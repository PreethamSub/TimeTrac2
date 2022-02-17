import axios from "axios";

const API_URL = "https://time-trac.herokuapp.com/api/activity/";

const getUserActivity = () => {
  return axios.get(API_URL + "activity");
};

export default {
  getUserActivity
};
