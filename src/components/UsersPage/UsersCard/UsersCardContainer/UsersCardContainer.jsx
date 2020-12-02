import React from "react"
import * as axios from "axios"
import {connect} from "react-redux"
import UsersCard from "../UsersCard"
import Loader from "../../../SharedComponents/Loader/Loader"
import {
  subscribeUser,
  unsubscribeUser,
  setUsers,
  setTotalUsersCount,
  switcherIsLoading
} from '../../../../redux/usersReducer'

class UsersCardComponent extends React.Component {

  componentDidMount() {
    this.props.switcherIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.switcherIsLoading(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Loader/> : null}
        <UsersCard users={this.props.users}
                   subscribeUser={this.props.subscribeUser}
                   unsubscribeUser={this.props.unsubscribeUser}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
}

const UsersContainer = connect(mapStateToProps, {
  subscribeUser,
  unsubscribeUser,
  setUsers,
  setTotalUsersCount,
  switcherIsLoading,
})(UsersCardComponent)

export default UsersContainer
