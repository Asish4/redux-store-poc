
const initialState = {
    customers: [
        {
            name: "jhon doe",
            phone: "910928392098",
            address: "123 sun Street",
            membership: "Platinum",
            id: 1
        }
    ],
    loading: false,
    loaded: true
};

export function customerReducer(state = initialState, action: { type: any; }) {
    console.log(action.type);
    switch (action.type) {
        
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }

        default: {
            return state;
        }
    }
}