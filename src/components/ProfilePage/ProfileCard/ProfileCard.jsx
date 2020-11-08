import React from 'react';
import profileLogo from '../../../assets/images/svg/profile-logo.svg'
import style from './ProfileCard.module.scss';

const ProfileCard = () => {
  return (
    <div className={style.card}>
      <img className={style.largeImageProfile} src={profileLogo} alt=""/>
      <div className={style.cardInfo}>
        <span className={style.cardInfoName}>Arthur</span>
        <span className={style.cardInfoBirthday}><strong>Date of birthday:</strong> 23 April 1997</span>
        <span className={style.cardInfoCity}><strong>City:</strong> Kazan</span>
        <span className={style.cardInfoSite}><strong>Web site:</strong> https://github.com/theyanniss23002/social-app</span>
      </div>
    </div>
  );
}

export default ProfileCard;
