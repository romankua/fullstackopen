import axios from 'axios'

const getAll = () => {
  const url = "https://studies.cs.helsinki.fi/restcountries/api/all"
  
  return axios
    .get(url)
    .then(r => r.data)
}

const getByName = (name) => {
  const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
  
  return axios
    .get(url)
}

export default {
  getAll,
  getByName
}