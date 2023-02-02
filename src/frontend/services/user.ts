import { User } from '@prisma/client';
import endpoints from '@/frontend/config/api-endpoints';
import fetchDataAs from '../utility/fetch-data-as';
import { IGetUserResponse } from '@/backend/route-handlers/user/user.types';
import put from '../utility/put';

const getUserState = async (): Promise<IGetUserResponse> => {
  const endpoint = endpoints.user.getUser();
  const response = await fetchDataAs(endpoint, data => data);
  return response.data as IGetUserResponse;
};

const updateUserState = async (data: Partial<User>): Promise<IGetUserResponse> => {
  const endpoint = endpoints.user.updateUser();
  const response = await put(endpoint, data);
  return response.data as IGetUserResponse;
};

const userService = {
  getUserState,
  updateUserState,
};

export default userService;
