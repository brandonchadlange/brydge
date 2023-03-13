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
}

export default UserModel;
