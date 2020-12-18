import React from 'react';
import style from './ProfileAddPost.module.scss';
import Button from "../../SharedComponents/Button/Button";
import {useForm} from "react-hook-form";

function ProfileAddPost(props) {

  const {register, handleSubmit, watch, errors} = useForm()

  console.log(watch("post"))

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // }

  // let onPostStateChange = (e) => {
  //   /*let newPost = newPostElement.current.value;*/
  //   let newPost = e.currentTarget.value
  //   props.postStateChange(newPost)
  // }

  let addNewPost = (data) => {
    console.log(data)
    props.addPost(data);
  }

  return (
    <div className={style.post}>
      <span className={style.postTitle}>My posts</span>
      <form className={style.postAdd} onSubmit={handleSubmit(addNewPost)}>
        <textarea cols="49" rows="5"
                  className={style.postAddText}
                  placeholder="What's do you mind?"
                  // ref={newPostElement}
                  // onChange={onPostStateChange}
                  // value={props.changePostItems}
                  name={'post'}
                  ref={register({
                    required: {
                      value: true,
                      message: 'This is a required field'
                    },
                    maxLength: {
                      value: 300,
                      message: "max length is 300"
                    }
                  })}
        />
        {errors.post && errors.post.type === "required" &&
        <span className={style.postAddError} role="alert">{errors.post.message}</span>}
        {errors.post && errors.post.type === "maxLength" &&
        <span className={style.postAddError} role="alert">{errors.post.message}</span>}
        <Button name="send"/>
      </form>
    </div>
  );

}

export default ProfileAddPost;
