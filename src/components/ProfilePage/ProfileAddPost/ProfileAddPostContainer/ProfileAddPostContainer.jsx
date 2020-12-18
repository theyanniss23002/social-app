import {connect} from 'react-redux';
import {
  addPostActionCreator,
}
  from "../../../../redux/profileReducer";
import ProfileAddPost from "../ProfileAddPost";

// listenNewPostChangeActionCreator

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    // changePostItems: state.profilePage.changePostItems
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(addPostActionCreator(data));
    },
    // postStateChange: (newPost) => {
    //   dispatch(listenNewPostChangeActionCreator(newPost));
    // }
  }
}

const ProfileAddPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAddPost);

export default ProfileAddPostContainer;
