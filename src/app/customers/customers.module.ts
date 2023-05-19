import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { customerReducer } from "./state/customer.reducer";
import { EffectsModule, Actions } from "@ngrx/effects";
import { CustomerEffect } from './state/customer.effects';

const customerRoutes: Routes = [{ path: "", component: CustomerComponent }];


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes), // For accessing all the chield components
    StoreModule.forFeature("customers",customerReducer), // register 
    EffectsModule.forFeature(CustomerEffect) // register
  ]
})
export class CustomersModule { }
