import { Component, signal, Input, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/domains/shared/models/product.model';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
     private cartService = inject(CartService)
     cart = this.cartService.cart
     total = this.cartService.total
     hideSideMenu = signal(true)
    ToogleSideMenu(){
      this.hideSideMenu.update(prevstate => !prevstate)
    }
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
