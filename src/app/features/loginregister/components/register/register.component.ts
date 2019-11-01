import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, Form} from '@angular/forms';
import { CompilerService } from 'src/app/shared/compiler/compiler.service';
import { RegisterUser, RegisterUserResponse } from 'src/app/models/user.model';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ConstantService } from 'src/app/shared/constant/constant.service';
import { LoginregisterService } from 'src/app/services/common/loginregister/loginregister.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserFormGroup: FormGroup;
  loading: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private compilerService: CompilerService,
    private loginRegisterService: LoginregisterService,
    private helperService: HelperService) { }

  ngOnInit() {
    this.registerUserFormGroup = this.formBuilder.group(
      {
        "firstname": ["", [Validators.required]],
        "lastname": ["", [Validators.required]],
        "username": ["", [Validators.required]],
        "email": ["", [Validators.required]],
        "password": ["", [Validators.required,
                          Validators.minLength(8),
                          Validators.maxLength(30)]],
        "confirmPassword": ["", [Validators.required,
                          Validators.minLength(8),
                          Validators.maxLength(30)]]
      },
      {validator: this.checkPasswords}
    )
  }

  /**
   * This is to check if password are some or not 
   * @param group 
   */
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return pass == confirmPassword ? null : group.controls.confirmPassword.setErrors({ notSame: true });  
  }

  /**
   * Register new user
   */
  registerUser() {
    if(!this.registerUserFormGroup.invalid) {
      this.loading = true;
      let modifiedData = this.compilerService.constructRegisterUserObject(this.registerUserFormGroup.value);
      this.loginRegisterService.registerUser(modifiedData).subscribe((response: RegisterUserResponse) => {
        this.loading = false;
        console.log(response);
      }, (error) => {
        if(error.status === 422) {
          this.loading = false;
          this.helperService.createSnackBar(ConstantService.errorMessages.alreadyExists);
        }
      })
    }
  }
}
