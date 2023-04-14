import prismaClient from "@/backend/prisma";
import FincraService, {
  BeneficiaryState,
  FincraBeneficiary,
} from "@/backend/services/fincra";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);

    const beneficiaries = await prismaClient.beneficiary.findMany({
      where: {
        userId: uid,
      },
    });

    res.send(beneficiaries);
  },
  async POST(req, res) {
    const data = req.body as AddBeneficiaryRequest;
    const { uid } = await getSession(req, res);

    const beneficiary = await prismaClient.beneficiary.create({
      data: {
        accountHolderName: data.detail.accountHolderName,
        accountType: data.country === "KE" ? data.type : "corporate",
        country: data.country,
        currency: data.country === "KE" ? "KES" : "USD",
        fincraId: "",
        userId: uid,
      },
    });

    const createBeneficiaryResponse = await AddBeneficiaryHandlers[
      data.country
    ](data);

    if (createBeneficiaryResponse.state === BeneficiaryState.ERROR) {
      await prismaClient.beneficiary.delete({
        where: {
          id: beneficiary.id,
        },
      });

      return res.status(423).send("Failed to create beneficiary");
    }

    // UPDATE FINCRA REFERENCE
    await prismaClient.beneficiary.update({
      data: {
        fincraId: createBeneficiaryResponse.data.data._id,
      },
      where: {
        id: beneficiary.id,
      },
    });

    res.status(201).send("Beneficiary successfully created");
  },
});

const AddUnitedStatesBeneficiary = (data: AddBeneficiaryRequest) => {
  return FincraService.createUnitedStatesBeneficiary(
    data.detail as UnitedStatesCorporateDetail
  );
};

const AddKenyaBeneficiary = async (data: AddBeneficiaryRequest) => {
  if (data.type === "corporate") {
    return FincraService.createKenyaCorporateBeneficiary(
      data.detail as KenyaCorporateDetail
    );
  }

  return FincraService.createKenyaIndividualBeneficiary(
    data.detail as KenyaIndividualDetail
  );
};

const AddBeneficiaryHandlers: Record<
  BeneficiaryCountry,
  (data: AddBeneficiaryRequest) => Promise<any>
> = {
  US: AddUnitedStatesBeneficiary,
  KE: AddKenyaBeneficiary,
};
