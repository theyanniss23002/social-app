const SEND_NEW_MY_MESSAGE = 'SEND_NEW_MY_MESSAGE';
const LISTEN_NEW_MY_MESSAGE = 'LISTEN_NEW_MY_MESSAGE';

let initialState = {
  cardUsers: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Konor',
      imgUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg'
    },
    {
      id: 2,
      firstName: 'Ben',
      lastName: 'Afleck',
      imgUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg'
    },
  ],
  messages: [
    {
      id: 1,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg',
      firstName: 'John',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolorum.',
      time: '10:30',
    },
    {
      id: 2,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      text: 'Lorem ipsum dolor sit amet',
      time: '7:01',
    },
    {
      id: 3,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      text: 'Lorem dolor sit amet, consectetur',
      time: '9:20',
    },
    {
      id: 4,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      text: 'Lorem ipsum dolor sit amet',
      time: '16:30',
    },
    {
      id: 5,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
      firstName: 'Ben',
      text: 'Lorem ipsum dolor sit amet',
      time: '19:48',
    },
  ],
  myMessages: [
    {
      id: 1,
      imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
      firstName: 'Arthur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolorum.',
      time: 'Now',
    }
  ],
  myNewMessages: '',
}

const dialogsReducer = (state = initialState, action) => {
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
