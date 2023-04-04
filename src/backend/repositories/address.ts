import prismaClient from "../prisma";

export type Address = {
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  state: string;
}

const createAddress = (address: Address) => {
  return prismaClient.address.create({data: address});
};

const AddressRepository = {
  createAddress,
};

export default AddressRepository;
