import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
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

export const config = {
  matcher: ["/api/:path*", "/dashboard"],
};
