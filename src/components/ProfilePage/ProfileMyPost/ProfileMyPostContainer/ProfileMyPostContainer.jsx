import {connect} from 'react-redux';
import ProfileMyPost from '../ProfileMyPost'

let mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const ProfileMyPostContainer = connect(mapStateToProps)(ProfileMyPost);

export default ProfileMyPostContainer;
