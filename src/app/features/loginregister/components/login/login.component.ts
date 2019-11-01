import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, Form} from '@angular/forms';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ConstantService } from 'src/app/shared/constant/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private helperService: HelperService) { }

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
    this.helperService.createSnackBar(ConstantService.successMessages.userLoggedIn);
  }

}
