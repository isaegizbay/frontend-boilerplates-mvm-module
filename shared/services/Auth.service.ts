import { UserApi } from '~/shared/api/User.api';
import { User } from '~/shared/models/User/classes/User';
import { UserAuthFactory } from '~/shared/models/User/classes/UserFactory';
import { AuthDto } from '~/shared/models/User/types';

export class AuthService {
  private static userInstance: User;

  static buildUserInstance(userDto: AuthDto) {
    if (!this.userInstance || this.userInstance.userType !== userDto.userType) {
      console.log('build new user instance');
      this.userInstance = UserAuthFactory.createUser(userDto);
    } else {
      console.log('mutated user instance');
      this.userInstance.setData(userDto);
    }

    return this.userInstance;
  }

  static setUserToLocalStorage(userDto: AuthDto | null) {
    console.log({ userDto });
    localStorage.setItem('user', JSON.stringify(userDto));
  }

  static getUserFromLocalStorage(): AuthDto | null {
    const lsUser = localStorage.getItem('user');

    return lsUser?.length ? JSON.parse(lsUser) : null;
  }

  static async getUserByToken(token: string) {
    try {
      const userDto = await UserApi.fetchUserDataByToken(token);
      return this.buildUserInstance(userDto);
    } catch (error) {
      console.error("Couldn't get user: ", error);
      throw error;
    }
  }
}
