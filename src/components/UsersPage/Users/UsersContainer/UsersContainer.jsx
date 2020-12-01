import {connect} from 'react-redux'
import {setCurrentPageAC, setUsersAC} from '../../../../redux/usersReducer'
import React from "react";
import * as axios from "axios";
import Users from "../Users";

class UsersComponent extends React.Component {

  onSetCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onSetCurrentPage={this.onSetCurrentPage}
    />
  }

}

let mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)

export default UsersContainer
