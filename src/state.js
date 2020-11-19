import * as d3 from "d3";

let reloadRender = () => {
}

const state = {
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
      {
        name: 'Diagram for Etton',
        path: '/diagram'
      }
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
}

window.state = state;

export const addNewPost = () => {
  let newPost = {
    id: 3,
    user: 'Arthur',
    message: state.profile.changePostItems,
    likes: 2,
  };
  state.profile.posts.push(newPost);
  state.profile.changePostItems = '';
  reloadRender(state)
}

export const listenNewPostChange = (changeItem) => {
  state.profile.changePostItems = changeItem;
  reloadRender(state)
}

export const sendNewMyMessage = () => {
  let addNewMyMessage = {
    id: 2,
    imageUser: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg',
    firstName: 'Arthur',
    text: state.dialogs.myNewMessages,
    time: 'Now',
  };
  state.dialogs.myMessages.push(addNewMyMessage);
  state.dialogs.myNewMessages = '';
  reloadRender(state);
  setTimeout(updateScroll, 0);
}

export const listenNewMyMessage = (changeMyMessage) => {
  state.dialogs.myNewMessages = changeMyMessage;
  reloadRender(state);
};

let updateScroll = () => {
  let element = document.getElementById("upScroll");
  element.scrollTop = element.scrollHeight;
}

export const subscribe = (observer) => {
  reloadRender = observer;
}

// export const getDataDiagram = () => {
//   const URL_DATA = 'data.json';
//   d3.json(`${process.env.PUBLIC_URL + URL_DATA}`, function(data) {
//     console.log(data)
//   });
// }

export function getDataDiagram() {
  const URL_DATA = 'data.json';
  d3.json(`${process.env.PUBLIC_URL + URL_DATA}`).then(function(data) {
    // data.forEach(function(item) {
    //   return item
    // });
    // console.log(data)
    return data
  });
}

export default state;
