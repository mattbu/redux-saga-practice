import axios from 'axios'
import { axiosApiInstance, headers } from '../_httpHeaders.js'

export const getPosts = () => axiosApiInstance({
  method: 'get',
  headers,
  url: 'https://jsonplaceholder.typicode.com/posts',
})