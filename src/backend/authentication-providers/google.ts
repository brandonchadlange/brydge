import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

export default GoogleProvider({
  clientId,
  clientSecret,
  profile(_profile) {
    return {
      id: _profile.sub,
      name: _profile.name,
      firstName: _profile.given_name,
      lastName: _profile.family_name,
      email: _profile.email,
      image: _profile.picture,
    };
  },
});
