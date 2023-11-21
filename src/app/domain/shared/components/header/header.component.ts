import { Component, signal,inject, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
     private cartService = inject(CartService)
     private authService = inject(AuthService)
     private router = inject(Router)
     cart = this.cartService.cart
     total = this.cartService.total
     user = this.authService.User
     hideUserMenu = signal(true)
     hideSideMenu = signal(true)
    ToogleSideMenu(){
      this.hideSideMenu.update(prevstate => !prevstate)
    }
    logout(){
      this.authService.logout()
      this.router.navigate(['/'])
    }
    ToggleUserMenu(){
      this.hideUserMenu.update(prevstate => !prevstate)
    }

/*     ngOnChanges(changes:SimpleChanges){
       const usuario = changes['user']
       if(usuario){
        this.authService.getProfile()
        .subscribe(()=>{
          console.log('profile obtenido')
        })
       }
    } */
   /*  @Input() cart: Product[] = [] */
    /* total = signal(0) */
/*     ngOnchanges(changes:SimpleChanges){
        const cart = changes['cart']
        if(cart) {
          this.total.set(this.CalcularTotal())
        }
    } */

/*     CalcularTotal(){
       return this.cart.reduce((total+product) => total+ product.price,0)
    } */
}
