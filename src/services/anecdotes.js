import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const obj = { content, votes: 0 }
  const response = await axios.post(baseUrl, obj)
  return response.data
}

const updateObj = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  const objToUpdate = response.data
  objToUpdate.votes += 1
  const updatedResponse = await axios.put(`${baseUrl}/${id}`, objToUpdate)
  return updatedResponse.data
}

export default { getAll, createNew, updateObj }
