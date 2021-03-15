import { User } from './../classes/user';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      firstName: "Giuseppe",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      id: 2,
      firstName: "Giuseppe 2",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      id: 3,
      firstName: "Giuseppe 3",
      lastName: "Migliaccio",
      email: "giuseppe.migliaccio93@gmail.com",
      fiscalCode: "MGLGPP93D19F839X",
      province: "Napoli",
      phone: "3336789816",
      age: 28
    },
    {
      id: 4,
      firstName: "Giuseppe 3",
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

  updateUser(user: User) {
    const index = this.users.findIndex( (u) => {
      return u.id === user.id;
    });

    if(index !== -1)
      this.users[index] = user;
  }

  insertUser(user: User) {
    var maxId = Math.max(
      ...this.users.map( (u) =>
        u.id
      )
    );

    console.log(maxId +1);

    this.users.splice(0, 0, user);


  }
}
