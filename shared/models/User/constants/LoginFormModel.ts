import * as Yup from 'yup';
import { FieldYupValidation } from '~/shared/models/Form/classes/FieldYupValidation';
import { FieldInputTypes } from '~/shared/models/Form/types';
import { FormModel } from '~/shared/models/Form/Form.model';
import { Field } from '~/shared/models/Form/classes/Field';
import { LoginPayload } from '~/shared/models/User/types';

export const LoginFormModel = new FormModel<LoginPayload>([
  new Field<string>({
    name: 'email',
    label: 'loginForm.emailLabel',
    initialValue: '',
    value: '',
    type: FieldInputTypes.TEXT,
    validation: new FieldYupValidation<string | undefined>(
      Yup.string()
        .trim()
        .required({ msg: 'loginForm.errors.required' })
        .email({ msg: 'loginForm.errors.validInput' })
    ),
  }),

  new Field<string>({
    name: 'password',
    label: 'loginForm.passwordLabel',
    initialValue: '',
    value: '',
    type: FieldInputTypes.PASSWORD,
    validation: new FieldYupValidation<string | undefined>(
      Yup.string()
        .trim()
        .required({ msg: 'loginForm.errors.required' })
        .min(8, {
          msg: 'loginForm.errors.passwordLength',
          options: {
            l: 8,
          },
        })
    ),
  }),
]);
