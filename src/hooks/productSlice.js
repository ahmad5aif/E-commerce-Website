import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return state = action.payload
        }
    },
})

console.log(productSlice.actions)

export const { setProducts } = productSlice.actions

export default productSlice.reducer