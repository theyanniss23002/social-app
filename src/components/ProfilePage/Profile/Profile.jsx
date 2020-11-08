import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileAddPost from "../ProfileAddPost/ProfileAddPost";
import style from './Profile.module.scss';
import ProfileMyPost from "../ProfileMyPost/ProfileMyPost";

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileCard/>
      <ProfileAddPost/>
      <ProfileMyPost/>
    </div>
  );
}

export default Profile;
