import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from './index';
import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  inputs: ['data'],
  providers: [LoginService],
  selector: 'bazaar-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  form: any; 

  constructor(private loginService: LoginService) { 
    this.form =  new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // Public methods

  onSubmit() {
    this.loginService.login(new Login(this.form._value.email, this.form._value.password))
      .then((response) => console.log(response));
  }
}
