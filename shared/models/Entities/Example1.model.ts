import { Entity } from '~/shared/models/Entities/classes/Entity';
import { EntityActions } from '~/shared/models/Entities/types/entity';
import { Example1Dto } from "~/shared/models/Entities/types/example1";

export class Example1Model extends Entity implements Example1Dto {
  recordId: number;
  id: string;
  exampleField1: string;
  exampleField2: number;

  constructor(data: Example1Dto) {
    super();
    this.recordId = data.recordId;
    this.id = data.id;
    this.exampleField1 = data.exampleField1;
    this.exampleField2 = data.exampleField2;
  }

  get actions(): EntityActions[] {
    return [
      EntityActions.VIEW,
      EntityActions.EDIT,
      EntityActions.DELETE
    ]
  }


}
