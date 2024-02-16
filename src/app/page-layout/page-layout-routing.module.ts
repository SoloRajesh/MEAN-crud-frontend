import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { CustomerComponent } from './component/customer/customer.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "add-customer", pathMatch: "full" },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'customer', component: CustomerComponent },
    ],
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLayoutRoutingModule {}
