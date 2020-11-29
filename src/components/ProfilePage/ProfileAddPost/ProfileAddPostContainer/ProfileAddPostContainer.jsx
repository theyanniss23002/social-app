import {connect} from 'react-redux';
import {addPostActionCreator,
  listenNewPostChangeActionCreator}
  from "../../../../redux/profileReducer";
import ProfileAddPost from "../ProfileAddPost";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    changePostItems: state.profilePage.changePostItems
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    postStateChange: (newPost) => {
      dispatch(listenNewPostChangeActionCreator(newPost));
    }
  }
}

const ProfileAddPostContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileAddPost);

export default ProfileAddPostContainer;
