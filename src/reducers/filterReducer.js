import { createSlice } from '@reduxjs/toolkit'

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContent(state, action) {
      return action.payload.filter
    },
  },
})

export const { filterContent } = filterSlice.actions
export default filterSlice.reducer
