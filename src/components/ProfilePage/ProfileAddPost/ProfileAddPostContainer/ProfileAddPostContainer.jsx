import React from 'react';
import {addPostActionCreator, listenNewPostChangeActionCreator} from "../../../../redux/profileReducer";
import ProfileAddPost from "../ProfileAddPost";

function ProfileAddPostContainer(props) {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let postStateChange = (newPost) => {
    props.store.dispatch(listenNewPostChangeActionCreator(newPost))
  }

  return (
    <ProfileAddPost postStateChange={postStateChange}
                    addPost={addPost}
                    state={state.profile}
                    changePostItems={state.profile.changePostItems}
    />
  );

}

export default ProfileAddPostContainer;
