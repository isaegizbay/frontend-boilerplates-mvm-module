import { EntityActions } from '~/shared/models/Entities/types/entity';

export abstract class Entity {
  abstract id: string;
  abstract get actions(): EntityActions[];
}
