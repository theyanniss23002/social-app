import React from 'react';
import profileLogo from '../../assets/images/svg/profile-logo.svg'
import style from './ProfileCard.module.scss';

function ProfileCard() {
  return (
    <div className={style.card}>
      <img className={style.cardImage} src={profileLogo} alt=""/>
      <div className={style.cardInfo}>
        <span className={style.cardInfoName}>Arthur</span>
        <span className={style.cardInfoBirthday}>Date of birthday: 23 April 1997</span>
        <span className={style.cardInfoCity}>City: Kazan</span>
        <span className={style.cardInfoSite}>Web site: https://github.com/theyanniss23002/social-app</span>
      </div>
    </div>
  );
}

export default ProfileCard;
