import React from 'react';
import style from './Profile.module.scss';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileMyPostContainer from '../ProfileMyPost/ProfileMyPostContainer/ProfileMyPostContainer'
import ProfileAddPostContainer from "../ProfileAddPost/ProfileAddPostContainer/ProfileAddPostContainer";
import Loader from "../../SharedComponents/Loader/Loader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const Profile = (props) => {

  if (!props.profile) {
    return <Loader/>
  }

  return (
    <div className={style.columnContent}>
      <ProfileCard profile={props.profile}/>
      <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      <ProfileAddPostContainer/>
      <ProfileMyPostContainer/>
    </div>
  );
}

export default Profile;
