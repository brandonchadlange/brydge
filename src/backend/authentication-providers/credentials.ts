import CredentialsProvider from "next-auth/providers/credentials";
import UserRepository from "../repositories/user";
import PasswordService from "../services/password";

export default CredentialsProvider({
  name: "email and password",
  credentials: {
    email: { label: "Username", type: "text", placeholder: "jsmith" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    const user = await UserRepository.getUserByEmail(credentials!.email);

    if (!user) {
      return null;
    }

    const passwordValid = await PasswordService.comparePassword(
      credentials!.password,
      user.password
    );

    if (!passwordValid) {
      return null;
    }

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  },
});
