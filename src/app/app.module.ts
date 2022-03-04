import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddRestaurantComponent} from './components/add-restaurant/add-restaurant.component';
import {RestaurantDetailsComponent} from './components/restaurant-details/restaurant-details.component';
import {RestaurantsListComponent} from './components/restaurants-list/restaurants-list.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantsListComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
