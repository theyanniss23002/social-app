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
    case ADD_POST: {
      let newPost = {
        id: 3,
        user: 'Arthur',
        message: state.changePostItems,
        likes: 2,
      };
      let copyState = {...state};
      copyState.posts = [...state.posts];
      copyState.posts.push(newPost);
      copyState.changePostItems = '';
      return copyState;
    }
    case LISTEN_NEW_POST_CHANGE: {
      let copyState = {...state};
      copyState.changePostItems = action.newPost;
      return copyState;
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
