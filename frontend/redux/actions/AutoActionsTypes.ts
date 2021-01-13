export const AUTO_CREATE = "AUTO_CREATE";
export const AUTO_CREATE_FAIL = "AUTO_CREATE_FAIL";

export type AutoPurchase = {
    email: string
    name: string,
    purchase_price: string,
    auto_make: string,
    auto_model: string,
    yearly_income: string,
    credit_score: number, 
}