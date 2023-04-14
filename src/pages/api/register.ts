import prismaClient from "@/backend/prisma";
import UserRepository from "@/backend/repositories/user";
import EmailService from "@/backend/services/email";
import PasswordService from "@/backend/services/password";
import HttpException from "@/backend/utility/http-exception";
import { RouteHandler } from "@/backend/utility/route-handler";
import { HttpStatusCode } from "axios";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        passwordHash: passwordHash,
      });

    const verificationToken = await prismaClient.verificationToken.create({
      data: {
        identifier: userWithoutPassword.id,
        expires: new Date(),
        token: generateStub(16),
      },
    });

    await EmailService.sendEmailConfirmation(
      req.body.email,
      verificationToken.token,
      req.body.firstName
    );

    return res.send(userWithoutPassword);
  },
});

const generateStub = (stubSize: number) => {
  let result = "";

  for (var i = 0; i < stubSize; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
