const SUBSCRIBE_USER = 'SUBSCRIBE_USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE_USER'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, subscribed: true}
          }
          return user
        })
      }
    case UNSUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, subscribed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export const subscribeUserAC = (userId) => ({type: SUBSCRIBE_USER, userId})
export const unsubscribeUserAC = (userId) => ({type: UNSUBSCRIBE_USER, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer
