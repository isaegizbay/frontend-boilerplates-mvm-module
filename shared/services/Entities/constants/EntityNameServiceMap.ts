import { EntityNames } from '~/shared/models/Entities/types/entity';
import { Example1Service } from '~/shared/services/Entities/Example1.service';

export const EntityNameServiceMap = {
  [EntityNames.EXAMPLE_1]: new Example1Service(),
};
