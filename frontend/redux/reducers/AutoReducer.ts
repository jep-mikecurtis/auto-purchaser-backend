import {AutoPurchase, AUTO_CREATE} from '../actions/AutoActionsTypes';


const DefaultAutoState: AutoPurchase = {
    email: '',
    name: '',
    purchase_price: '',
    auto_make: '',
    auto_model: '',
    yearly_income: '',
    credit_score: 0,
}

const autoReducer = (state: AutoPurchase = DefaultAutoState, action: any) : AutoPurchase => {
    switch(action.type) {
        case AUTO_CREATE:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default autoReducer;
