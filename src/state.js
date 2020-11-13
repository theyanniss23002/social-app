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
    ]
  }
}

export default state;
