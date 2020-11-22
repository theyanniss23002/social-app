const SEND_NEW_MY_MESSAGE = 'SEND_NEW_MY_MESSAGE';
const LISTEN_NEW_MY_MESSAGE = 'LISTEN_NEW_MY_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_NEW_MY_MESSAGE:
      let addNewMyMessage = {
        id: 2,
        imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
        firstName: 'Arthur',
        text: state.myNewMessages,
        time: 'Now',
      };
      state.myMessages.push(addNewMyMessage);
      state.myNewMessages = '';
      setTimeout(state.updateScroll, 0);
      return state;
    case LISTEN_NEW_MY_MESSAGE:
      state.myNewMessages = action.newMessage;
      return state;
    default:
      console.log('Failed dialogsReducer')
      return state;
  }
}

export const sendMyMessageActionCreator = () => {
  return {
    type: SEND_NEW_MY_MESSAGE,
  }
}

export const listenNewMyMessageActionCreator = (changeMyMessage) => {
  return {
    type: LISTEN_NEW_MY_MESSAGE,
    newMessage: changeMyMessage,
  }
}

export default dialogsReducer;
