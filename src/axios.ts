import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

function createInstance(): AxiosInstance {
  const contenxt = new Axios()
  const instance = Axios.prototype.request.bind(contenxt)

  extend(instance, contenxt)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
