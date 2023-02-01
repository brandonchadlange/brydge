import UserService from '@/backend/services/user';
import getSession from '@/backend/utility/get-session';
import { NextApiRequest, NextApiResponse } from 'next';

const updateUserRouteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);

  if (!session) {
    return res.status(401).send('Unauthorized');
  }

  const user = await UserService.getUserById(session.uid);

  if (!user) {
    return res.status(404).send('Failed to find user');
  }

  await UserService.updateUserById(session.uid, req.body)

  const updatedUser = await UserService.getUserById(session.uid)

  res.status(200).json(updatedUser);
};

export default updateUserRouteHandler;
