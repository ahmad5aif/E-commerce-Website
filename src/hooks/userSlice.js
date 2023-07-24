import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: { $id: '' },
    reducers: {
        userData: (state, action) => {
            return state = action.payload
        }
    },
})

console.log(userSlice.actions)

export const { userData } = userSlice.actions

export default userSlice.reducer