import UserService from '@/backend/services/user';
import BusinessService from '@/backend/services/business';
import SyndicateService from '@/backend/services/syndicate';
import getSession from '@/backend/utility/get-session';
import { Business, StructuredSyndicate, UnstructuredSyndicate } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface IGetUserResponse {
  username: string;
  isOnboarded: boolean;
  isBusiness: boolean;
  isSyndicate: boolean;
  businesses: Business[];
  syndicates: (StructuredSyndicate | UnstructuredSyndicate)[];
}

const getUserRouteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);

  if (session === undefined || session === null) {
    return res.status(401).send('Unauthorized');
  }

  const user = await UserService.getUserById(session.uid);

  if (user === undefined || user === null) {
    return res.status(404).send('Failed to find user');
  }

  const userBusinesses = await BusinessService.getUserBusinesses(session.uid);
  const userStructuredSyndicates = await SyndicateService.getUserStructuredSyndicates(session.uid);
  const userUnstructuredSyndicates = await SyndicateService.getUserUnstructuredSyndicates(session.uid);

  const isBusiness = userBusinesses.length > 0;
  const isSyndicate = userStructuredSyndicates.length > 0 || userUnstructuredSyndicates.length > 0;

  const isOnboarded = isBusiness || isSyndicate;

  const response: IGetUserResponse = {
    username: user.name!,
    isOnboarded: isOnboarded,
    isBusiness: isBusiness,
    isSyndicate: isSyndicate,
    businesses: [...userBusinesses],
    syndicates: [...userStructuredSyndicates, ...userUnstructuredSyndicates],
  };

  res.status(200).send(response);
};

export default getUserRouteHandler;
