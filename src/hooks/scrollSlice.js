import { createSlice } from '@reduxjs/toolkit'

export const scrollSlice = createSlice({
    name: 'scrollRef',
    initialState: null,
    reducers: {
        scrollTo: (state, action) => {
            return action.payload.current.scrollIntoView()
        }
    },
})

console.log(scrollSlice.actions)

export const { scrollTo } = scrollSlice.actions

export default scrollSlice.reducer

// const scroll = () => {
//     scrollRef.current.scrollIntoView();
//   };