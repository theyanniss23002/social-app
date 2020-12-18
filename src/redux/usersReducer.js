import {followAPI, userAPI} from "../rest/rest";

const SUBSCRIBE_USER = 'SUBSCRIBE_USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SWITCHER_IS_LOADING = 'SWITCHER_IS_LOADING'
const TOGGLE_CHANGE_BUTTON_STATE = 'TOGGLE_CHANGE_BUTTON_STATE'

let initialState = {
  users: [],
  pageSize: 18,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  changeButtonState: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNSUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
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
    case SWITCHER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case TOGGLE_CHANGE_BUTTON_STATE:
      return {
        ...state,
        changeButtonState: action.isLoading
          ? [...state.changeButtonState, action.userId]
          : state.changeButtonState.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const subscribeUser = (userId) => ({type: SUBSCRIBE_USER, userId})
export const unsubscribeUser = (userId) => ({type: UNSUBSCRIBE_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const switcherIsLoading = (isLoading) => ({type: SWITCHER_IS_LOADING, isLoading})
export const toggleChangeButtonState = (isLoading, userId) => ({type: TOGGLE_CHANGE_BUTTON_STATE, isLoading, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(switcherIsLoading(true))
    userAPI.getRequestUsers(currentPage, pageSize).then(data => {
      dispatch(switcherIsLoading(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const subscriptionThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleChangeButtonState(true, userId))
    followAPI.postRequestSubscribeUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(subscribeUser(userId))
      }
      dispatch(toggleChangeButtonState(false, userId))
    })
  }
}

export const unsubscriptionThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleChangeButtonState(true, userId))
    followAPI.deleteRequestUnsubscribeUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unsubscribeUser(userId))
      }
      dispatch(toggleChangeButtonState(false, userId))
    })
  }
}

export default usersReducer
