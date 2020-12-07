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
  postRequestSubscribeUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  deleteRequestUnsubscribeUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const setProfile = {
  setUserProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
}

export const setAuth = {
  setAuthUserData() {
    return instance.get(`auth/me`)
  }
}
