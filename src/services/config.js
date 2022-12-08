import axios from 'axios'


export const http = axios.create({
    baseURL:"https://reqres.in/api/login",
    Headers:{
        'Content-Type':'application/json'
    },
  
  })
  
  export default http;