import axios from "axios";

const put = async <B = any, R = any>(endpoint: string, body?: B) => {
  const { data, status } = await axios.put<R>(endpoint, body || {});

  const response = {
    status,
    data: data,
  };

  return response;
};

export default put;
