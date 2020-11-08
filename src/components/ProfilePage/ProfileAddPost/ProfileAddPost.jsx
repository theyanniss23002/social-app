import React from 'react';
import style from './ProfileAddPost.module.scss';
import Button from "../../SharedComponents/Button/Button";

function ProfileAddPost() {
  return (
    <div className={style.post}>
      <span className={style.postTitle}>My posts</span>
      <form className={style.postAdd}>
        <textarea cols="49" rows="5" type="text" className={style.postAddText} placeholder="What's do you mind?"></textarea>
        <Button />
      </form>
    </div>
  );
}

export default ProfileAddPost;
