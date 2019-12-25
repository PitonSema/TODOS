import axios from 'axios'

export const apiAuth = axios.create({
  baseURL: 'https://lab.dev.cogniteq.com/api/',
})
export const apiTask = axios.create({
  baseURL: 'https://lab.dev.cogniteq.com/api/',
  headers:{
    token:localStorage.getItem('token')
  }
})