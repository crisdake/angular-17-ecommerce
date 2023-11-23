import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@shared/services/auth.service';
import { ApiProductService } from '@shared/services/api-product.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private Authservice = inject(AuthService)
  private apiService = inject(ApiProductService)
  User = this.Authservice.User
  Public = signal<User[]>([])
  ngOnInit(){
    this.apiService.getUsers().subscribe({
      next:(users)=> {
        this.Public.set(users)
      },
      error: ()=>{

      }
    })
   
  }
}
