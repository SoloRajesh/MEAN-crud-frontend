import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder, private database: DatabaseService, private router : Router) {}

  submitForm(): void {
    if (this.loginForm.valid) {
      this.database.postLogin(this.loginForm.value).subscribe({next:(res)=>{
        alert(res.message);       
        localStorage.setItem('token', res.data.token); 
        localStorage.setItem('username', res.data.username); 
        this.router.navigate(['/login/page']);
      },error:err=>{
        alert("Incorrect Username or Password")
      }});
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
