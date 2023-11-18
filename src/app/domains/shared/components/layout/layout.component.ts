import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/domain/shared/components/header/header.component';
import { AuthService } from '@shared/services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  private authService = inject(AuthService)
   ngOnInit(){
        this.authService.getProfile()
        .subscribe(()=>{
          console.log('profile obtenido')
        })
   }
}
