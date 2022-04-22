import { GuestUserModel } from '~/shared/models/User/GuestUser.model';
import { AdminUserModel } from '~/shared/models/User/AdminUser.model';
import { AuthDto, UserType } from '~/shared/models/User/types';

export class UserAuthFactory {
  public static createUser(userDto: AuthDto) {
    const { userType } = userDto;
    switch (userType) {
      case UserType.ADMIN:
        return new AdminUserModel(userDto);
      case UserType.GUEST:
        return new GuestUserModel(userDto);
      default:
        return new GuestUserModel(userDto);
    }
  }
}
