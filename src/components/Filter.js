import { useDispatch } from 'react-redux'
import { filterContent } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    const inputField = e.target.value
    dispatch(filterContent({ filter: inputField }))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  )
}

export default Filter
