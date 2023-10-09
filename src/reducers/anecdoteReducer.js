import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const votedAnecdote = action.payload
      const id = action.payload.id
      return state.map((anecdote) =>
        id !== anecdote.id ? anecdote : votedAnecdote
      )
    },
  },
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.updateObj(id)
    dispatch(updateAnecdote(votedAnecdote))
  }
}

export const { appendAnecdote, setAnecdotes, updateAnecdote } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer
