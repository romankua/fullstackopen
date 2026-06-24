import axios from 'axios'

const baseAPIUrl = "http://localhost:3001/persons"

const getAll = () => {
  return axios
    .get(baseAPIUrl)
    .then(response => response.data)
}

const add = (person) => {
  return axios
    .post(baseAPIUrl, person)
    .then(response => response.data)
}

const remove = (id) => {
  return axios
    .delete(`${baseAPIUrl}/${id}`)
    .then(response => response.data)
}

export default {
  getAll,
  add,
  remove
}