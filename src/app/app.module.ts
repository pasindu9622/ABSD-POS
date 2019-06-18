import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import {AppRouting} from './router/AppRouting';
import { CustomerComponent } from './view/customer/customer.component';
import { ItemComponent } from './view/item/item.component';
import { OrderComponent } from './view/order/order.component';
import { MiddleDashComponent } from './view/middle-dash/middle-dash.component';
import {CustomerService} from './service/CustomerService';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    MiddleDashComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
