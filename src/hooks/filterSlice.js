import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload)
    },
    removeFilter: (state, action) => {
      console.log(action.payload);
      return (state.filter((e) => {
        console.log(e);
        return action.payload !== e
      }))
    }
  },
})

console.log(filterSlice.actions)

export const { addFilter, removeFilter } = filterSlice.actions

export default filterSlice.reducer