import axios from "axios"

const loginApi = ({ email, password }) => axios.post('/auth', {
  email, password
})


export default loginApi;