import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, unstable_getServerSession } from "next-auth";

export type SessionWithUserId = Session & { uid: string };

const getSession = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const session = (await unstable_getServerSession(
    request,
    response,
    authOptions
  )) as SessionWithUserId;

  return session;
};

export default getSession;
