import React from 'react';
import style from './ProfileCard.module.scss';

const ProfileCard = (props) => {
  return (
    <div className={style.card}>
      <img className={style.largeImageProfile} src={props.profile.photos.small} alt=""/>
      <div className={style.cardInfo}>
        <span className={style.cardInfoName}>{props.profile.fullName}</span>
        <span className={style.cardInfoAbout}><strong>About me: </strong>{props.profile.aboutMe}</span>
        <div className={style.cardInfoWrap}>
          <span className={style.cardInfoWrapContacts}>Contacts: </span>
          <div className={style.cardInfoWrapNav}>
            <span className={style.cardInfoWrapLink}>{props.profile.contacts.facebook}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
