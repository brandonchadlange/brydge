import bcrypt from "bcrypt";

const SaltRounts = 10;

const generatePasswordHash = async (password: string) => {
  const salt = await bcrypt.genSalt(SaltRounts);
  return bcrypt.hash(password, salt);
};

const comparePassword = (password: string, passwordHash: string) => {
  return bcrypt.compare(password, passwordHash);
};

const PasswordService = {
  generatePasswordHash,
  comparePassword,
};

export default PasswordService;
