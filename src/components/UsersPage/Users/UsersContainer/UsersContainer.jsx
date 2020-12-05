import React from "react";
import Users from "../Users";
import {connect} from 'react-redux'
import {setUsers, setCurrentPage, switcherIsLoading} from '../../../../redux/usersReducer'
import {getRequestUsers} from "../../../../rest/rest";

class UsersComponent extends React.Component {

  onSetCurrentPage = (pageNumber) => {
    this.props.switcherIsLoading(true)
    this.props.setCurrentPage(pageNumber)
    getRequestUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.switcherIsLoading(false)
      this.props.setUsers(data.items)
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
