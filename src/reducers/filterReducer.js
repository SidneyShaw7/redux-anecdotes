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

// export const filterChange = (filter) => {
//   return {
//     type: 'FILTERED',
//     payload: { filter },
//   }
// }

// const filterReducer = (state = 'ALL', action) => {
//   switch (action.type) {
//     case 'FILTERED': {
//       const input = action.payload.filter
//       return input
//     }
//     default:
//       return state
//   }
// }

export const { filterContent } = filterSlice.actions
export default filterSlice.reducer
