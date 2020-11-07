import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileAddPost from "../ProfileAddPost/ProfileAddPost";
import style from './Profile.module.scss';

function Profile() {
  return (
    <div className={style.profile}>
      <ProfileCard/>
      <ProfileAddPost/>
    </div>
  );
}

export default Profile;
