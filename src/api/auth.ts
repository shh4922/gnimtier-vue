import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const headers = {"ss":"대충토큰"}

export default function duplicateNickname() {
  return axios.get(BASE_URL,{
    headers: headers
  })
}
