import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '5e494e87-1910-4262-a951-a933e6491064'}
})

export const usersRest = {
  getRequestUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
}

export const followRest = {
  postRequestSubscribeUser(user) {
    return instance.post(`follow/${user.id}`)
      .then(response => {
        return response.data
      })
  },
  deleteRequestUnsubscribeUser(user) {
    return instance.delete(`follow/${user.id}`)
      .then(response => {
        return response.data
      })
  }
}
