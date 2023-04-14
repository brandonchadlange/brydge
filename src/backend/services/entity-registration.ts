import { EntityType as EntityTypeEnum } from "@/common/enums";
import handleIndividualRegistration from "../handlers/individual-registration";
import handleInstitutionRegistration from "../handlers/institution-registration";
import handleMerchantRegistration from "../handlers/merchant-registration";
import UserModel from "../models/user";
import EntityRepository from "../repositories/entity";
import AddressRepository, { Address } from "../repositories/address";

const EntityTypeEnumMap: Record<EntityType, number> = {
  merchant: EntityTypeEnum.merchant,
  institution: EntityTypeEnum.institution,
  individual: EntityTypeEnum.individual,
};

type EntityRegistrationHandler = (entityId: string, request: any) => void;

const EntityRegistrationHandlerMap: Record<
  EntityType,
  EntityRegistrationHandler
> = {
  merchant: handleMerchantRegistration,
  institution: handleInstitutionRegistration,
  individual: handleIndividualRegistration,
};

const registerEntity = async (
  entityType: EntityType,
  user: UserModel,
  data: any
) => {
  const addressData: Address = {
    street: data.street,
    houseNumber: data.houseNumber,
    zipCode: data.zipCode,
    city: data.city,
    state: data.state,
  };
  const entityTypeEnum = EntityTypeEnumMap[entityType];
  const handleRegistration = EntityRegistrationHandlerMap[entityType];
  const entity = await EntityRepository.createEntity(entityTypeEnum);
  const address = await AddressRepository.createAddress(addressData);
  handleRegistration(entity.id, { operationalAddressId: address.id, ...data });
  await user.assignEntity(entity.id);

  console.log(user.map());

  return entity;
};

const EntityRegistrationService = {
  registerEntity,
};

export default EntityRegistrationService;
