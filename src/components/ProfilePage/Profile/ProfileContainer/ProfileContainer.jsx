import React from 'react'
import Profile from "../Profile";
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../../../hoc/withAuthRedirect'
import {compose} from "redux";
import {
  setUserProfileThunkCreator,
  getProfileStatusThunkCreator,
  updateProfileStatusThunkCreator
} from '../../../../redux/profileReducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 12974;
    }
    this.props.setUserProfile(userId)
    this.props.getProfileStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateProfileStatus={this.props.updateProfileStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
    getProfileStatus: getProfileStatusThunkCreator,
    updateProfileStatus: updateProfileStatusThunkCreator
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
