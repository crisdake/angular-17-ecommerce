import { Routes } from '@angular/router';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [   {
        path: '',
        loadComponent: ()=> import('./domains/products/pages/list/list.component').then(m=> m.ListComponent)
    },
    {
        path: 'about',
        loadComponent: ()=> import ('./domains/info/pages/about/about.component').then(l=>l.AboutComponent)
    },{
      path: 'product/:id',
      loadComponent: ()=> import ('./domains/products/pages/product-detail/product-detail.component').then(w=>w.ProductDetailComponent)
    }]
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];
