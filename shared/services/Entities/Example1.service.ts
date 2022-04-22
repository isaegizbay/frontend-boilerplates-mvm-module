import { EntityServiceStrategy } from "~/shared/models/Entities/classes/EntityServiceStrategy";
import { Example1Model } from "~/shared/models/Entities/Example1.model";
import { EntityPagination } from "~/shared/models/Entities/types/entity";
import { CreateExample1DtoPayload, EditExample1DtoPayload } from "~/shared/models/Entities/types/example1";
import {Example1Api} from "~/shared/api/Example1.api";

export class Example1Service extends EntityServiceStrategy<Example1Model, CreateExample1DtoPayload, EditExample1DtoPayload> {

  fetchEntityRecord(): Promise<Example1Model> {
    throw new Error('fetchEntityRecord method not implemented yet');
  }

  async fetchEntityRecords(page: number): Promise<EntityPagination<Example1Model>> {
    try {
      const example1Pagination = await Example1Api.fetchRecords(page);

      return {
        ...example1Pagination,
        records: example1Pagination.records.map(
          (record) => new Example1Model(record)
        ),
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('fetchEntitiesRecord failed', { error });
      throw error;
    }
  }

  createEntity(payload: CreateExample1DtoPayload): Promise<void> {
    throw new Error('createEntity method not implemented yet');
  }

  updateEntity(payload: EditExample1DtoPayload): Promise<void> {
    throw new Error('updateEntity method not implemented yet');
  }

  deleteEntity(entityId: string): Promise<void> {
    throw new Error('deleteEntity method not implemented yet');
  }

}
