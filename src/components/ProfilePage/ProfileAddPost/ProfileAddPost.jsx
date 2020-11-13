import React from 'react';
import style from './ProfileAddPost.module.scss';
import Button from "../../SharedComponents/Button/Button";

function ProfileAddPost() {

  let newPostElement = React.createRef();

  let addPost = () => {
    let item = newPostElement.current.value;
    alert(item);
  }

  return (
    <div className={style.post}>
      <span className={style.postTitle}>My posts</span>
      <div className={style.postAdd}>
        <textarea cols="49" rows="5" type="text"
                  className={style.postAddText}
                  placeholder="What's do you mind?"
                  ref={newPostElement}
        ></textarea>
        <Button name="send" onClick={addPost} />
      </div>
    </div>
  );
}

export default ProfileAddPost;
