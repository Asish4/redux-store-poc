// const initialState = {
//     customers: [
//         {
//             name: "jhon doe",
//             phone: "910928392098",
//             address: "123 sun Street",
//             membership: "Platinum",
//             id: 1
//         }
//     ],
//     loading: false,
//     loaded: true
// };

// export function customerReducer(state = initialState, action: { type: any; }) {
//     console.log(action.type);
//     switch (action.type) {

//         case "LOAD_CUSTOMERS": {
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false  
//             };
//         }

//         default: {
//             return state;
//         }
//     }
// }

import * as customerActions from "./customer.actions";
import { Customer } from "../customer.model";
import * as fromRoot from "../../state/app-state";

export interface CustomerState {
    customers: Customer[],
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    customers: CustomerState;
}

export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ""
}

export function customerReducer(state = initialState, action: customerActions.action): CustomerState {

    switch (action.type) {
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
          return{
            ...state,
            loaded: true
          }
        } 

        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
            return{
              ...state,
              loading: false,
              loaded: true,
              customers: action.payload
            }
          } 

        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
            return{
              ...state,
              customers:[],
              loading: false,
              loaded: false,
              error: action.payload
            }  
          } 

          default:{
            return state;
          }
 }
}
