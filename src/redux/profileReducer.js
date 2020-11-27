const ADD_POST = 'ADD_POST';
const LISTEN_NEW_POST_CHANGE = 'LISTEN_NEW_POST_CHANGE';

let initialState = {
  posts:  [
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
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const listenNewPostChangeActionCreator = (changeItem) => {
  return {
    type: LISTEN_NEW_POST_CHANGE,
    newPost: changeItem,
  }
}

export default profileReducer;
