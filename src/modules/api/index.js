import axios from 'axios'

const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}

const api = {
  getPosts
}

export default api