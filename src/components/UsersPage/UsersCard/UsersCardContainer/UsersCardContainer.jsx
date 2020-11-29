import {connect} from "react-redux";
import UsersCard from '../../UsersCard/UsersCard'
import {subscribeUserAC, unsubscribeUserAC, setUsersAC} from '../../../../redux/usersReducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCard)

export default UsersContainer
