import { BaseApi } from '~/shared/api/_BaseApi';
import { AuthDto } from '~/shared/models/User/types';

export class UserApi extends BaseApi {
  static async fetchUserDataByToken(token: string): Promise<AuthDto> {
    return await this.get<AuthDto>('/user', { params: { token } });
  }
}
