import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  getUsers() {
    return [
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
  }
}
