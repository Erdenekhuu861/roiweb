import axios from "axios";

export const apiClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/txt;charset=UTF-8",
  },
  maxContentLength: `Infinity`,
});

apiClient["interceptors"].response.use(
  function (response) {
    if (
      response?.data?.["sucmod"] ||
      response.data.message === "Зөвшөөрөлгүй хандалт байна!"
    ) {
      // message.error(response.data.message);
      console.log(response.data.message, "response.data.message");
    }

    return response?.data || {};
  },
  function (error) {
    // message.error(error);
    console.log(error, "error");

    // eslint-disable-next-line no-undef
    return Promise.reject(error);
  }
);

export const apiServer = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  rejectUnauthorized: false,
  baseURL: "https://api.bbroi.com/",
});

apiServer["interceptors"].response.use(
  function (response) {
    return response?.data || {};
  },
  function (error) {
    return error.response;
  }
);