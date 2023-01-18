import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const { pathname } = req.nextUrl;

      return Boolean(
        req.cookies.get("next-auth.session-token") ||
          pathname.startsWith("/api")
      );
    },
  },
});
