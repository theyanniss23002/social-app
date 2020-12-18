import {profileAPI} from '../rest/rest'

const ADD_POST = 'ADD_POST';
// const LISTEN_NEW_POST_CHANGE = 'LISTEN_NEW_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
  posts: [
    // {
    //   id: 1,
    //   user: 'Arthur',
    //   message: 'I\'m a going learn React',
    //   likes: 12,
    // },
    // {
    //   id: 2,
    //   user: 'Arthur',
    //   message: 'It\'s funny learn React',
    //   likes: 2,
    // }
  ],
  // changePostItems: '',
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let body = action.data.post
      return {
        ...state,
        // changePostItems: '',
        posts: [...state.posts, {id: 4, user: 'Arthur', post: body, likes: 3}]
      }
    // case LISTEN_NEW_POST_CHANGE:
    //   return {
    //     ...state,
    //     changePostItems: action.newPost
    //   }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (data) => ({type: ADD_POST, data})
// export const listenNewPostChangeActionCreator = (changeItem) => ({type: LISTEN_NEW_POST_CHANGE, newPost: changeItem})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
}

export const getProfileStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId)
      .then(response => {
        dispatch(setProfileStatus(response.data))
      })
  }
}

export const updateProfileStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setProfileStatus(response.data.status))
        }
      })
  }
}

export default profileReducer;
