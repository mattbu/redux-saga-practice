import axios from 'axios'
import { axiosApiInstance, headers } from '../_httpHeaders.js'

// const getPosts = () => {
//   return axios.get('https://jsonplaceholder.typicode.com/posts')
// }

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}