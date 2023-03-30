import DealRepository from "@/backend/repositories/deal";
import EntityRepository from "@/backend/repositories/entity";
import MerchantRepository from "@/backend/repositories/merchant";
import UserRepository from "@/backend/repositories/user";
import getSession from "@/backend/utility/get-session";
import HttpException from "@/backend/utility/http-exception";
import { RouteHandler } from "@/backend/utility/route-handler";
import { EntityType } from "@/common/enums";
import { MerchantState } from "@/common/types/merchant";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);
    const userModel = await UserRepository.getUserById(uid);
    const user = userModel?.map()!;

    const entity = await EntityRepository.getEntityById(user.entityId!);

    if (entity!.type !== EntityType.merchant) {
      throw new HttpException("User is not linked to a merchant", 403);
    }

    const merchant = await MerchantRepository.getMerchantByEntityId(
      entity?.id!
    )!;

    const activeDeal = await DealRepository.getMerchantActiveDeal(merchant!.id);
    const pendingDeal = await DealRepository.getMerchantPendingDeal(
      merchant!.id
    );

    const merchantStateResponse: MerchantState = {
      deals: {
        active: activeDeal,
        pending: pendingDeal,
      },
    };

    res.status(200).send(merchantStateResponse);
  },
});

const entityType = EntityType.institution;

const activeDealCard = () => {
  return {
    data: {
      title: "",
      description: "",
    },
    actions: [
      {
        key: "pay_supplier",
        disabled: true,
        link: "",
      },
    ],
  };
};

const PageState = {
  navItems: [
    {
      title: "Deals Room",
      link: "/deals-room",
    },
  ],
  components: {
    layout: {
      key: "merchant-dashboard",
    },
    dealCard: {
      status: "active | pending",
      data: {
        title: "",
        description: "",
      },
      actions: [
        {
          key: "pay_supplier",
          disabled: true,
          link: "",
        },
      ],
    },
  },
};
