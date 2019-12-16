import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConstantService} from 'src/app/shared/constant/constant.service';
import { RegisterUser, RegisterUserResponse, LoginUser, LoginResponse } from 'src/app/models/user.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginregisterService {
  apiRoutes: any;


  constructor(private HttpClient: HttpClient,
    private constanctService: ConstantService) { 
      this.apiRoutes = ConstantService.apiRoutes;
    }

  
  /**
   * 
   * @param userData 
   */
  registerUser(userData: RegisterUser): Observable<RegisterUserResponse> {
    return this.HttpClient.post<RegisterUserResponse>(this.apiRoutes.signup, userData);
  }


  loginUser (userData: LoginUser) : Observable<LoginResponse> {
    return this.HttpClient.post<LoginResponse>(this.apiRoutes.login, userData);
  }

  resendEmail(data: any) {
    return this.HttpClient.post(this.apiRoutes.sendverifyemail, data);
  }

  forgetPassword(data: any) {
    return this.HttpClient.post(this.apiRoutes.forgotPassword, data);
  }

  resetPassword(data: any) {
    return this.HttpClient.post(this.apiRoutes.resetPassword, {user: data});
  } 

  changePassword(data) {
    return this.HttpClient.post(`${this.apiRoutes.signup}/change-password`, data);
  }
}
 