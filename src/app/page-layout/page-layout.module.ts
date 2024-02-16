import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CustomerComponent } from './component/customer/customer.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';


@NgModule({
  declarations: [
    PageLayoutComponent,
    SideBarComponent,
    PageHeaderComponent,
    CustomerComponent,
    AddCustomerComponent
    ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    SharedModule
  ]
})
export class PageLayoutModule { }
