import {connect} from "react-redux";
import {subscribeUserAC, unsubscribeUserAC, setUsersAC, setTotalUsersCountAC} from '../../../../redux/usersReducer'
import React from "react";
import * as axios from "axios";
import UsersCard from "../UsersCard";

class UsersCardComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  render() {
    return <UsersCard users={this.props.users}
                      subscribeUser={this.props.subscribeUser}
                      unsubscribeUser={this.props.unsubscribeUser}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    subscribeUser: (userId) => {
      dispatch(subscribeUserAC(userId))
    },
    unsubscribeUser: (userId) => {
      dispatch(unsubscribeUserAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCardComponent)

export default UsersContainer
