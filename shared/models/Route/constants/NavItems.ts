import { EntityNames } from '~/shared/models/Entities/types/entity';

export const ENTITY_ROUTES = Object.values(EntityNames).map((entityName) => ({
  label: `layout.routes.${entityName}`,
  path: `/${entityName}/list`,
  name: entityName,
}));
