import { createSlice } from "@reduxjs/toolkit";

const cardSlice: any = createSlice({
    name: "card",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state: any, action: any): any => {
            state.products.push(action.payload);
            state.quantity += action.payload.quantity;
            state.total += action.payload.price;
        },
    },
});

export const { addProduct } = cardSlice.actions;
export default cardSlice.reducer;