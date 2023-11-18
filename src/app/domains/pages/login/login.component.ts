import { Component, inject, signal } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,Validators, FormBuilder} from '@angular/forms';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { RequestStatus } from '@shared/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private Authservice = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  constructor(){
    this.route.queryParamMap.subscribe((params: { get: (arg0: string) => any; })=>{
      const email = params.get('emailField')
      if(email){
        this.form.controls.emailField.setValue(email)
      }
})
}
  form = this.formBuilder.nonNullable.group({
        emailField : ['',[Validators.required, Validators.maxLength(20),Validators.email]],
        PasswordField: ['',[Validators.required,Validators.minLength(20)]]
      })
  status:RequestStatus='init'
  Dologin(){
    if(this.form.valid){
      this.status = 'loading'
      const {emailField,PasswordField} = this.form.getRawValue()
      // antes de suscribirse en la respuesta vas y guardas el token en sessionstorage
      this.Authservice.Login(emailField,PasswordField)
      .subscribe({
        next: ()=>{
          this.status = 'success'
          this.router.navigate(['/app'])
        },
        error: ()=>{
            this.status = 'failed'
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}

 /*  emailField = new FormControl('',[Validators.required, Validators.maxLength(20)]) */

