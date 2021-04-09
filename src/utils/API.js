import axios from "axios";

const URL =
  "https://randomuser.me/api/?results=25&inc=name,picture,email,cell,location";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  users: function () {
    return axios.get(URL);
  },
};
