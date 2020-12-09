import React from 'react'
import Profile from "../Profile";
import {connect} from "react-redux"
import {setUserProfileThunkCreator} from '../../../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
      />
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator,
})(withUrlDataContainerComponent)
