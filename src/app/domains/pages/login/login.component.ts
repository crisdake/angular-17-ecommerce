import { Component, inject } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestStatus } from '@shared/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authservice = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private toast = inject(MatSnackBar)
  constructor() {
    this.route.queryParamMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const email = params.get('emailField')
      if (email) {
        this.form.controls.emailField.setValue(email)
      }
    })
  }
  form = this.formBuilder.nonNullable.group({
    emailField: ['', [Validators.required, Validators.maxLength(20), Validators.email]],
    PasswordField: ['', [Validators.required, Validators.minLength(8)]]
  })
  status: RequestStatus = 'init'
  Dologin() {
    if (this.form.valid) {
      this.status = 'loading'
      const { emailField, PasswordField } = this.form.getRawValue()
      // antes de suscribirse en la respuesta vas y guardas el token en sessionstorage
      this.authservice.LoginAndGet(emailField, PasswordField)
        .subscribe({
          next: () => {
            this.status = 'success'
            this.toast.open(this.status, 'Cerrar', {
              duration: 10000, // Duración en milisegundos (2 segundos en este ejemplo)
              panelClass: ['success-snackbar'], // Clase de estilo personalizado para éxito
            });
            this.router.navigate(['/'])
          },
          error: (error) => {
            this.status = 'failed'
            console.log(error)
            this.toast.open(error.statusText, 'Cerrar', {
              duration: 10000, // Duración del Snackbar en milisegundos (en este caso, 5 segundos)
              panelClass: ['error-snackbar'], // Clase CSS personalizada para estilos de error
            });
          }
        })
    } else {
      this.form.markAllAsTouched()
    }
  }
}

/*  emailField = new FormControl('',[Validators.required, Validators.maxLength(20)]) */


