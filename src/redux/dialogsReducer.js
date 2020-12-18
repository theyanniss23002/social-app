const SEND_NEW_MY_MESSAGE = 'SEND_NEW_MY_MESSAGE';
// const LISTEN_NEW_MY_MESSAGE = 'LISTEN_NEW_MY_MESSAGE';

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
    // {
    //   id: 1,
    //   imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922686.svg',
    //   firstName: 'John',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolorum.',
    //   time: '10:30',
    // },
    // {
    //   id: 2,
    //   imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
    //   firstName: 'Ben',
    //   text: 'Lorem ipsum dolor sit amet',
    //   time: '7:01',
    // },
    // {
    //   id: 3,
    //   imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
    //   firstName: 'Ben',
    //   text: 'Lorem dolor sit amet, consectetur',
    //   time: '9:20',
    // },
    // {
    //   id: 4,
    //   imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
    //   firstName: 'Ben',
    //   text: 'Lorem ipsum dolor sit amet',
    //   time: '16:30',
    // },
    // {
    //   id: 5,
    //   imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922627.svg',
    //   firstName: 'Ben',
    //   text: 'Lorem ipsum dolor sit amet',
    //   time: '19:48',
    // },
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
  // myNewMessages: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MY_MESSAGE:
      let body = action.data.message
      return {
        ...state,
        // myNewMessages: '',
        myMessages: [
          ...state.myMessages,
          {
            id: 2,
            imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
            firstName: 'Arthur',
            text: body,
            time: 'Now',
          }
        ]
      }
    // case LISTEN_NEW_MY_MESSAGE:
    //   return {
    //     ...state,
    //     myNewMessages: action.newMessage
    //   }
    default:
      return state;
  }
}

export const sendMyMessageActionCreator = (data) => ({type: SEND_NEW_MY_MESSAGE, data})

// export const listenNewMyMessageActionCreator = (changeMyMessage) => {
//   return {
//     type: LISTEN_NEW_MY_MESSAGE,
//     newMessage: changeMyMessage,
//   }
// }

export default dialogsReducer;
