import { FieldYupValidation } from '~/shared/models/Form/classes/FieldYupValidation';
import { FieldInputTypes } from '~/shared/models/Form/types';

export class Field<T = any> {
  name: string;
  label: string;
  initialValue: T;
  value: T;
  type: FieldInputTypes;
  options?: { id: string; value: T; label: string }[];
  validation?: FieldYupValidation<T | undefined>;
  column?: {
    ifFull?: boolean;
    offset?: number;
    size: number;
  };

  constructor(data: Field<T>) {
    if (data.type === FieldInputTypes.SELECT && !data.options) {
      throw new Error('options must be provided when field type is SELECT');
    }

    this.name = data.name;
    this.label = data.label;
    this.initialValue = data.initialValue;
    this.value = data.value;
    this.type = data.type;
    this.options = data.options;
    this.validation = data.validation;
    this.column = data.column;
  }
}
