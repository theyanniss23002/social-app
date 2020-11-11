import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileAddPost from "../ProfileAddPost/ProfileAddPost";
import style from './Profile.module.scss';
import ProfileMyPost from "../ProfileMyPost/ProfileMyPost";

const Profile = (props) => {
  return (
    <div className={style.columnContent}>
      <ProfileCard/>
      <ProfileAddPost/>
      <ProfileMyPost state={props.state.posts} />
    </div>
  );
}

export default Profile;