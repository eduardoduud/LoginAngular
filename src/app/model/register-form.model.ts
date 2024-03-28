import { ObjectUtils } from '../utils/object.utils';

export class RegisterFormModel {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  day: string;
  month: string;
  year: string;

  constructor(init?: Partial<RegisterFormModel>) {
    ObjectUtils.assign(this, init);
  }
}
