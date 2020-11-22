let initialState = {
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
}

const sidebarReducer  = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;
