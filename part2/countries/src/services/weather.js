import axios from "axios"

const getCurrent = ({ lat, lon }) => {
  const key = import.meta.env.VITE_OPEN_WEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

  return axios.get(url).then(r => r.data)
}

export default {
  getCurrent
}