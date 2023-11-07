import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( 
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  userRegisterForm = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ],
    }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    repeatPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    fullName: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    lastName: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    address: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    phoneNo: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] })
  });

  onRegister() {
    // console.log(this.userRegisterForm.value)
    this.authService.userRegister(this.userRegisterForm.value).subscribe({
      next: res => {
        this.toastr.success(res.message);
        this.authService.saveToken(res.data.token);
        this.router.navigate(["login"]);
      },
      error: err => {
        this.toastr.error(err.error.error.message);
      }
    });
  }
}
