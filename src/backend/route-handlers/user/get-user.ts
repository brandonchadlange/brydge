import UserService from '@/backend/services/user';
import BusinessService from '@/backend/services/business';
import SyndicateService from '@/backend/services/syndicate';
import getSession from '@/backend/utility/get-session';
import { NextApiRequest, NextApiResponse } from 'next';
import { IGetUserResponse } from './user.types';

const getUserRouteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);

  if (!session) {
    return res.status(401).send('Unauthorized');
  }

  const user = await UserService.getUserById(session.uid);

  if (!user) {
    return res.status(404).send('Failed to find user');
  }

  const userBusinesses = await BusinessService.getUserBusinesses(session.uid);
  const userStructuredSyndicates = await SyndicateService.getUserStructuredSyndicates(session.uid);
  const userUnstructuredSyndicates = await SyndicateService.getUserUnstructuredSyndicates(session.uid);

  const isBusiness = userBusinesses.length > 0;
  const isSyndicate = userStructuredSyndicates.length > 0 || userUnstructuredSyndicates.length > 0;

  const isOnboarded = isBusiness || isSyndicate;

  const response: IGetUserResponse = {
    name: user.name,
    isOnboarded,
    isBusiness,
    isSyndicate,
    businesses: [...userBusinesses],
    syndicates: [...userStructuredSyndicates, ...userUnstructuredSyndicates],
  };

  res.status(200).send(response);
};

export default getUserRouteHandler;
