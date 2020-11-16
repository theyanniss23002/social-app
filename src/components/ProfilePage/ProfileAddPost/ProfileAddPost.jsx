import React from 'react';
import style from './ProfileAddPost.module.scss';
import Button from "../../SharedComponents/Button/Button";

function ProfileAddPost(props) {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addNewPost();
  }

  let postStateChange = () => {
    let item = newPostElement.current.value;
    props.listenNewPostChange(item);
  }

  return (
    <div className={style.post}>
      <span className={style.postTitle}>My posts</span>
      <div className={style.postAdd}>
        <textarea cols="49" rows="5" type="text"
                  className={style.postAddText}
                  placeholder="What's do you mind?"
                  ref={newPostElement}
                  onChange={postStateChange}
                  value={props.changePostItems}
        />
        <Button name="send" handleClick={addPost} />
      </div>
    </div>
  );

}

export default ProfileAddPost;
