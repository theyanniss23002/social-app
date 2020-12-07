import React from "react";
import Users from "../Users";
import {connect} from 'react-redux'
import {
  setCurrentPage,
  getUsersThunkCreator
} from '../../../../redux/usersReducer'

class UsersComponent extends React.Component {

  onSetCurrentPage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
  setCurrentPage,
  getUsers: getUsersThunkCreator
})(UsersComponent)

export default UsersContainer
