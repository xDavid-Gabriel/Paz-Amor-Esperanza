import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGltYWRpZ2l0YWwiLCJpYXQiOjE2NzQ4NjI5MTV9.frcrBSwtnVqV9g3PxNclhRNd8C5JA5SExUPM_2Euar8'

const pagesApi = axios.create({
  baseURL: 'https://app-agencia-lima-digital.herokuapp.com/api/v1',
  headers: {
    'x-access-token': token,
  },
})

export default pagesApi
