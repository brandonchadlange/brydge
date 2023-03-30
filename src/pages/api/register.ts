import UserRepository from "@/backend/repositories/user";
import PasswordService from "@/backend/services/password";
import HttpException from "@/backend/utility/http-exception";
import { RouteHandler } from "@/backend/utility/route-handler";
import { HttpStatusCode } from "axios";

export default RouteHandler({
  async POST(req, res) {
    const existingUser = await UserRepository.getUserByEmail(req.body.email);

    if (existingUser !== null) {
      throw new HttpException(
        "A user with this email address already exists",
        HttpStatusCode.BadRequest
      );
    }

    const passwordHash = await PasswordService.generatePasswordHash(
      req.body.password
    );

    const { password, ...userWithoutPassword } =
      await UserRepository.createUser({
        email: req.body.email,
        name: req.body.firstName + " " + req.body.lastName,
        passwordHash: passwordHash,
      });

    return res.send(userWithoutPassword);
  },
});
