import { FormModel } from '~/shared/models/Form/Form.model';
import { Entity } from "~/shared/models/Entities/classes/Entity";

export abstract class EntityFormsModels<C, U> {
  abstract getCreateEntityForm(): FormModel<C>;
  abstract getEditEntityForm(data: Entity): FormModel<U>;
}
