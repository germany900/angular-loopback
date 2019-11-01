import { Injectable } from '@angular/core';
import { RegisterUser } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  constructor() { }

  constructRegisterUserObject(userData: RegisterUser) {
    let modifiedData = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      email: userData.email,
      password: userData.password,
    }

    return modifiedData;
  }

  constructLoginUserObject(userData) {

  }

  constructAfterLoginUserData(loginApiResponse) {

  }

  constructCategoriesData(data) {
    
  }
}
