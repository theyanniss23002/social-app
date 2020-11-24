import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import style from './Profile.module.scss';
import ProfileMyPost from "../ProfileMyPost/ProfileMyPost";
import ProfileAddPostContainer from "../ProfileAddPost/ProfileAddPostContainer/ProfileAddPostContainer";

const Profile = (props) => {

  let state = props.store.getState();

  return (
    <div className={style.columnContent}>
      <ProfileCard/>
      <ProfileAddPostContainer store={props.store} />
      <ProfileMyPost state={state.profile.posts} />
    </div>
  );
}

export default Profile;
