import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }


  static apiRoutes = {
    login: `${environment.apiUrl}/appusers/login`,
    signup: `${environment.apiUrl}/appusers`
  }

  static apiMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  }

  static localStorageKeys = {
    token: 'User_Token',
    userData: 'User_Data'
  }

  static errorMessages = {
    noEmailExist: "Invalid Information",
    unknownError: "Unknown Error, please try again",
    formError: "Form Error",
    checkEmail: "Email is sent to you",
    categoryExists: "Category with same name exists",
    noteExists: "Note with same title exists",
    notVerified: "Email not verified",
    currentPassword: "Invalid current password",
    alreadyExists: "Username or Email already Exists"
  }

  static successMessages = {
    userLoggedIn: "User has logged in"  
  }
}
