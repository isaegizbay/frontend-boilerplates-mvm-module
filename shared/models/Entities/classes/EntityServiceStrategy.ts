import { Entity } from '~/shared/models/Entities/classes/Entity';
import { EntityPagination } from '~/shared/models/Entities/types/entity';

export abstract class EntityServiceStrategy<E extends Entity, C, U> {
  abstract fetchEntityRecords(page: number): Promise<EntityPagination<E>>;

  abstract fetchEntityRecord(): Promise<E>;
  abstract createEntity(payload: C): Promise<void>;
  abstract updateEntity(payload: U): Promise<void>;
  abstract deleteEntity(entityId: string): Promise<void>;
}
