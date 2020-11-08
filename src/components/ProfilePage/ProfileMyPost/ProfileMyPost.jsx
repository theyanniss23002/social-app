import React from 'react';
import style from './ProfileMyPos.module.scss';
import profileLogo from '../../../assets/images/svg/profile-logo.svg'

const ProfileMyPost = () => {

  const posts = [
    {
      id: 1,
      user: 'Arthur',
      message: 'I\'m a going learn React',
      likes: 12,
    },
    {
      id: 2,
      user: 'Arthur',
      message: 'It\'s funny learn React',
      likes: 2,
    }
  ]

  return (
    posts.map((post) => {
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
