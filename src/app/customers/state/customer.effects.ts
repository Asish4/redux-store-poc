import { Injectable } from "@angular/core";

import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { CustomerService } from "../customer.service";
import * as customerActions from "../state/customer.actions";
import { Customer } from "../customer.model";

@Injectable()
export class CustomerEffect{
    constructor(private actions$: Actions, private customerService: CustomerService){}

    
    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType<customerActions.LoadCustomers>(
          customerActions.CustomerActionTypes.LOAD_CUSTOMERS
        ),
        mergeMap((action: customerActions.LoadCustomers) =>
          this.customerService.getCustomers().pipe(
            map(
              (customers: Customer[]) =>
                new customerActions.LoadCustomersSuccess(customers)
            ),
            catchError(err => of(new customerActions.LoadCustomersFail(err)))
          )
        )
      )
    );
}
