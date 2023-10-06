import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

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

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteFor(id))
  }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

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
