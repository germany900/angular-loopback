import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, FormControl, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group(
      {
        "email": ["", [Validators.required,
                      Validators.email]]
      }
    )
  }
  /**
   * Reset password for email
   */
  forgetPassword() {

  }

}
