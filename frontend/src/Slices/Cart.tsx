
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
    _id?:string,
    name: string,
    category:string,
    description: string,
    images: string[],
    price: number,
    discount: number,
    quantity: number,
    count: number
}

const initialState = {
    items: []
} as { items: any[] }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            const newProduct = action.payload;
            const existProductIndex = state.items.findIndex((item: IProduct) => item._id == newProduct._id);
            if (existProductIndex === -1) {
                state.items.push(newProduct);
            } else {
                state.items[existProductIndex].count++;
            }
            
        },
        increase: (state, action: PayloadAction<string>) => {
            state.items.find((item: IProduct) => item._id === action.payload).count++;
        },
        decrease: (state, action: PayloadAction<string>) => {
            const productFound = state.items.find((item: IProduct) => item._id === action.payload);
            productFound.count--;
            if (productFound.quantity < 1) {
                const confirm = window.confirm('Do you want delete product??');
                if (confirm) state.items = state.items.filter((item: IProduct) => item._id !== action.payload);
                productFound.count = 1
            }
        }
    }
});

export const { add, increase, decrease } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;