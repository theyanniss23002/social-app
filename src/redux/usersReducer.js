const SUBSCRIBE_USER = 'SUBSCRIBE_USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
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
        users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    default:
      return state
  }
}

export const subscribeUserAC = (userId) => ({type: SUBSCRIBE_USER, userId})
export const unsubscribeUserAC = (userId) => ({type: UNSUBSCRIBE_USER, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer
