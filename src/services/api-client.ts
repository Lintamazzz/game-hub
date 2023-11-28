import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1da2947a9a084fe7ab691aa22bf4d79a",
  },
});
