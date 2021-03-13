import { User } from './../interfaces/user';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  users: User[] = [
    {
      name: "Giuseppe",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      name: "Giuseppe 2",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      name: "Giuseppe 3",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      name: "Giuseppe 3",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    }
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(user: any) {
    let index = this.users.indexOf(user);
    if(index !== -1)
      this.users.splice(index, 1);
  }
}
