import Axios from 'axios'
import Vue from 'vue'

const instance = Axios.create({
  baseURL: '/api',
  timeout: 5000
})

Vue.prototype.$http = instance

export default instance
