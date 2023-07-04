import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsPropsType) => {
    let postDataElement = props.posts.map(post =>
        <Post id={post.id}
              message={post.message}
              likesCount={post.likesCount}/>)
    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost()
        }
    }
    const onChangeValuePost = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            props.updateNewPostText(text)
        }
    }
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    return <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostEl}
                          value={props.newValuePost}
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