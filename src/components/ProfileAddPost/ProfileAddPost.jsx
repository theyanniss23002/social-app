import React from 'react';
import style from './ProfileAddPost.module.scss';

function ProfileAddPost() {
  return (
    <div className={style.post}>
      <span className={style.postTitle}>My posts</span>
      <form className={style.postAdd}>
        <textarea rows="3" type="text" className={style.postAddText} placeholder="Your News"></textarea>
        <button type="submit" className={style.postAddSubmit}>Send</button>
      </form>
    </div>
  );
}

export default ProfileAddPost;
