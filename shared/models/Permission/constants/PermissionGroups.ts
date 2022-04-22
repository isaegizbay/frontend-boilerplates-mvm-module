import {Permission, PermissionsGroupType} from '~/shared/models/Permission/types';

export const PermissionsGroup = {
  VIEW_EXAMPLE1: [Permission.CAN_VIEW_EXAMPLE1],
  EDIT_EXAMPLE1: [
    Permission.CAN_CREATE_EXAMPLE1,
    Permission.CAN_UPDATE_EXAMPLE1,
    Permission.CAN_DELETE_EXAMPLE1,
  ],
};

export const PermissionsGroupArray = Object.keys(PermissionsGroup)
  .map((key) => key as keyof PermissionsGroupType)
  .map((key) => ({
    name: key,
    values: PermissionsGroup[key],
  })
);
