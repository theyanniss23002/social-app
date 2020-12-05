import React from "react"
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
import {usersRest} from '../../../../rest/rest'

class UsersCardComponent extends React.Component {

  componentDidMount() {
    this.props.switcherIsLoading(true)
    usersRest.getRequestUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.switcherIsLoading(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
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
