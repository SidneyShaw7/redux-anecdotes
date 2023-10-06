import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: null,
  //   type: null,
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.message = action.payload.message
      //   state.type = action.payload.type
    },
    hideNotification(state) {
      state.message = null
      //   state.type = null
    },
  },
})

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer
