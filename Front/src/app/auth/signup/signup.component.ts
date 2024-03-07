import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;
  
  constructor (public service: AuthService) {

  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.service.createUser(form.value.email, form.value.password);
  }
}
