import { Injectable } from '@angular/core';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey = ConstantService.localStorageKeys.token;
  userDataKey = ConstantService.localStorageKeys.userData;
  logout_success: string;
  logout_msg: string; 

  constructor(private router: Router) { }

  /**
   * This function is used to logout a user and navigate to login page
   */
  logoutUser() {
    localStorage.clear();
    this.removeToken();

    this.router.navigate(['/login'])
  }

  /**
   * This function is used to get the token key that user gets when he logs in
   */
  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  /**
   * this function is used to set the token key when the user logs in
   * @param token #string
   */
  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  /**
   * this function is used to remove token from local storage
   */
  removeToken() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userDataKey);
  }

  isAuthenticated(): boolean {
    if (this.getToken()) {
        return true;
    }
    return false;
  }
}
