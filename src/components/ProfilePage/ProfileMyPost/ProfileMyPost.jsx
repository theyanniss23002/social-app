import React from 'react';
import style from './ProfileMyPos.module.scss';
import profileLogo from '../../../assets/images/svg/profile-logo.svg'

const ProfileMyPost = (props) => {

  return (
    props.state.map((post) => {
      return <Post key={post.id} post={post} />
    })
  )
}

export default ProfileMyPost;

const Post = ({post}) => {
  return (
    <div className={style.myPost}>
      <img className={style.miniImageProfile} src={profileLogo} alt="logotype" />
      <div className={style.myPostWrap}>
        <span className={style.myPostWrapUser}>{post.user}</span>
        <span className={style.myPostWrapDesc}>{post.message}</span>
        <span className={style.myPostWrapLike}>like: {post.likes}</span>
      </div>
    </div>
  )
}
