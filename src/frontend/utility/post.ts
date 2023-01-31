import axios from "axios";

const post = async <B = any, R = any>(endpoint: string, body?: B) => {
  const { data, status } = await axios.post<R>(endpoint, body || {});

  const response = {
    status,
    data: data,
  };

  return response;
};

export default post;
