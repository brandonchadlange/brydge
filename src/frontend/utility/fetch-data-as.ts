import axios from "axios";

const fetchDataAs = async <I, R>(
  endpoint: string,
  asPredicate: (data: I) => R
) => {
  const { data, status } = await axios.get<I>(endpoint);
  const asValue = asPredicate(data);

  const response = {
    status,
    data: asValue,
  };

  return response;
};

export default fetchDataAs;
