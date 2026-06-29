import axios from 'axios'

const baseAPIUrl = "http://localhost:3001/api/persons"

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

const update = (person) => {
  return axios
    .put(`${baseAPIUrl}/${person.id}`, person)
    .then(response => response.data)
}

export default {
  getAll,
  add,
  remove,
  update
}