import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      name: 'Tallyson Vieira Freitas',
      email: 'tallyson@outlook.com',
      password: '12345678'
    }
  ]
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    introduce: (state, action) => {
      state.users += action.payload
    }
  }
})

export const { introduce } = userSlice.actions
export default userSlice.reducer
