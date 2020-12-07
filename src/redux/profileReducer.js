import {setProfile} from '../rest/rest'

const ADD_POST = 'ADD_POST';
const LISTEN_NEW_POST_CHANGE = 'LISTEN_NEW_POST_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      user: 'Arthur',
      message: 'I\'m a going learn React',
      likes: 12,
    },
    {
      id: 2,
      user: 'Arthur',
      message: 'It\'s funny learn React',
      likes: 2,
    }
  ],
  changePostItems: '',
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        changePostItems: '',
        posts: [
          ...state.posts,
          {
            id: 3,
            user: 'Arthur',
            message: state.changePostItems,
            likes: 2,
          }
        ]
      }
    case LISTEN_NEW_POST_CHANGE:
      return {
        ...state,
        changePostItems: action.newPost
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const listenNewPostChangeActionCreator = (changeItem) => ({type: LISTEN_NEW_POST_CHANGE, newPost: changeItem})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    setProfile.setUserProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
}

export default profileReducer;
