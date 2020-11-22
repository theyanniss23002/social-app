import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
  updateScroll () {
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
    this._state.profile = profileReducer(this._state.profile, action)
    this._state.dialogs = dialogsReducer(this._state.dialogs, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._reloadRender(this._state)
  }
}

window.store = store;
export default store;
