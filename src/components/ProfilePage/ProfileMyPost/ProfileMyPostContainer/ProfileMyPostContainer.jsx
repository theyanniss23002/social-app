import {connect} from 'react-redux';
import ProfileMyPost from '../ProfileMyPost'

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage
  }
}

const ProfileMyPostContainer = connect(mapStateToProps)(ProfileMyPost);

export default ProfileMyPostContainer;
