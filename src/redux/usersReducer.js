const SUBSCRIBE_USER = 'SUBSCRIBE_USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE_USER'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {
      id: 1,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
      firstName: 'Arthur',
      lastName: 'Gilmanov',
      status: 'Hello everyone, my name is Arthur',
      location: {
        country: 'US',
        city: 'San Francisco'
      },
      subscribed: false,
    },
    {
      id: 2,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      lastName: 'Affleck',
      status: 'Hello everyone, my name is Ben',
      location: {
        country: 'Canada',
        city: 'Ottawa'
      },
      subscribed: false,
    },
    {
      id: 3,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg',
      firstName: 'John',
      lastName: 'Konor',
      status: 'Hello everyone, my name is John',
      location: {
        country: 'US',
        city: 'Washington'
      },
      subscribed: true,
    },
    {
      id: 4,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/1139/1139529.svg',
      firstName: 'Heath',
      lastName: 'Ledger',
      status: 'Hello everyone, my name is Heath',
      location: {
        country: 'USA',
        city: 'Chicago'
      },
      subscribed: false,
    },
  ]
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
