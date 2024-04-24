import axios from "axios";

const baseUrl = "http://3.129.92.167:3001";

const timeout = 5000;

export const Requests = {
  getFish: () => {
    return axios
      .get(baseUrl + "/fish", { timeout })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  },
};

// (baseUrl + "/fish", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
