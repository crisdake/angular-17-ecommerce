import { Component, signal, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { FormsModule } from '@angular/forms';
import { CartService } from '@shared/services/cart.service';
import { CategoriesService } from '@shared/services/categories.service';
import { ApiProductService } from '@shared/services/api-product.service';
import { HeaderComponent } from 'src/app/domain/shared/components/header/header.component';
import { Category } from '@shared/models/category.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLink, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products = signal<Product[]>([
  ])
  category = signal<Category[]>([])
  @Input() category_id?: string
  @Input() title?: string
  @Input() price_min?: string
  @Input() price_max?: string
  ngOnInit() {
    this.GetCategory()
  }
  ngOnChanges(changes: SimpleChanges) {
    // necesito cambiar por el parametro category los productos que se reenderiza
    this.getProducts();
  }

  constructor(private cartService: CartService, private ApiService: ApiProductService, private CategoryService: CategoriesService, private route: ActivatedRoute, private router: Router) {

  }
  /*   fromChild(event: string) {
      console.log('estamos en al padre');
      console.log(event);
    } */
  addTocart(product: Product) {
    this.cartService.addTocart(product)
  }
  private getProducts() {
    this.ApiService.getProducts(this.category_id, this.title, this.price_min, this.price_max).subscribe({
      next: (product) => {
        this.products.set(product)
      },
      error: (error) => {
        return new Error(error)
      }
    })
  }
  updateQueryParam(event: any) {
    const inputValue = event.target.value as HTMLInputElement;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { title: inputValue },
      queryParamsHandling: 'merge',
    });
  }
  updatePriceParamMax(event: any) {
    const iValuex = event.target.value as HTMLInputElement;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { price_max: iValuex },
      queryParamsHandling: 'merge',
    });
  }
  updatePriceParam(event: any) {
    const iValue = event.target.value as HTMLInputElement;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { price_min: iValue },
      queryParamsHandling: 'merge',
    });
  }
  private GetCategory() {
    this.CategoryService.getAll().subscribe({
      next: (category) => {
        this.category.set(category)
      },
      error: (error) => {
        return new Error(error)
      }
    })
  }
}
