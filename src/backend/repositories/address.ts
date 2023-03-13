import prismaClient from "../prisma";

const createAddress = () => {
  return prismaClient.address.create({
    data: {
      street: "",
      houseNumber: "",
      zipCode: "",
      city: "",
      state: "",
    },
  });
};

const AddressRepository = {
  createAddress,
};

export default AddressRepository;
