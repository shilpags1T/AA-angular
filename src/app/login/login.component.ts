import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormControl ,FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginAuthenticationService } from '../_services/login-authentication.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/core/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  errorMessage:string;
  constructor( private formBuilder: FormBuilder,private loginAuthenticationService:LoginAuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});

  }
  get formValues() { 
    // console.log(this.loginForm.controls);
    return this.loginForm.controls;   
  }
  
  onSubmit() {
    this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = false;
      this.loginAuthenticationService.login(this.formValues.email.value, this.formValues.password.value).subscribe(
          (success) =>{
            this.goTo();
          },
          (error) => {
          this.errorMessage=error.error.error_description;
          }
      );   
  }

  goTo(): void {
    this.router.navigateByUrl('template-list'); 
  }

}
