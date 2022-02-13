import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/entity/user.entity';

export const comparePasswords = async (userPassword, currentPassword) => {
  return await bcrypt.compare(currentPassword, userPassword);
};

export const UserResult = (user: UserEntity) => {
  return {
    Id: user.id,
    isActive: user.isActive,
    createDateTime: user.createDateTime,
    username: user.username,
    email: user.email,
  };
};

export const UserId = (user: UserEntity) => {
  return user.id;
};

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}
