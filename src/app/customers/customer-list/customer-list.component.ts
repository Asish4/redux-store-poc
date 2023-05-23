// import { state } from '@angular/animations';
// import { Component, OnInit } from '@angular/core';
// import { Store, select } from "@ngrx/store";

// import * as customerActions from "../state/customer.actions";
// import { Observable } from 'rxjs';
// import * as fromCustomer from "../state/customer.reducer";
// import { Customer } from "../customer.model";

// @Component({
//   selector: 'app-customer-list',
//   templateUrl: './customer-list.component.html',
//   styleUrls: ['./customer-list.component.scss']
// })
// export class CustomerListComponent implements OnInit {
//   customers$: Observable<Customer[]> | undefined;

//   constructor(private store: Store<any>){}

//   ngOnInit(): void {

//     // this.store.dispatch({type:'LOAD_CUSTOMERS'}) 
//     // this.store.subscribe(state=>(this.customers=state.customers.customers))
//     this.store.dispatch(new customerActions.LoadCustomers())
//     console.log("ht");
//     this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));

//   }
// }


import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromCustomer.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
    this.error$ = this.store.pipe(select(fromCustomer.getError));
  }

  deleteCustomer(customer: Customer) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
    }
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(new customerActions.LoadCustomer(customer.id));
  }
}