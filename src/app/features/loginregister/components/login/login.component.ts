import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, Form} from '@angular/forms';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { LoginregisterService } from 'src/app/services/common/loginregister/loginregister.service';
import { CompilerService } from 'src/app/shared/compiler/compiler.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: any;
  loginUserFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private helperService: HelperService,
              private loginRegisterService: LoginregisterService,
              private compiler: CompilerService,
              private router: Router) { }

  ngOnInit() {
    this.loginUserFormGroup = this.formBuilder.group(
      {
        "email": ["", [Validators.required,
                      Validators.email]],
        "password": ["", [Validators.required,
                          Validators.minLength(8),
                          Validators.maxLength(30)]] 
      }
    )
  }

  /**
   * Login user
   */
  loginUser() {
    if(!this.loginUserFormGroup.invalid) {
      let modifiedData = this.compiler.constructLoginUserObject(this.loginUserFormGroup.value);
      this.loginRegisterService.loginUser(modifiedData).subscribe((response) => {
        let verification = response.emailVerified
        if(verification) {
          this.loginData = response;
          localStorage.setItem(ConstantService.localStorageKeys.token, this.loginData.id);
          let userData = this.compiler.constructAfterLoginUserData(this.loginData);
          localStorage.setItem(ConstantService.localStorageKeys.userData, JSON.stringify(userData));
          this.helperService.createSnackBar("You are logged In");
          this.router.navigate(['/home']);
        } else {
          this.helperService.createSnackBar(ConstantService.errorMessages.notVerified);
        }
      }, error => {
        if(error.status === 401) {
          this.helperService.createSnackBar(ConstantService.errorMessages.noEmailExist);
        } else {
          this.helperService.createSnackBar(ConstantService.errorMessages.unknownError);
        }
      });
    }
    //this.helperService.createSnackBar(ConstantService.successMessages.userLoggedIn);
  }

}
