import { Permission } from '../../Permission/types';

export enum UserType {
  ADMIN = 'admin',
  GUEST = 'guest'
}

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
  permissions: Permission[];
}

export interface AuthDto extends UserDto {
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
