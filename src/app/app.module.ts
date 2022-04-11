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
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';
import { ManagersListComponent } from './components/managers-list/managers-list.component';
import { ManagerRestaurantsListComponent } from './components/manager-restaurants-list/manager-restaurants-list.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ClientOrdersListComponent } from './components/client-orders-list/client-orders-list.component';
import { OrderOrderItemsListComponent } from './components/order-order-items-list/order-order-items-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantsListComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    AddManagerComponent,
    ManagerDetailsComponent,
    ManagersListComponent,
    ManagerRestaurantsListComponent,
    AddOrderComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    ClientOrdersListComponent,
    OrderOrderItemsListComponent
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
