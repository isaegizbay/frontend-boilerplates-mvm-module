import { BaseApi } from './_BaseApi';
import { LoginPayload } from '~/shared/models/User/types';

export class AuthApi extends BaseApi {
  static async login(payload: LoginPayload): Promise<string> {
    return await this.post<string>('/auth', payload);
  }
}
