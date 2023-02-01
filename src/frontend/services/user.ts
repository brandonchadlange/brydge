import endpoints from '@/frontend/config/api-endpoints';
import fetchDataAs from '../utility/fetch-data-as';

const getUserState = async () => {
  const endpoint = endpoints.user.getUser();
  const response = await fetchDataAs(endpoint, data => data);
  return response.data;
};

const userService = {
  getUserState,
};

export default userService;
