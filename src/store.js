const ADD_POST = 'ADD_POST';
const LISTEN_NEW_POST_CHANGE = 'LISTEN_NEW_POST_CHANGE';
const SEND_NEW_MY_MESSAGE = 'SEND_NEW_MY_MESSAGE';
const LISTEN_NEW_MY_MESSAGE = 'LISTEN_NEW_MY_MESSAGE';

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const listenNewPostChangeActionCreator = (changeItem) => {
  return {
    type: LISTEN_NEW_POST_CHANGE,
    item: changeItem,
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
    changeMyMessage: changeMyMessage,
  }
}

let store = {
  _state: {
    sidebar: {
      links: [
        {
          name: 'Profile',
          path: '/profile'
        },
        {
          name: 'Dialogs',
          path: '/dialogs',
        },
        {
          name: 'News',
          path: '/news',
        },
        {
          name: 'Music',
          path: '/audio',
        },
        {
          name: 'Settings',
          path: '/settings',
        },
      ],
      friends: [
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
        {
          id: 3,
          firstName: 'Heath',
          lastName: 'Ledger',
          imgUser: 'https://www.flaticon.com/svg/static/icons/svg/1139/1139529.svg'
        },
      ]
    },
    profile: {
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
    },
    dialogs: {
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
  },
  _reloadRender() {
  },
  _updateScroll () {
    let element = document.getElementById("upScroll");
    element.scrollTop = element.scrollHeight;
  },
  subscribe(observer) {
    this._reloadRender = observer;
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 3,
          user: 'Arthur',
          message: this._state.profile.changePostItems,
          likes: 2,
        };
        this._state.profile.posts.push(newPost);
        this._state.profile.changePostItems = '';
        this._reloadRender(this._state)
        break
      case LISTEN_NEW_POST_CHANGE:
        this._state.profile.changePostItems = action.item;
        this._reloadRender(this._state)
        break
      case SEND_NEW_MY_MESSAGE:
        let addNewMyMessage = {
          id: 2,
          imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
          firstName: 'Arthur',
          text: this._state.dialogs.myNewMessages,
          time: 'Now',
        };
        this._state.dialogs.myMessages.push(addNewMyMessage);
        this._state.dialogs.myNewMessages = '';
        this._reloadRender(this._state);
        setTimeout(this._updateScroll, 0);
        break
      case LISTEN_NEW_MY_MESSAGE:
        this._state.dialogs.myNewMessages = action.changeMyMessage;
        this._reloadRender(this._state);
        break
      default:
        console.log('Failed')
        break;
    }
  }
}

window.store = store;

export default store;
