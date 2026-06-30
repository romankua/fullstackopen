import axios from 'axios'

const baseAPIUrl = "/api/persons"

const checkResponseIsJson = (response) => {
  if (!response.headers["content-type"].startsWith("application/json")) {
    throw new Error("Data loading error")
  }
  return response
}

const getAll = () => {
  return axios
    .get(baseAPIUrl)
    .then(checkResponseIsJson)
    .then(response => response.data)
}

const add = (person) => {
  return axios
    .post(baseAPIUrl, person)
    .then(checkResponseIsJson)
    .then(response => response.data)
}

const remove = (id) => {
  return axios
    .delete(`${baseAPIUrl}/${id}`)
}

const update = (person) => {
  return axios
    .put(`${baseAPIUrl}/${person.id}`, person)
    .then(checkResponseIsJson)
    .then(response => response.data)
}

export default {
  getAll,
  add,
  remove,
  update
}