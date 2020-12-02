import React from "react";
import * as axios from "axios";
import Users from "../Users";
import {connect} from 'react-redux'
import {setUsers, setCurrentPage, switcherIsLoading} from '../../../../redux/usersReducer'

class UsersComponent extends React.Component {

  onSetCurrentPage = (pageNumber) => {
    this.props.switcherIsLoading(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.switcherIsLoading(false)
        this.props.setUsers(response.data.items)
      })
  }


  render() {
    return (
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onSetCurrentPage={this.onSetCurrentPage}
      />
    )
  }

}

let mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
}

const UsersContainer = connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  switcherIsLoading,
})(UsersComponent)

export default UsersContainer
