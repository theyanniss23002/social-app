const ADD_POST = 'ADD_POST';
const LISTEN_NEW_POST_CHANGE = 'LISTEN_NEW_POST_CHANGE';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        user: 'Arthur',
        message: state.changePostItems,
        likes: 2,
      };
      state.posts.push(newPost);
      state.changePostItems = '';
      return state;
    case LISTEN_NEW_POST_CHANGE:
      state.changePostItems = action.newPost;
      return state;
    default:
      console.log('Failed profileReducer')
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
