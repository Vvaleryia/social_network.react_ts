import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../state/state";

export type PostDataPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
const MyPosts = (props: PostDataPropsType) => {
    let postDataElement = props.profilePage.posts.map(post =>
        <Post id={post.id}
              message={post.message}
              likesCount={post.likesCount}/>)
    const addPost = () => {
        if (newPostEl.current !== null) {
            props.dispatch(addPostAC())
        }
    }
    const onChangeValuePost = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            props.dispatch(updateNewPostTextAC(text))
        }
    }
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    return <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostEl}
                          value={props.profilePage.newValuePost}
                          onChange={onChangeValuePost}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            {postDataElement}
        </div>
    </div>
};

export default MyPosts;