import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileAddPost from "../ProfileAddPost/ProfileAddPost";
import style from './Profile.module.scss';
import ProfileMyPost from "../ProfileMyPost/ProfileMyPost";

const Profile = (props) => {
  return (
    <div className={style.columnContent}>
      <ProfileCard/>
      <ProfileAddPost changePostItems={props.state.changePostItems}
                      addNewPost={props.addNewPost}
                      listenNewPostChange={props.listenNewPostChange}
      />
      <ProfileMyPost state={props.state.posts} />
    </div>
  );
}

export default Profile;
