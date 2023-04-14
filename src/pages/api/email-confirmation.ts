import prismaClient from "@/backend/prisma";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const token = req.query.token as string;

    const verificationToken = await prismaClient.verificationToken.findFirst({
      where: {
        token,
      },
    });

    if (verificationToken === null) {
      return res.status(404).send("Verification token not found");
    }

    await prismaClient.user.update({
      where: {
        id: verificationToken!.identifier,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    await prismaClient.verificationToken.delete({
      where: {
        token,
      },
    });

    res.redirect("/email-verified");
  },
});
