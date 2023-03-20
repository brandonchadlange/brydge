import UserRepository from "@/backend/repositories/user";
import PasswordService from "@/backend/services/password";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const passwordHash = await PasswordService.generatePasswordHash("Pass@123");

    const { password, ...userWithoutPassword } =
      await UserRepository.createUser({
        email: "test@mail.com",
        name: "Test Test",
        passwordHash: passwordHash,
      });

    return res.send(userWithoutPassword);
  },
});
