import axios from "axios";

export function getRequest(api: string) {
  return axios
    .get(process.env.REACT_APP_BASE_URL + api)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
