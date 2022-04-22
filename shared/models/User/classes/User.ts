import { Permission } from '~/shared/models/Permission/types';
import { UserPermission } from '~/shared/models/Permission/UserPermission.model';
import { UserDto, UserType } from '~/shared/models/User/types';

export abstract class User implements UserDto {
  token: string = '';
  id: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  permissions: Permission[] = [];
  userPermission: UserPermission = new UserPermission([]);
  abstract userType: UserType;

  abstract setData(userDto: UserDto): void;

  abstract logUser(): void;
}
