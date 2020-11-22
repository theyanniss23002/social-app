import React from 'react';
import style from './ProfileAddPost.module.scss';
import Button from "../../SharedComponents/Button/Button";
import {addPostActionCreator, listenNewPostChangeActionCreator} from "../../../redux/profileReducer";

function ProfileAddPost(props) {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let postStateChange = () => {
    let newPost = newPostElement.current.value;
    props.dispatch(listenNewPostChangeActionCreator(newPost))
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
