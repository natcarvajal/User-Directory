import axios from "axios";

const URL =
  "https://randomuser.me/api/?results=10&inc=picture,name,location,cell,email&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getUsers: function () {
    return axios.get(URL);
  },
};
