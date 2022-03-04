import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddRestaurantComponent} from './components/add-restaurant/add-restaurant.component';
import {RestaurantsListComponent} from './components/restaurants-list/restaurants-list.component';
import {RestaurantDetailsComponent} from './components/restaurant-details/restaurant-details.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {AddProductComponent} from './components/add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'restaurants', component: RestaurantsListComponent},
  {path: 'restaurants/id/:id', component: RestaurantDetailsComponent},
  {path: 'restaurants/add', component: AddRestaurantComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/id/:id', component: ProductsListComponent},
  {path: 'products/add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
