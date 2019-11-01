import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConstantService} from 'src/app/shared/constant/constant.service';
import { RegisterUser, RegisterUserResponse } from 'src/app/models/user.model';
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
}
