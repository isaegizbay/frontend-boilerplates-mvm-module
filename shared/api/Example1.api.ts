import { BaseApi } from "~/shared/api/_BaseApi";
import { CreateExample1DtoPayload, EditExample1DtoPayload, Example1Dto } from "~/shared/models/Entities/types/example1";
import {EntityPagination} from "~/shared/models/Entities/types/entity";

export class Example1Api extends BaseApi {
  static async fetchRecords (page: number) {
    return await this.get<EntityPagination<Example1Dto>>('/entity/example1', { params: { page } });
  }

  static async fetchRecord (id: string) {
    return await this.get<Example1Dto>(`/entity/example1/${id}`);
  }

  static async createRecord (payload: CreateExample1DtoPayload): Promise<unknown> {
    return await this.post(`/entity/example1/create`, payload);
  }

  static async editRecord (payload: EditExample1DtoPayload): Promise<unknown> {
    return await this.patch(`/entity/example1/${payload.id}/edit`, payload);
  }

  static async deleteRecord (id: string): Promise<unknown> {
    return await this.delete(`/entity/example1/${id}/delete`);
  }
}
