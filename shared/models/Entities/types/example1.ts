import { EntityRecord } from "~/shared/models/Entities/types/entity";

export interface Example1Dto extends EntityRecord {
  id: string;
  exampleField1: string;
  exampleField2: number;
}

export interface CreateExample1DtoPayload {
  exampleField1: string;
  exampleField2: number;
}

export interface EditExample1DtoPayload {
  id: string;
  exampleField1: string;
}
