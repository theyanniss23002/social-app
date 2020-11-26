import React from 'react';
import style from './Profile.module.scss';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileMyPostContainer from '../ProfileMyPost/ProfileMyPostContainer/ProfileMyPostContainer'
import ProfileAddPostContainer from "../ProfileAddPost/ProfileAddPostContainer/ProfileAddPostContainer";

const Profile = () => {

  return (
    <div className={style.columnContent}>
      <ProfileCard/>
      <ProfileAddPostContainer/>
      <ProfileMyPostContainer/>
    </div>
  );
}

export default Profile;
