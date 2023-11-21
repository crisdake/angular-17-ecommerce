import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@shared/services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utils/validators';
import { RequestStatus } from '@shared/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private Authservice = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  ShowRegister:boolean= false
  status:RequestStatus = 'init'
  statusUser:RequestStatus = 'init'
  Uservalidator = this.formBuilder.nonNullable.group({
    emailField : ['',[Validators.required, Validators.maxLength(20),Validators.email]],
  })

  form = this.formBuilder.nonNullable.group({
    name : ['',Validators.required],
    avatar: ['',Validators.pattern(/^https?:\/\/\S+/)],
    emailField : ['',[Validators.required, Validators.maxLength(20),Validators.email]],
    PasswordField: ['',[Validators.required,Validators.minLength(8)]],
    ConfirmPassword : ['',Validators.required],
  },{
    validators: [CustomValidators.MatchValidator('PasswordField','ConfirmPassword')]
  })
Doregister(){
  if(this.form.valid){
    this.status = 'loading'
    const {name,emailField,PasswordField,avatar} = this.form.getRawValue()
    this.Authservice.RegisterAndlogin(name,emailField,PasswordField,avatar)
    .subscribe({
      next: ()=>{
        this.status='success'
        this.router.navigate(['/'])
      },
      error: ()=>{
        this.status ='failed'
      }
    })
  } else {
    this.form.markAllAsTouched()
  }
}
ValidateUser(){
  if(this.Uservalidator.valid){
    this.statusUser = 'loading'
    const {emailField} = this.Uservalidator.getRawValue()
    this.Authservice.Available(emailField)
    .subscribe({
      next: (rta)=>{
        this.statusUser='success'
        if(!rta.isAvailable){
          this.ShowRegister = true
          this.form.controls.emailField.setValue(emailField)
        } else {
          //quiero settear el email en el login
          this.router.navigate(['/login'], {
            queryParams: { emailField }
          });

        }
      },
      error: ()=>{
        this.statusUser ='failed'
      }
    })
  } else {
    this.Uservalidator.markAllAsTouched()
  }
}
}
