import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "@/backend/prisma";
import authenticationProviders from "@/backend/authentication-providers";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (!session?.user) {
        return session;
      }

      return { ...session, uid: token.sub };
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: authenticationProviders,
  adapter: PrismaAdapter(prismaClient),
};

export default NextAuth(authOptions);
