import {PermissionsGroup} from "~/shared/models/Permission/constants/PermissionGroups";

export enum Permission {
  CAN_VIEW_EXAMPLE1 = 'CAN_VIEW_EXAMPLE1',
  CAN_CREATE_EXAMPLE1 = 'CAN_CREATE_EXAMPLE1',
  CAN_UPDATE_EXAMPLE1 = 'CAN_UPDATE_EXAMPLE1',
  CAN_DELETE_EXAMPLE1 = 'CAN_DELETE_EXAMPLE1',
}


export type PermissionsGroupType = typeof PermissionsGroup;
