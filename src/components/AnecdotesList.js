import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import {
  showNotification,
  hideNotification,
} from '../reducers/notificationReducer'

const AnecdotesList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    console.log('filter:', filter)
    console.log('anecdotes:', anecdotes)
    if (filter === 'ALL') {
      return anecdotes
    }
    return (anecdotes = anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    ))
  })
  const dispatch = useDispatch()

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    // console.log('vote', id)
    const anecdoteToVote = anecdotes.find((a) => a.id === id.id)
    console.log(id.id)
    dispatch(voteFor(id))
    dispatch(
      showNotification({ message: `you voted '${anecdoteToVote.content}'` })
    )
    setTimeout(() => {
      dispatch(hideNotification(null))
    }, 5000)
  }

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            {console.log(anecdote.id)}
            <button onClick={() => vote({ id: anecdote.id })}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdotesList
