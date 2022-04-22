export enum EntityNames {
  EXAMPLE_1 = 'example1',
  EXAMPLE_2 = 'example2',
}

export enum EntityActions {
  VIEW = 'view',
  EDIT = 'edit',
  DELETE = 'delete',
}

export enum EntityFormMode {
  CREATE = 'create',
  EDIT = 'edit',
}

export interface EntityRecord {
  recordId: number;
}

export interface EntityPagination<T extends EntityRecord> {
  records: T[];
  currentPage: number;
  totalPagesCount: number;
  recordsPerPage: number;
  totalRecordsCount: number;
}
