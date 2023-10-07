import {
  showNotification,
  hideNotification,
} from '../reducers/notificationReducer'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdotesForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(newAnecdote(anecdote))
    dispatch(showNotification({ message: `anecdote '${anecdote}' was added!` }))
    setTimeout(() => {
      dispatch(hideNotification(null))
    }, 5000)
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdotesForm
