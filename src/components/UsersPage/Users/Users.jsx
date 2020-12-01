import React from 'react'
import style from "./Users.module.scss";
import UsersCardContainer from "../UsersCard/UsersCardContainer/UsersCardContainer";

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={`${style.columnContent} ${style.users}`}>
      <span className={style.usersTitle}>users list</span>
      <div className={style.usersGrid}>
        <UsersCardContainer/>
      </div>
      <div className={style.usersPagination}>
        {pages.map(page => {
          return <span
            className={props.currentPage === page && style.usersPaginationDots}
            onClick={() => {
              props.onSetCurrentPage(page)
            }}
          >{page}</span>
        })}
      </div>
    </div>
  )
}

export default Users
