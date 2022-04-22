import { Permission } from "../Permission/types";
import { User } from "./classes/User";
import {AuthDto, UserType} from "./types";
import {UserPermission} from "~/shared/models/Permission/UserPermission.model";

export class GuestUserModel implements User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  permissions: Permission[];
  token: string;
  userPermission: UserPermission;
  userType: UserType;

  constructor(authDto: AuthDto) {
    if (authDto.userType !== UserType.GUEST) {
      throw new Error('Guest must have GUEST user type');
    }

    this.token = authDto.token;
    this.id = authDto.id;
    this.firstName = authDto.firstName;
    this.lastName = authDto.lastName;
    this.email = authDto.email;
    this.userType = authDto.userType;
    this.permissions = authDto.permissions;
    this.userPermission = new UserPermission(authDto.permissions);
  }

  setData(authDto: AuthDto) {
    this.token = authDto.token;
    this.id = authDto.id;
    this.firstName = authDto.firstName;
    this.lastName = authDto.lastName;
    this.email = authDto.email;
    this.userType = authDto.userType;
    this.permissions =  authDto.permissions;
    this.userPermission.setPermissions(authDto.permissions);
  }

  logUser() {
    console.log('LOGGING GUEST: ', { user: this });
  }
}
