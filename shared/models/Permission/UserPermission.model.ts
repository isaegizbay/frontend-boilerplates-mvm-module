import { PermissionsGroup } from '~/shared/models/Permission/constants/PermissionGroups';
import { Permission } from '~/shared/models/Permission/types';

export class UserPermission {
  private permissions: Permission[];

  constructor(permissions: Permission[]) {
    this.permissions = permissions;
  }

  get canEditExample1() {
    return (
      this.hasPermissions(PermissionsGroup.VIEW_EXAMPLE1) &&
      this.hasPermissions(PermissionsGroup.EDIT_EXAMPLE1)
    );
  }

  setPermissions(permissions: Permission[]) {
    this.permissions = permissions;
  }

  hasPermissions(permissions: Permission[]) {
    return permissions.every((p) => this.permissions.includes(p));
  }
}
