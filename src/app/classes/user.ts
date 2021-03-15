import { UserInterface } from './../interfaces/user';
export class User implements UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  fiscalCode: string;
  province: string;
  phone: string;
  age: number;

  constructor() {
    this.id  = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.fiscalCode = '';
    this.province = '';
    this.phone = '';
    this.age = 18;
  }

}
