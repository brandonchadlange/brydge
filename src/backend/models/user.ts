import { User } from "@prisma/client";
import UserRepository from "../repositories/user";

class UserModel {
  constructor(private _user: User) {}

  map() {
    return this._user;
  }

  get requiresOnboarding() {
    return this._user.entityId === null;
  }

  async assignEntity(entityId: string) {
    await UserRepository.updateUserEntity(this._user.id, entityId);
  }

  async setEntityVerified(verified: boolean) {
    await UserRepository.setEntityVerified(this._user.id, verified);
  }
}

export default UserModel;
