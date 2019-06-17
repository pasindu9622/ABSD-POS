import {RouterModule, Route, Routes} from '@angular/router';
import {LoginComponent} from '../view/login/login.component';
import {DashboardComponent} from '../view/dashboard/dashboard.component';
import {HeaderComponent} from '../view/header/header.component';
import {FooterComponent} from '../view/footer/footer.component';
import {CustomerComponent} from '../view/customer/customer.component';
import {ItemComponent} from '../view/item/item.component';
import {OrderComponent} from '../view/order/order.component';
import {NgModule} from '@angular/core';



const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'customer', component: CustomerComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrderComponent},

    ]
  },
  {
    path: 'login',
    component: LoginComponent,

  },

  {path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {

}
