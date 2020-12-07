import React from "react"
import {connect} from "react-redux"
import UsersCard from "../UsersCard"
import Loader from "../../../SharedComponents/Loader/Loader"
import {
  subscriptionThunkCreator,
  unsubscriptionThunkCreator,
  getUsersThunkCreator
} from '../../../../redux/usersReducer'

class UsersCardComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Loader/> : null}
        <UsersCard users={this.props.users}
                   changeButtonState={this.props.changeButtonState}
                   subscription={this.props.subscription}
                   unsubscription={this.props.unsubscription}
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
    changeButtonState: state.usersPage.changeButtonState,
  }
}

const UsersContainer = connect(mapStateToProps, {
  subscription: subscriptionThunkCreator,
  unsubscription: unsubscriptionThunkCreator,
  getUsers: getUsersThunkCreator,
})(UsersCardComponent)

export default UsersContainer
